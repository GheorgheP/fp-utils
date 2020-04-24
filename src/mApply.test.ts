import { mApply } from "./mApply";

describe("Testing 'mApply' function", () => {
  const fn = (a: number, b: number): number => a + b;

  describe("mApply(fn, a, b) === fn(a, b)", () => {
    [
      [0, 1],
      [1, 2],
      [-3, 4],
    ].map(([a, b]) => {
      test(`mApply(sum, ${a}, ${b}) === ${fn(a, b)}`, () => {
        expect(mApply(fn, a, b)).toEqual(fn(a, b));
      });
    });
  });
  describe("mApply(fn, Nothing,  b) === Nothing", () => {
    [-1, 0, 1, 2].map((b) => {
      test(`mApply(sum, Nothing, ${b}) === undefined`, () => {
        expect(mApply(fn, undefined, b)).toEqual(undefined);
      });
    });
  });
  describe("mApply(fn, a, Nothing) === Nothing", () => {
    [-1, 0, 1, 2].map((a) => {
      test(`mApply(sum, ${a}, Nothing) === undefined`, () => {
        expect(mApply(fn, a, null)).toEqual(undefined);
      });
    });
  });
});
