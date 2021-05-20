import { isNothing, Nothing } from "./Nothing";

/**
 * Provide a series of functions and return the result of the first function that does not return Nothing
 */
// region 0 parameters
export function or<R>(f1: () => R): () => R;
export function or<R1, R2>(f1: () => R1 | Nothing, f2: () => R2): () => R1 | R2;
export function or<R1, R2, R3>(f1: () => R1 | Nothing, f2: () => R2 | Nothing, f3: () => R3): () => R1 | R2 | R3;
export function or<R1, R2, R3, R4>(
  f1: () => R1 | Nothing,
  f2: () => R2 | Nothing,
  f3: () => R3 | Nothing,
  f4: () => R4,
): () => R1 | R2 | R3 | R4;
export function or<R1, R2, R3, R4, R5>(
  f1: () => R1 | Nothing,
  f2: () => R2 | Nothing,
  f3: () => R3 | Nothing,
  f4: () => R4 | Nothing,
  f5: () => R5,
): () => R1 | R2 | R3 | R4 | R5;
export function or<R1, R2, R3, R4, R5, R6>(
  f1: () => R1 | Nothing,
  f2: () => R2 | Nothing,
  f3: () => R3 | Nothing,
  f4: () => R4 | Nothing,
  f5: () => R5 | Nothing,
  f6: () => R6,
): () => R1 | R2 | R3 | R4 | R5 | R6;
export function or<R1, R2, R3, R4, R5, R6, R7>(
  f1: () => R1 | Nothing,
  f2: () => R2 | Nothing,
  f3: () => R3 | Nothing,
  f4: () => R4 | Nothing,
  f5: () => R5 | Nothing,
  f6: () => R6 | Nothing,
  f7: () => R7,
): () => R1 | R2 | R3 | R4 | R5 | R6 | R7;
export function or<R1, R2, R3, R4, R5, R6, R7, R8>(
  f1: () => R1 | Nothing,
  f2: () => R2 | Nothing,
  f3: () => R3 | Nothing,
  f4: () => R4 | Nothing,
  f5: () => R5 | Nothing,
  f6: () => R6 | Nothing,
  f7: () => R7 | Nothing,
  f8: () => R8,
): () => R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8;
// endregion

// region 1 parameter
export function or<A, R>(f1: (a: A) => R): (a: A) => R;
export function or<A, R1, R2>(f1: (a: A) => R1 | Nothing, f2: (a: A) => R2): (a: A) => R1 | R2;
export function or<A, R1, R2, R3>(
  f1: (a: A) => R1 | Nothing,
  f2: (a: A) => R2 | Nothing,
  f3: (a: A) => R3,
): (a: A) => R1 | R2 | R3;
export function or<A, R1, R2, R3, R4>(
  f1: (a: A) => R1 | Nothing,
  f2: (a: A) => R2 | Nothing,
  f3: (a: A) => R3 | Nothing,
  f4: (a: A) => R4,
): (a: A) => R1 | R2 | R3 | R4;
export function or<A, R1, R2, R3, R4, R5>(
  f1: (a: A) => R1 | Nothing,
  f2: (a: A) => R2 | Nothing,
  f3: (a: A) => R3 | Nothing,
  f4: (a: A) => R4 | Nothing,
  f5: (a: A) => R5,
): (a: A) => R1 | R2 | R3 | R4 | R5;
export function or<A, R1, R2, R3, R4, R5, R6>(
  f1: (a: A) => R1 | Nothing,
  f2: (a: A) => R2 | Nothing,
  f3: (a: A) => R3 | Nothing,
  f4: (a: A) => R4 | Nothing,
  f5: (a: A) => R5 | Nothing,
  f6: (a: A) => R6,
): (a: A) => R1 | R2 | R3 | R4 | R5 | R6;
export function or<A, R1, R2, R3, R4, R5, R6, R7>(
  f1: (a: A) => R1 | Nothing,
  f2: (a: A) => R2 | Nothing,
  f3: (a: A) => R3 | Nothing,
  f4: (a: A) => R4 | Nothing,
  f5: (a: A) => R5 | Nothing,
  f6: (a: A) => R6 | Nothing,
  f7: (a: A) => R7,
): (a: A) => R1 | R2 | R3 | R4 | R5 | R6 | R7;
export function or<A, R1, R2, R3, R4, R5, R6, R7, R8>(
  f1: (a: A) => R1 | Nothing,
  f2: (a: A) => R2 | Nothing,
  f3: (a: A) => R3 | Nothing,
  f4: (a: A) => R4 | Nothing,
  f5: (a: A) => R5 | Nothing,
  f6: (a: A) => R6 | Nothing,
  f7: (a: A) => R7 | Nothing,
  f8: (a: A) => R8,
): (a: A) => R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8;
// endregion

// region 2 parameters
export function or<A, B, R>(f1: (a: A, b: B) => R): (a: A, b: B) => R;
export function or<A, B, R1, R2>(f1: (a: A, b: B) => R1 | Nothing, f2: (a: A, b: B) => R2): (a: A, b: B) => R1 | R2;
export function or<A, B, R1, R2, R3>(
  f1: (a: A, b: B) => R1 | Nothing,
  f2: (a: A, b: B) => R2 | Nothing,
  f3: (a: A, b: B) => R3,
): (a: A, b: B) => R1 | R2 | R3;
export function or<A, B, R1, R2, R3, R4>(
  f1: (a: A, b: B) => R1 | Nothing,
  f2: (a: A, b: B) => R2 | Nothing,
  f3: (a: A, b: B) => R3 | Nothing,
  f4: (a: A, b: B) => R4,
): (a: A, b: B) => R1 | R2 | R3 | R4;
export function or<A, B, R1, R2, R3, R4, R5>(
  f1: (a: A, b: B) => R1 | Nothing,
  f2: (a: A, b: B) => R2 | Nothing,
  f3: (a: A, b: B) => R3 | Nothing,
  f4: (a: A, b: B) => R4 | Nothing,
  f5: (a: A, b: B) => R5,
): (a: A, b: B) => R1 | R2 | R3 | R4 | R5;
export function or<A, B, R1, R2, R3, R4, R5, R6>(
  f1: (a: A, b: B) => R1 | Nothing,
  f2: (a: A, b: B) => R2 | Nothing,
  f3: (a: A, b: B) => R3 | Nothing,
  f4: (a: A, b: B) => R4 | Nothing,
  f5: (a: A, b: B) => R5 | Nothing,
  f6: (a: A, b: B) => R6,
): (a: A, b: B) => R1 | R2 | R3 | R4 | R5 | R6;
export function or<A, B, R1, R2, R3, R4, R5, R6, R7>(
  f1: (a: A, b: B) => R1 | Nothing,
  f2: (a: A, b: B) => R2 | Nothing,
  f3: (a: A, b: B) => R3 | Nothing,
  f4: (a: A, b: B) => R4 | Nothing,
  f5: (a: A, b: B) => R5 | Nothing,
  f6: (a: A, b: B) => R6 | Nothing,
  f7: (a: A, b: B) => R7,
): (a: A, b: B) => R1 | R2 | R3 | R4 | R5 | R6 | R7;
export function or<A, B, R1, R2, R3, R4, R5, R6, R7, R8>(
  f1: (a: A, b: B) => R1 | Nothing,
  f2: (a: A, b: B) => R2 | Nothing,
  f3: (a: A, b: B) => R3 | Nothing,
  f4: (a: A, b: B) => R4 | Nothing,
  f5: (a: A, b: B) => R5 | Nothing,
  f6: (a: A, b: B) => R6 | Nothing,
  f7: (a: A, b: B) => R7 | Nothing,
  f8: (a: A, b: B) => R8,
): (a: A, b: B) => R1 | R2 | R3 | R4 | R5 | R6 | R7 | R8;
// endregion
export function or<T, R>(...fns: ((...t: T[]) => R)[]): (...t: T[]) => R {
  // @ts-expect-error, Technically this function may return undefined,
  // but type system doesn't allow this
  return (...args) => {
    for (let i = 0; i <= fns.length; i++) {
      const v = fns[i]?.(...args);

      if (!isNothing(v)) {
        return v;
      }
    }
  };
}
