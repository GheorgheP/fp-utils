import { MVal } from "./types";
import { isNothing, MNothing } from "./Nothing";

type _Fn = (...args: any) => any;
type _F<R> = (...args: any) => MNothing<R>;
type _F1<T, R> = (t: T) => R;
type _Rt<T extends _Fn> = ReturnType<T>;
type _P<T extends _Fn> = Parameters<T>;

export function mCompose<A, R, F0 extends _F<A>>(fn: (a: A) => R, f0: F0): (...args: Parameters<F0>) => MVal<R>;
export function mCompose<A, B, R, F0 extends _F<A>>(
  fn: (a: B) => R,
  f1: _F1<A, B>,
  f0: F0,
): (...args: Parameters<F0>) => MVal<R>;
export function mCompose<A, B, C, R, F0 extends _F<A>>(
  fn: (a: C) => R,
  f2: _F1<B, C>,
  f1: _F1<A, B>,
  f0: F0,
): (...args: Parameters<F0>) => MVal<R>;
export function mCompose<A, B, C, D, R, F0 extends _F<A>>(
  fn: (a: D) => R,
  f3: _F1<C, D>,
  f2: _F1<B, C>,
  f1: _F1<A, B>,
  f0: F0,
): (...args: Parameters<F0>) => MVal<R>;
export function mCompose<A, B, C, D, E, R, F0 extends _F<A>>(
  fn: (a: E) => R,
  f4: _F1<D, E>,
  f3: _F1<C, D>,
  f2: _F1<B, C>,
  f1: _F1<A, B>,
  f0: F0,
): (...args: Parameters<F0>) => MVal<R>;
export function mCompose<F extends _Fn>(...fns: F[]): (...args: any) => MVal<any> {
  let [f, ...fs] = fns.reverse();

  return (...v: _P<typeof f>): MVal<_Rt<typeof fns[0]>> => {
    // @ts-ignore
    let _v = f(...v);

    if (isNothing(_v)) {
      return undefined;
    }

    for (let i = 0; i < fs.length; i++) {
      _v = fs[i](_v);

      if (isNothing(_v)) {
        return undefined;
      }
    }

    return _v;
  };
}
