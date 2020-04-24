import { empties, nothings, prettify, values } from "./internals/utils";
import { id } from "./id";

describe("Testing 'id' function", () => {
  describe("id(a) === a", () => {
    [...nothings, ...empties, ...values].map((v) => {
      test(`id(${prettify(v)}) === ${prettify(v)}`, () => {
        expect(id(v)).toBe(v);
      });
    });
  });
});
