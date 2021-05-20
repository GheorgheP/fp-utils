import { or } from "../or";

describe("Testing `or` function", () => {
  test("Return value of the first function that does not return Nothing value", () => {
    expect(
      or(
        () => undefined,
        () => 1,
        () => 2,
      )(),
    ).toBe(1);
  });
});
