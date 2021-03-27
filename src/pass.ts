/**
 * Provide a predicate and a value for it
 *  - if predicate returns `true`, return back that value
 *  - otherwise, return `undefined`
 */
export function pass<A, B extends A>(predicate: (a: A) => a is B): (t: A) => B | undefined;
export function pass<A>(predicate: (a: A) => boolean): (t: A) => A | undefined;
export function pass<A>(predicate: (a: A) => boolean) {
  return (t: A): A | undefined => (predicate(t) ? t : undefined);
}
