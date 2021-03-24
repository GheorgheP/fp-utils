import { liftA2 } from "../liftA2";
import { id } from "../internals/utils";

describe("Testing 'liftA2' function", () => {
  const sum = (a: number, b: number): number => a + b;
  const inc = (a: number): number => a + 1;
  const sqr = (a: number): number => a * a;
  const values = [
    [1, 2],
    [3, 4],
    [5, 6],
  ];

  describe("lift(fn, id, id) === fn", () => {
    values.map(([a, b]) => {
      test(`lift(sum, id, id)(${a}, ${b}) === sum(${a}, ${b})`, () => {
        expect(liftA2(sum, id, id)(a, b)).toEqual(sum(a, b));
      });
    });
  });

  describe("lift(fn, f1, id) === fn(f1, id)", () => {
    values.map(([a, b]) => {
      test(`lift(sum, inc, id)(${a}, ${b}) === sum(inc(${a}), ${b})`, () => {
        expect(liftA2(sum, inc, id)(a, b)).toEqual(sum(inc(a), b));
      });
    });
  });

  describe("lift(fn, id, f2) === fn(id, f2)", () => {
    values.map(([a, b]) => {
      test(`lift(sum, id, sqr)(${a}, ${b}) === sum(${a}, sqr(${b}))`, () => {
        expect(liftA2(sum, id, sqr)(a, b)).toEqual(sum(a, sqr(b)));
      });
    });
  });

  describe("lift(fn, f1, f2) === fn(f1, f2)", () => {
    values.map(([a, b]) => {
      test(`lift(sum, inc, sqr)(${a}, ${b}) === sum(inc(${a}), sqr(${b}))`, () => {
        expect(liftA2(sum, inc, sqr)(a, b)).toEqual(sum(inc(a), sqr(b)));
      });
    });
  });
});
