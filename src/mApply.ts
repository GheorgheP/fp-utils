import { isNothing, MNothing } from "./Nothing";
import { MVal } from "./types";

type Nullify<T> = { [P in keyof T]: MNothing<T[P]> };

/**
 * Provide a function with no nullable parameters and it's parameters that may be Nothing.
 *  - If any of parameters is Nothing, return undefined
 *  - otherwise, apply function over values and return result
 *
 *  E.g.
 *  mApply(sum, 2, 3) === 5
 *  mApply(sum, null, 3) === undefined
 *  mApply(sum, 2, undefined) === undefined
 */
export function mApply<A extends any[], R>(f: (...a: A) => R, ...args: Nullify<A>): MVal<R> {
  return args.some(isNothing) ? undefined : f(...(args as A));
}
