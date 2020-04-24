type _F = (a: any, b: any) => any;
type _P1<F extends _F> = Parameters<F>[0];
type _P2<F extends _F> = Parameters<F>[1];

type Curried<A, B, C> = {
  (a: A): (b: B) => C;
  (a: A, b: B): C;
  __curried: boolean;
};

export const curry2 = <F extends _F>(fn: F): Curried<_P1<F>, _P2<F>, ReturnType<F>> => {
  type A = _P1<F>;
  type B = _P2<F>;
  type C = ReturnType<F>;

  // @ts-ignore
  if (fn.__curried === true) {
    // @ts-ignore
    return fn as Curried<A, B, C>;
  }

  function f(a: A): (b: B) => C;
  function f(a: A, b: B): C;
  function f(...args: [A] | [A, B]): ((b: B) => C) | C {
    return args.length === 1 ? (b: B) => fn(args[0], b) : fn(args[0], args[1]);
  }

  f.__curried = true;

  return f;
};
