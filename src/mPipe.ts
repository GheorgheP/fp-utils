import { MNothing, isT } from "./Nothing";

/**
 * Lifted version of the Ramda.pipe: https://ramdajs.com/docs/#pipe
 * Performs left-to-right function composition.
 * The first argument may have any arity; the remaining arguments must be unary.
 *
 * It is piping similar to Ramda.pipe, but in addition handles the cases of empty values
 *  - In case one of the input arguments is Nothing, mPipe returns `undefined`
 *  - In case one of the piped functions return Nothing, mPipe returns `undefined`
 */

export function mPipe<T1>(fn0: () => MNothing<T1>): () => T1 | undefined;
export function mPipe<V0, T1>(fn0: (x0: V0) => MNothing<T1>): (x0: MNothing<V0>) => T1 | undefined;
export function mPipe<V0, V1, T1>(
  fn0: (x0: V0, x1: V1) => MNothing<T1>,
): (x0: MNothing<V0>, x1: MNothing<V1>) => T1 | undefined;
export function mPipe<V0, V1, V2, T1>(
  fn0: (x0: V0, x1: V1, x2: V2) => MNothing<T1>,
): (x0: MNothing<V0>, x1: MNothing<V1>, x2: MNothing<V2>) => T1 | undefined;

export function mPipe<T1, T2>(fn0: () => MNothing<T1>, fn1: (x: T1) => MNothing<T2>): () => T2 | undefined;
export function mPipe<V0, T1, T2>(
  fn0: (x0: V0) => MNothing<T1>,
  fn1: (x: T1) => MNothing<T2>,
): (x0: MNothing<V0>) => T2 | undefined;
export function mPipe<V0, V1, T1, T2>(
  fn0: (x0: V0, x1: V1) => MNothing<T1>,
  fn1: (x: T1) => MNothing<T2>,
): (x0: MNothing<V0>, x1: MNothing<V1>) => T2 | undefined;
export function mPipe<V0, V1, V2, T1, T2>(
  fn0: (x0: V0, x1: V1, x2: V2) => MNothing<T1>,
  fn1: (x: T1) => MNothing<T2>,
): (x0: MNothing<V0>, x1: MNothing<V1>, x2: MNothing<V2>) => T2 | undefined;

export function mPipe<T1, T2, T3>(
  fn0: () => MNothing<T1>,
  fn1: (x: T1) => MNothing<T2>,
  fn2: (x: T2) => MNothing<T3>,
): () => T3 | undefined;
export function mPipe<V0, T1, T2, T3>(
  fn0: (x: V0) => MNothing<T1>,
  fn1: (x: T1) => MNothing<T2>,
  fn2: (x: T2) => MNothing<T3>,
): (x: MNothing<V0>) => T3 | undefined;
export function mPipe<V0, V1, T1, T2, T3>(
  fn0: (x0: V0, x1: V1) => MNothing<T1>,
  fn1: (x: T1) => MNothing<T2>,
  fn2: (x: T2) => MNothing<T3>,
): (x0: MNothing<V0>, x1: MNothing<V1>) => T3 | undefined;
export function mPipe<V0, V1, V2, T1, T2, T3>(
  fn0: (x0: V0, x1: V1, x2: V2) => MNothing<T1>,
  fn1: (x: T1) => MNothing<T2>,
  fn2: (x: T2) => MNothing<T3>,
): (x0: MNothing<V0>, x1: MNothing<V1>, x2: MNothing<V2>) => T3 | undefined;

export function mPipe<T1, T2, T3, T4>(
  fn0: () => MNothing<T1>,
  fn1: (x: T1) => MNothing<T2>,
  fn2: (x: T2) => MNothing<T3>,
  fn3: (x: T3) => MNothing<T4>,
): () => T4 | undefined;
export function mPipe<V0, T1, T2, T3, T4>(
  fn0: (x: V0) => MNothing<T1>,
  fn1: (x: T1) => MNothing<T2>,
  fn2: (x: T2) => MNothing<T3>,
  fn3: (x: T3) => MNothing<T4>,
): (x: MNothing<V0>) => T4 | undefined;
export function mPipe<V0, V1, T1, T2, T3, T4>(
  fn0: (x0: V0, x1: V1) => MNothing<T1>,
  fn1: (x: T1) => MNothing<T2>,
  fn2: (x: T2) => MNothing<T3>,
  fn3: (x: T3) => MNothing<T4>,
): (x0: MNothing<V0>, x1: MNothing<V1>) => T4 | undefined;
export function mPipe<V0, V1, V2, T1, T2, T3, T4>(
  fn0: (x0: V0, x1: V1, x2: V2) => MNothing<T1>,
  fn1: (x: T1) => MNothing<T2>,
  fn2: (x: T2) => MNothing<T3>,
  fn3: (x: T3) => MNothing<T4>,
): (x0: MNothing<V0>, x1: MNothing<V1>, x2: MNothing<V2>) => T4 | undefined;

export function mPipe<T1, T2, T3, T4, T5>(
  fn0: () => MNothing<T1>,
  fn1: (x: T1) => MNothing<T2>,
  fn2: (x: T2) => MNothing<T3>,
  fn3: (x: T3) => MNothing<T4>,
  fn4: (x: T4) => MNothing<T5>,
): () => T5 | undefined;
export function mPipe<V0, T1, T2, T3, T4, T5>(
  fn0: (x: V0) => MNothing<T1>,
  fn1: (x: T1) => MNothing<T2>,
  fn2: (x: T2) => MNothing<T3>,
  fn3: (x: T3) => MNothing<T4>,
  fn4: (x: T4) => MNothing<T5>,
): (x: MNothing<V0>) => T5 | undefined;
export function mPipe<V0, V1, T1, T2, T3, T4, T5>(
  fn0: (x0: V0, x1: V1) => MNothing<T1>,
  fn1: (x: T1) => MNothing<T2>,
  fn2: (x: T2) => MNothing<T3>,
  fn3: (x: T3) => MNothing<T4>,
  fn4: (x: T4) => MNothing<T5>,
): (x0: MNothing<V0>, x1: MNothing<V1>) => T5 | undefined;
export function mPipe<V0, V1, V2, T1, T2, T3, T4, T5>(
  fn0: (x0: V0, x1: V1, x2: V2) => MNothing<T1>,
  fn1: (x: T1) => MNothing<T2>,
  fn2: (x: T2) => MNothing<T3>,
  fn3: (x: T3) => MNothing<T4>,
  fn4: (x: T4) => MNothing<T5>,
): (x0: MNothing<V0>, x1: MNothing<V1>, x2: MNothing<V2>) => T5 | undefined;

export function mPipe<T1, T2, T3, T4, T5, T6>(
  fn0: () => MNothing<T1>,
  fn1: (x: T1) => MNothing<T2>,
  fn2: (x: T2) => MNothing<T3>,
  fn3: (x: T3) => MNothing<T4>,
  fn4: (x: T4) => MNothing<T5>,
  fn5: (x: T5) => MNothing<T6>,
): () => T6 | undefined;
export function mPipe<V0, T1, T2, T3, T4, T5, T6>(
  fn0: (x: V0) => MNothing<T1>,
  fn1: (x: T1) => MNothing<T2>,
  fn2: (x: T2) => MNothing<T3>,
  fn3: (x: T3) => MNothing<T4>,
  fn4: (x: T4) => MNothing<T5>,
  fn5: (x: T5) => MNothing<T6>,
): (x: MNothing<V0>) => T6 | undefined;
export function mPipe<V0, V1, T1, T2, T3, T4, T5, T6>(
  fn0: (x0: V0, x1: V1) => MNothing<T1>,
  fn1: (x: T1) => MNothing<T2>,
  fn2: (x: T2) => MNothing<T3>,
  fn3: (x: T3) => MNothing<T4>,
  fn4: (x: T4) => MNothing<T5>,
  fn5: (x: T5) => MNothing<T6>,
): (x0: MNothing<V0>, x1: MNothing<V1>) => T6 | undefined;
export function mPipe<V0, V1, V2, T1, T2, T3, T4, T5, T6>(
  fn0: (x0: V0, x1: V1, x2: V2) => MNothing<T1>,
  fn1: (x: T1) => MNothing<T2>,
  fn2: (x: T2) => MNothing<T3>,
  fn3: (x: T3) => MNothing<T4>,
  fn4: (x: T4) => MNothing<T5>,
  fn5: (x: T5) => MNothing<T6>,
): (x0: MNothing<V0>, x1: MNothing<V1>, x2: MNothing<V2>) => T6 | undefined;

export function mPipe<T1, T2, T3, T4, T5, T6, T7>(
  fn0: () => MNothing<T1>,
  fn1: (x: T1) => MNothing<T2>,
  fn2: (x: T2) => MNothing<T3>,
  fn3: (x: T3) => MNothing<T4>,
  fn4: (x: T4) => MNothing<T5>,
  fn5: (x: T5) => MNothing<T6>,
  fn: (x: T6) => MNothing<T7>,
): () => T7 | undefined;
export function mPipe<V0, T1, T2, T3, T4, T5, T6, T7>(
  fn0: (x: V0) => MNothing<T1>,
  fn1: (x: T1) => MNothing<T2>,
  fn2: (x: T2) => MNothing<T3>,
  fn3: (x: T3) => MNothing<T4>,
  fn4: (x: T4) => MNothing<T5>,
  fn5: (x: T5) => MNothing<T6>,
  fn: (x: T6) => MNothing<T7>,
): (x: MNothing<V0>) => T7 | undefined;
export function mPipe<V0, V1, T1, T2, T3, T4, T5, T6, T7>(
  fn0: (x0: V0, x1: V1) => MNothing<T1>,
  fn1: (x: T1) => MNothing<T2>,
  fn2: (x: T2) => MNothing<T3>,
  fn3: (x: T3) => MNothing<T4>,
  fn4: (x: T4) => MNothing<T5>,
  fn5: (x: T5) => MNothing<T6>,
  fn6: (x: T6) => MNothing<T7>,
): (x0: MNothing<V0>, x1: MNothing<V1>) => T7 | undefined;
export function mPipe<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7>(
  fn0: (x0: V0, x1: V1, x2: V2) => MNothing<T1>,
  fn1: (x: T1) => MNothing<T2>,
  fn2: (x: T2) => MNothing<T3>,
  fn3: (x: T3) => MNothing<T4>,
  fn4: (x: T4) => MNothing<T5>,
  fn5: (x: T5) => MNothing<T6>,
  fn6: (x: T6) => MNothing<T7>,
): (x0: MNothing<V0>, x1: MNothing<V1>, x2: MNothing<V2>) => T7 | undefined;

export function mPipe<T1, T2, T3, T4, T5, T6, T7, T8>(
  fn0: () => MNothing<T1>,
  fn1: (x: T1) => MNothing<T2>,
  fn2: (x: T2) => MNothing<T3>,
  fn3: (x: T3) => MNothing<T4>,
  fn4: (x: T4) => MNothing<T5>,
  fn5: (x: T5) => MNothing<T6>,
  fn6: (x: T6) => MNothing<T7>,
  fn: (x: T7) => MNothing<T8>,
): () => T8 | undefined;
export function mPipe<V0, T1, T2, T3, T4, T5, T6, T7, T8>(
  fn0: (x: V0) => MNothing<T1>,
  fn1: (x: T1) => MNothing<T2>,
  fn2: (x: T2) => MNothing<T3>,
  fn3: (x: T3) => MNothing<T4>,
  fn4: (x: T4) => MNothing<T5>,
  fn5: (x: T5) => MNothing<T6>,
  fn6: (x: T6) => MNothing<T7>,
  fn: (x: T7) => MNothing<T8>,
): (x: MNothing<V0>) => T8 | undefined;
export function mPipe<V0, V1, T1, T2, T3, T4, T5, T6, T7, T8>(
  fn0: (x0: V0, x1: V1) => MNothing<T1>,
  fn1: (x: T1) => MNothing<T2>,
  fn2: (x: T2) => MNothing<T3>,
  fn3: (x: T3) => MNothing<T4>,
  fn4: (x: T4) => MNothing<T5>,
  fn5: (x: T5) => MNothing<T6>,
  fn6: (x: T6) => MNothing<T7>,
  fn7: (x: T7) => MNothing<T8>,
): (x0: MNothing<V0>, x1: MNothing<V1>) => T8 | undefined;
export function mPipe<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7, T8>(
  fn0: (x0: V0, x1: V1, x2: V2) => MNothing<T1>,
  fn1: (x: T1) => MNothing<T2>,
  fn2: (x: T2) => MNothing<T3>,
  fn3: (x: T3) => MNothing<T4>,
  fn4: (x: T4) => MNothing<T5>,
  fn5: (x: T5) => MNothing<T6>,
  fn6: (x: T6) => MNothing<T7>,
  fn7: (x: T7) => MNothing<T8>,
): (x0: MNothing<V0>, x1: MNothing<V1>, x2: MNothing<V2>) => T8 | undefined;

export function mPipe<T1, T2, T3, T4, T5, T6, T7, T8, T9>(
  fn0: () => MNothing<T1>,
  fn1: (x: T1) => MNothing<T2>,
  fn2: (x: T2) => MNothing<T3>,
  fn3: (x: T3) => MNothing<T4>,
  fn4: (x: T4) => MNothing<T5>,
  fn5: (x: T5) => MNothing<T6>,
  fn6: (x: T6) => MNothing<T7>,
  fn7: (x: T7) => MNothing<T8>,
  fn8: (x: T8) => MNothing<T9>,
): () => T9 | undefined;
export function mPipe<V0, T1, T2, T3, T4, T5, T6, T7, T8, T9>(
  fn0: (x0: V0) => MNothing<T1>,
  fn1: (x: T1) => MNothing<T2>,
  fn2: (x: T2) => MNothing<T3>,
  fn3: (x: T3) => MNothing<T4>,
  fn4: (x: T4) => MNothing<T5>,
  fn5: (x: T5) => MNothing<T6>,
  fn6: (x: T6) => MNothing<T7>,
  fn7: (x: T7) => MNothing<T8>,
  fn8: (x: T8) => MNothing<T9>,
): (x0: MNothing<V0>) => T9 | undefined;
export function mPipe<V0, V1, T1, T2, T3, T4, T5, T6, T7, T8, T9>(
  fn0: (x0: V0, x1: V1) => MNothing<T1>,
  fn1: (x: T1) => MNothing<T2>,
  fn2: (x: T2) => MNothing<T3>,
  fn3: (x: T3) => MNothing<T4>,
  fn4: (x: T4) => MNothing<T5>,
  fn5: (x: T5) => MNothing<T6>,
  fn6: (x: T6) => MNothing<T7>,
  fn7: (x: T7) => MNothing<T8>,
  fn8: (x: T8) => MNothing<T9>,
): (x0: MNothing<V0>, x1: MNothing<V1>) => T9 | undefined;
export function mPipe<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7, T8, T9>(
  fn0: (x0: V0, x1: V1, x2: V2) => MNothing<T1>,
  fn1: (x: T1) => MNothing<T2>,
  fn2: (x: T2) => MNothing<T3>,
  fn3: (x: T3) => MNothing<T4>,
  fn4: (x: T4) => MNothing<T5>,
  fn5: (x: T5) => MNothing<T6>,
  fn6: (x: T6) => MNothing<T7>,
  fn7: (x: T7) => MNothing<T8>,
  fn8: (x: T8) => MNothing<T9>,
): (x0: MNothing<V0>, x1: MNothing<V1>, x2: MNothing<V2>) => T9 | undefined;

export function mPipe<T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
  fn0: () => MNothing<T1>,
  fn1: (x: T1) => MNothing<T2>,
  fn2: (x: T2) => MNothing<T3>,
  fn3: (x: T3) => MNothing<T4>,
  fn4: (x: T4) => MNothing<T5>,
  fn5: (x: T5) => MNothing<T6>,
  fn6: (x: T6) => MNothing<T7>,
  fn7: (x: T7) => MNothing<T8>,
  fn8: (x: T8) => MNothing<T9>,
  fn9: (x: T9) => MNothing<T10>,
): () => T10 | undefined;
export function mPipe<V0, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
  fn0: (x0: V0) => MNothing<T1>,
  fn1: (x: T1) => MNothing<T2>,
  fn2: (x: T2) => MNothing<T3>,
  fn3: (x: T3) => MNothing<T4>,
  fn4: (x: T4) => MNothing<T5>,
  fn5: (x: T5) => MNothing<T6>,
  fn6: (x: T6) => MNothing<T7>,
  fn7: (x: T7) => MNothing<T8>,
  fn8: (x: T8) => MNothing<T9>,
  fn9: (x: T9) => MNothing<T10>,
): (x0: MNothing<V0>) => T10 | undefined;
export function mPipe<V0, V1, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
  fn0: (x0: V0, x1: V1) => MNothing<T1>,
  fn1: (x: T1) => MNothing<T2>,
  fn2: (x: T2) => MNothing<T3>,
  fn3: (x: T3) => MNothing<T4>,
  fn4: (x: T4) => MNothing<T5>,
  fn5: (x: T5) => MNothing<T6>,
  fn6: (x: T6) => MNothing<T7>,
  fn7: (x: T7) => MNothing<T8>,
  fn8: (x: T8) => MNothing<T9>,
  fn9: (x: T9) => MNothing<T10>,
): (x0: MNothing<V0>, x1: MNothing<V1>) => T10 | undefined;
export function mPipe<V0, V1, V2, T1, T2, T3, T4, T5, T6, T7, T8, T9, T10>(
  fn0: (x0: V0, x1: V1, x2: V2) => MNothing<T1>,
  fn1: (x: T1) => MNothing<T2>,
  fn2: (x: T2) => MNothing<T3>,
  fn3: (x: T3) => MNothing<T4>,
  fn4: (x: T4) => MNothing<T5>,
  fn5: (x: T5) => MNothing<T6>,
  fn6: (x: T6) => MNothing<T7>,
  fn7: (x: T7) => MNothing<T8>,
  fn8: (x: T8) => MNothing<T9>,
  fn9: (x: T9) => MNothing<T10>,
): (x0: MNothing<V0>, x1: MNothing<V1>, x2: MNothing<V2>) => T10 | undefined;
export function mPipe(...[h, ...fns]: [(...args: any) => any, ...((...args: any) => any)[]]): (...args: any[]) => any {
  return (...args: any[]) =>
    args.every(isT) ? fns.reduce((v, fn) => (isT(v) ? fn(v) : undefined), h(...args)) ?? undefined : undefined;
}
