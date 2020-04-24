export function compose<A extends any[], B, C>(f2: (b: B) => C, f1: (...a: A) => B): (...a: A) => C {
  return (...a: A) => f2(f1(...a));
}

declare function inc(n: number): number;
declare function inc2(n: number): string;
declare function id<A>(a: A): A;

const x = compose(inc2, inc);
const y = compose(inc2, id);
const z = compose(id, inc2);

console.log(x, y, z);
