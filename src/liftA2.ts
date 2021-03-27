/**
 * Apply a binary function over result of 2 single functions
 *
 * E.g. liftA2(sum, inc, sqr)(2, 2) = (2 + 1) + (2 * 2) = 3+4 = 7
 */
export function liftA2<A, A2, B, B2, R>(
  fn: (a: A2, b: B2) => R,
  f1: (a: A) => A2,
  f2: (a: B) => B2,
): (a: A, b: B) => R {
  return (a: A, b: B): R => fn(f1(a), f2(b));
}
