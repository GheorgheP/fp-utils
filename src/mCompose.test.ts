import { mCompose } from "./mCompose";
import { _const } from "./const";

describe("Testing 'mCompose' function", () => {
  const f1 = (a: number, b: number): number => a + b;
  const _f1 = (a: number, b: number): null => null && a + b;
  const f2 = (a: number): number => a + 1;
  // @ts-ignore
  const _f2 = (a: number): null | number => null;
  const f3 = (a: number): number => a * 2;

  test("mCompose(a,b,c) === a(b(c()))", () => {
    expect(mCompose(f3, f2, f1)(1, 2)).toBe(f3(f2(f1(1, 2))));
  });

  test("If any function return Nothing, return undefined", () => {
    expect(mCompose(f3, f2, _f1)(1, 2)).toBe(undefined);
    expect(mCompose(f3, _f2, f1)(1, 2)).toBe(undefined);
    expect(mCompose(f3, _const(null), f2, f1)(1, 2)).toBe(undefined);
  });
});
