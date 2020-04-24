import { curry2 } from "./curry2";

describe("Testing 'curry2' function", () => {
  const f = (a: number, b: number): number => a + b;

  test("curry2(f)(a,b) === f(a,b)", () => {
    expect(curry2(f)(2, 3)).toBe(f(2, 3));
  });

  test("curry2(f)(a)(b) === f(a,b)", () => {
    expect(curry2(f)(2)(3)).toBe(f(2, 3));
  });

  test("curry2(curry2(f)) === curry2(f)", () => {
    const curried = curry2(f);
    expect(curry2(curried)).toBe(curried);
  });
});
