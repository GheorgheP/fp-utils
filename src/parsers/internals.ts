import { isNothing } from "../Nothing";

export interface NonEmptyArray<A> extends Array<A> {
  0: A;
}

// region PureParser
export type PureParser<A, B extends Record<any, any> | undefined> = {
  [K in keyof B]: unknown extends B[K]
    ? Pure<A, B[K]>
    : undefined extends B[K]
    ? Optional<Pure<A, B[K]>>
    : Pure<A, B[K]>;
};
// endregion

// region DirtyParser
export type DirtyParser<A, B extends Record<any, any> | undefined> = {
  [K in keyof B]: unknown extends B[K]
    ? Simple<Dirty<A, B[K]>>
    : undefined extends B[K]
    ? Def<Dirty<A, B[K]>>
    : Dirty<A, B[K]>;
};
// endregion

// region ParseFunction
/**
 * @internal
 */
export type Pure<A, B> = (v: A) => B;

/**
 * @internal
 */
export type Dirty<A, B> = (v: A) => B | undefined;

/**
 * @internal
 */
export type ParseFunction<A, B> = Pure<A, B> | Dirty<A, B>;

/**
 * @internal
 */

export type Simple<P extends ParseFunction<any, any>> = P;

/**
 * @internal
 */

export type Optional<P extends Simple<any>> = {
  __type: "optional";
  fn: P;
};

/**
 * @internal
 */

export type Strict<P extends Simple<any>> = {
  __type: "strict";
  fn: P;
};

/**
 * @internal
 */

export type Def<P extends Simple<any>> = Optional<P> | Strict<P>;

/**
 * @internal
 */

export type All<P extends Simple<any>> = Def<P> | P;
// endregion

// region optional & strict
/**
 * @internal
 */
export const isOptional = <A, B>(v: All<ParseFunction<A, B>>): v is Optional<ParseFunction<A, B>> =>
  (v as Def<ParseFunction<A, B>>).__type === "optional";

/**
 * @internal
 */
export const call = <A, B>(p: All<ParseFunction<A, B>>, v: A): B | undefined => {
  switch ((p as Def<ParseFunction<A, B>>).__type) {
    case "optional":
    case "strict":
      return (p as Def<ParseFunction<A, B>>).fn(v);
    default:
      return (p as Simple<ParseFunction<A, B>>)(v);
  }
};
// endregion

// region Parser
/**
 * @internal
 */

export type Parser<A, B extends Record<any, any> | undefined> = PureParser<A, B> | DirtyParser<A, B>;

/**
 * @internal
 */

export type ParserSource<P extends Parser<any, any>> = P extends Parser<infer T, any> ? T : never;

/**
 * @internal
 */

export type ParserTarget<P extends Parser<any, any>> = P extends Parser<any, infer T> ? T : never;
// endregion

// region _parse

/**
 * @internal
 */
export function _parse<P extends PureParser<any, any>>(parsers: P, object: ParserSource<P>): ParserTarget<P>;

/**
 * @internal
 */
export function _parse<P extends DirtyParser<any, any>>(
  parsers: P,
  object: ParserSource<P>,
): ParserTarget<P> | undefined;

/**
 * @internal
 */
export function _parse<P extends Parser<any, any>>(parsers: P, object: ParserSource<P>): ParserTarget<P> | undefined {
  type B = ParserTarget<P>;
  const b: Partial<B> = {};

  for (const p in parsers) {
    if (!Object.prototype.hasOwnProperty.call(parsers, p)) {
      continue;
    }

    const v: B[typeof p] | undefined = call(parsers[p], object);

    if (!isOptional(parsers[p]) && isNothing(v)) {
      return undefined as ParserTarget<P>;
    }

    b[p] = v;
  }

  return b as ParserTarget<P>;
}
// endregion
