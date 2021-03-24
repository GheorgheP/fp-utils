import { isNothing, orElse } from "../Nothing";
import { nothings, empties, values, prettify } from "../internals/utils";

describe("Testing 'isNothing' function", () => {
  test.each(nothings)("If value is %s, return true", (v) => {
    expect(isNothing(v)).toBe(true);
  });

  [...empties, ...values].map((v) => {
    test(`If value is ${prettify(v)}, return false`, () => {
      expect(isNothing(v)).toBe(false);
    });
  });
});

describe("Testing 'orElse' function", () => {
  nothings.map((v) => {
    test(`If value is ${prettify(v)}, return orElse`, () => {
      const or = {};
      expect(orElse(or, v)).toBe(or);
    });
  });

  [...empties, ...values].map((v) => {
    test(`If value is ${prettify(v)}, return value`, () => {
      const or = {};
      expect(orElse(or, v)).toBe(v);
    });
  });
});
