import { empties, nothings, prettify, values } from "./internals/utils";
import { _const } from "./const";

describe("Testing '_const' function", () => {
  describe("Identity. x === const x", () => {
    [...nothings, ...empties, ...values].map((v) => {
      test(`Value is ${prettify(v)}, return ${prettify(v)}`, () => {
        expect(_const(v)()).toBe(v);
      });
    });
  });
});
