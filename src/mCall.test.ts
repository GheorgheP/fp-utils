import { mCall } from "./mCall";

describe("Testing 'mCall' function", () => {
  const fn = (a: number, b: number): number => a + b;

  describe("mCall(fn, a, b) === fn(a, b)", () => {
    [
      [0, 1],
      [1, 2],
      [-3, 4],
    ].map(([a, b]) => {
      test(`mCall(sum, ${a}, ${b}) === ${fn(a, b)}`, () => {
        expect(mCall(fn, a, b)).toEqual(fn(a, b));
      });
    });
  });
  describe("mCall(fn, Nothing,  b) === Nothing", () => {
    [-1, 0, 1, 2].map((b) => {
      test(`mCall(sum, Nothing, ${b}) === undefined`, () => {
        expect(mCall(fn, undefined, b)).toEqual(undefined);
      });
    });
  });
  describe("mCall(fn, a, Nothing) === Nothing", () => {
    [-1, 0, 1, 2].map((a) => {
      test(`mCall(sum, ${a}, Nothing) === undefined`, () => {
        expect(mCall(fn, a, null)).toEqual(undefined);
      });
    });
  });
});
