export function compose<A extends any[], B, R>(fn: (b: B) => R, f1: (...a: A) => B): (...a: A) => R;
export function compose<A extends any[], B, C, R>(fn: (b: C) => R, f2: (b: B) => C, f1: (...a: A) => B): (...a: A) => R;
export function compose<A extends any[], B, C, D, R>(
  fn: (b: D) => R,
  f3: (b: C) => D,
  f2: (b: B) => C,
  f1: (...a: A) => B,
): (...a: A) => R;
export function compose<A extends any[], B, C, D, E, R>(
  fn: (b: E) => R,
  f4: (b: D) => E,
  f3: (b: C) => D,
  f2: (b: B) => C,
  f1: (...a: A) => B,
): (...a: A) => R;
export function compose<R, F extends [(...a: any[]) => R, ...((...a: any[]) => any)[]]>(
  ...fns: F
): (...args: any[]) => R {
  return (...args) => {
    let r = fns[fns.length - 1].apply(undefined, args);
    for (let i = fns.length - 2; i >= 0; i--) {
      r = fns[i](r);
    }

    return r;
  };
}
