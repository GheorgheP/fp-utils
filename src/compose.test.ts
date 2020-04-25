import { compose } from "./compose";

describe("Testing 'compose' function", () => {
  const f1 = (a: number): number => a + 1;
  const f2 = (a: number, b: number): number => a + b;

  test("compose(f,g)(x) === f(g(x))", () => {
    expect(compose(f1, f2)(2, 2)).toBe(f1(f2(2, 2)));
  });

  test("compose(f,g,h)(x) === compose(compose(f, g), h) === compose(f,compose(g,h)) === f(g(h(x)))", () => {
    expect(compose(f1, f1, f2)(2, 2)).toBe(f1(f1(f2(2, 2))));
    expect(compose(f1, compose(f1, f2))(2, 2)).toBe(f1(f1(f2(2, 2))));
    expect(compose(compose(f1, f1), f2)(2, 2)).toBe(f1(f1(f2(2, 2))));
  });
});
