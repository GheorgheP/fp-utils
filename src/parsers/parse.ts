import { Optional, Simple, ParserSource, ParseFunction, _parse, DirtyParser } from "./internals";

// region optional & strict
/**
 * Even if the parser returns `undefined`, the parsing process will not be stopped.
 * It's used to parse for types with optional keys
 */
export const optional = <A, B>(p: Simple<ParseFunction<A, B>>): Optional<ParseFunction<A, B>> => ({
  __type: "optional",
  fn: p,
});
// endregion

// region parse
/**
 * Parse for a object structure from an type A. Need to provide a parser function for each object key.
 * If any of the parsers will return undefined, the parsing process will be stopped and will return `undefined`
 *
 * !Important: If the key is optional, you are forced to tell explicitly if the parser is strict or optional.
 *  - optional - even if this parser will return undefined, the parsing process will not be stopped, as the key is
 *  optional by specs and it is allowed to be undefined.
 */
export function parse<A, B extends Record<any, any> | undefined>(
  parsers: DirtyParser<A, B>,
): (object: A) => B | undefined;

export function parse<A, B extends Record<any, any> | undefined>(parsers: DirtyParser<A, B>, object: A): B | undefined;

export function parse<A, B extends Record<any, any> | undefined>(
  parsers: DirtyParser<A, B>,
  object?: A,
): ((object: A) => B | undefined) | B | undefined {
  return object === undefined
    ? (o: A): B | undefined => _parse<DirtyParser<A, B>>(parsers, o as ParserSource<DirtyParser<A, B>>)
    : _parse<DirtyParser<A, B>>(parsers, object as ParserSource<DirtyParser<A, B>>);
}
// endregion
