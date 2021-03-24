import { prop } from "ramda";
import { parse, optional } from "../parse";
import { mPipe } from "../../mPipe";

const numFromString = (v: string): number | undefined => {
  const n = Number(v);

  return !isNaN(n) ? n : undefined;
};

describe("Testing 'parse' function", function () {
  type User = {
    userName: string;
    userAge: string;
  };

  type Person = {
    name: string;
    age: number;
  };

  test("If object passes all parsers, return values", () => {
    expect(
      parse<User, Person>(
        {
          name: (v) => v.userName,
          age: mPipe(prop("userAge"), numFromString),
        },
        { userName: "Tom", userAge: "23" },
      ),
    ).toEqual({ name: "Tom", age: 23 });
  });

  test("If object does not pass at least one parser, return undefined", () => {
    expect(
      parse<User, Person>(
        {
          name: (v) => v.userName,
          age: mPipe(prop("userAge"), numFromString),
        },
        { userName: "Tom", userAge: "-44e" },
      ),
    ).toBe(undefined);
  });

  test("If the `optional` parser is used, return the parsed object, even if the parser return undefined", () => {
    type User = {
      userName: string;
      userAge: string;
    };

    type Person = {
      name: string;
      age?: number;
    };

    const parser = parse<User, Person>({
      name: (v) => v.userName,
      age: optional(mPipe(prop("userAge"), numFromString)),
    });

    expect(parser({ userName: "Test", userAge: "test" })).toStrictEqual({
      name: "Test",
      age: undefined,
    });
  });
});
