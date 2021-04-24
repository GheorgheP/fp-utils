import { match2 } from "../match2";

// region Actions
interface A1 {
  type: "A1";
}
const isA1 = (a: Actions): a is A1 => a.type === "A1";

interface A2 {
  type: "A2";
  payload: string;
}
const isA2 = (a: Actions): a is A2 => a.type === "A2";

interface A3 {
  type: "A3";
  payload: number;
}
const isA3 = (a: Actions): a is A3 => a.type === "A3";

type Actions = A1 | A2 | A3;
// endregion

// region State
interface S1 {
  type: "S1";
}
const isS1 = (a: State): a is S1 => a.type === "S1";

interface S2 {
  type: "S2";
  payload: string;
}
const isS2 = (a: State): a is S2 => a.type === "S2";

interface S3 {
  type: "S3";
  payload: number;
}
const isS3 = (a: State): a is S3 => a.type === "S3";

type State = S1 | S2 | S3;
// endregion

describe("Testing 'match2' function", () => {
  const f: (s: State, a: Actions) => 1 | 2 | 3 | undefined = match2(
    [isS1, isA1, () => 1],
    [isS2, isA2, () => 2],
    [isS3, isA3, () => 3],
  );

  test("When arguments satisfies predicates, return specified value", () => {
    expect(f({ type: "S1" }, { type: "A1" })).toBe(1);
    expect(f({ type: "S2", payload: "" }, { type: "A2", payload: "" })).toBe(2);
    expect(f({ type: "S3", payload: 1 }, { type: "A3", payload: 1 })).toBe(3);
  });

  test("When first or second predicate doesn't match, return undefined", () => {
    expect(f({ type: "S1" }, { type: "A2", payload: "" })).toBe(undefined);
    expect(f({ type: "S2", payload: "" }, { type: "A3", payload: 1 })).toBe(undefined);
    expect(f({ type: "S3", payload: 1 }, { type: "A1" })).toBe(undefined);
  });
});
