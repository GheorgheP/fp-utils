import { ParserSource, _parse, PureParser } from "./internals";

// region parseStrict
/**
 * Parse for a object structure from an type A. Need to provide a parser function for each object key.
 * If any of the parsers will return undefined, the parsing process will be stopped and will return `undefined`
 *
 * !Important: If the key is optional, you are forced to tell explicitly if the parser is strict or optional.
 *  - optional - even if this parser will return undefined, the parsing process will not be stopped, as the key is
 *  optional by specs and it is allowed to be undefined.
 */

export function parseStrict<A, B extends Record<any, any> | undefined>(parsers: PureParser<A, B>): (object: A) => B;

export function parseStrict<A, B extends Record<any, any> | undefined>(parsers: PureParser<A, B>, object: A): B;

export function parseStrict<A, B extends Record<any, any> | undefined>(
  parsers: PureParser<A, B>,
  object?: A,
): ((object: A) => B) | B {
  // @ts-expect-error
  return object === undefined
    ? // @ts-expect-error
      (o: A): B => _parse<PureParser<A, B>>(parsers, o as ParserSource<PureParser<A, B>>)
    : _parse<PureParser<A, B>>(parsers, object as ParserSource<PureParser<A, B>>);
}
// endregion
