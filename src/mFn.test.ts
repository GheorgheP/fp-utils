import { mFn } from "./mFn";
import { isNothing, MNothing, Nothing } from "./Nothing";
import { nothings } from "./internals/utils";

type F1 = (a: number) => string;
type F2 = (a: number, b: number) => string;
type F3 = (a: number, b: number, c: number) => string;
type F4 = (a: number, b: number, c: number, d: number) => string;
type Fn = F1 | F2 | F3 | F4;
type FP<T> = [T, T, T, T];

const print = (a: (Nothing | unknown)[]): string => {
  const l = ["A", "B", "C", "D"];
  return (
    a
      .map((i, k) => (isNothing(i) ? i : l[k]))
      .reduce((acc: string, i): string => acc + String(i) + " ", "")
      ?.trim() + ""
  );
};

describe("Testing 'mFn' function", () => {
  const f1: F1 = (a) => String(a);
  const f2: F2 = (a, b) => String(a + b);
  const f3: F3 = (a, b, c) => String(a + b + c);
  const f4: F4 = (a, b, c, d) => String(a + b + c + d);

  const items: [Fn, number[]][] = [
    [f1, [1]],
    [f2, [1, 2]],
    [f3, [1, 2, 3]],
    [f4, [1, 2, 3, 4]],
  ];

  items.map(([f, as]) => {
    test(`mFn(f)(${print(as)}) === f(${print(as)})`, () => {
      expect(mFn(f as Fn)(...(as as FP<number>))).toEqual(f(...(as as FP<number>)));
    });

    nothings.map((v) => {
      as.map((_, i) => {
        const _as: MNothing<number>[] = [...as];
        _as[i] = v;
        test(`mFn(f)(${print(_as)}) === undefined`, () => {
          expect(mFn(f as Fn)(...(_as as FP<MNothing<number>>))).toEqual(undefined);
        });
      });
    });
  });
});
