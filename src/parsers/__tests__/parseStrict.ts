import { parseStrict } from "../parseStrict";
import { pipe, prop } from "ramda";
import { mPipe } from "../../mPipe";
import { orElse } from "../../Nothing";
import { optional } from "../parse";

const numFromString = (v: string): number | undefined => {
  const n = Number(v);

  return !isNaN(n) ? n : undefined;
};

describe("Testing 'parseStrict' function", function () {
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
      parseStrict<User, Person>(
        {
          name: (v) => v.userName,
          age: pipe(prop("userAge"), numFromString, orElse(45)),
        },
        { userName: "Tom", userAge: "23" },
      ),
    ).toEqual({ name: "Tom", age: 23 });
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

    const parser = parseStrict<User, Person>({
      name: (v) => v.userName,
      age: optional(mPipe(prop("userAge"), numFromString)),
    });

    expect(parser({ userName: "Test", userAge: "test" })).toStrictEqual({
      name: "Test",
      age: undefined,
    });
  });
});
