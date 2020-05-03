import { isNothing, MNothing } from "./Nothing";

type Nullify<T> = { [P in keyof T]: MNothing<T[P]> };

/**
 * Provide a function with no nullable parameters and it's parameters that may be Nothing.
 *  - If any of parameters is Nothing, return undefined
 *  - otherwise, apply function over values and return result
 *
 *  E.g.
 *  mCall(sum, 2, 3) === 5
 *  mCall(sum, null, 3) === undefined
 *  mCall(sum, 2, undefined) === undefined
 */
export function mCall<A extends any[], R>(f: (...a: A) => R, ...args: Nullify<A>): R | undefined {
  return args.some(isNothing) ? undefined : f(...(args as A));
}
