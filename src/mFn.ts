import { isNothing, MNothing, Nothing } from "./Nothing";

type _ = unknown;
type Nullify<T> = { [P in keyof T]: MNothing<T[P]> };

export function mFn<A, R>(
  f: (a: A) => R,
): {
  (a: A): R;
  (a: Nothing): undefined;
  (a: MNothing<A>): R | undefined;
};

export function mFn<A, B, R>(
  f: (a: A, b: B) => R,
): {
  (a: A, b: B): R;
  (a: Nothing, b: unknown): undefined;
  (a: unknown, b: Nothing): undefined;
  (a: MNothing<A>, b: MNothing<B>): R | undefined;
};

export function mFn<A, B, C, R>(
  f: (a: A, b: B, c: C) => R,
): {
  (a: A, b: B, c: C): R;
  (a: Nothing, b: _, c: _): undefined;
  (a: _, b: Nothing, c: _): undefined;
  (a: _, b: _, c: Nothing): undefined;
  (a: MNothing<A>, b: MNothing<B>, c: MNothing<C>): R | undefined;
};

export function mFn<A, B, C, D, R>(
  f: (a: A, b: B, c: C, d: D) => R,
): {
  (a: A, b: B, c: C, d: D): R;
  (a: Nothing, b: _, c: _, d: _): undefined;
  (a: _, b: Nothing, c: _, d: _): undefined;
  (a: _, b: _, c: Nothing, d: _): undefined;
  (a: _, b: _, c: _, d: Nothing): undefined;
  (a: MNothing<A>, b: MNothing<B>, c: MNothing<C>, d: MNothing<D>): R | undefined;
};

export function mFn<A extends any[], R>(f: (...a: A) => R): (...a: Nullify<A>) => R | undefined {
  return (...a: Nullify<A>) => (a.some(isNothing) ? undefined : f(...(a as A)));
}
