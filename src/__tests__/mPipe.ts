import { mPipe } from "../mPipe";

describe("Testing 'mPipe' function", function () {
  const f1 = (a: number, b: number): number => a + b;
  const mF1 = (a: number, b: number): number | undefined => (a > 0 ? a + b : undefined);
  const f2 = (a: number): string => a.toString();
  const mF2 = (a: number): string | undefined => (a > 5 ? a.toString() : undefined);
  const f3 = (a: string): string[] => [a];
  const mF3 = (a: string): string[] | undefined => (a.length > 5 ? undefined : [a]);

  test("If any of input argument is nothing, return undefined", () => {
    const fn = mPipe(f1, f2, f3);

    expect(fn(1, undefined)).toBe(undefined);
    expect(fn(undefined, 2)).toBe(undefined);
    expect(fn(1, null)).toBe(undefined);
    expect(fn(null, 2)).toBe(undefined);
  });

  test("If any any callback return nothing value, return undefined", () => {
    const fn1 = mPipe(mF1, f2, f3);
    const fn2 = mPipe(f1, mF2, f3);
    const fn3 = mPipe(f1, f2, mF3);

    expect(fn1(0, 1)).toBe(undefined);
    expect(fn2(1, 2)).toBe(undefined);
    expect(fn3(123456, 123456)).toBe(undefined);
  });

  test("If no nullish arguments and no nothing returns, return desired value", () => {
    const fn = mPipe(mF1, mF2, mF3);

    expect(fn(5, 5)).toEqual(["10"]);
  });
});
