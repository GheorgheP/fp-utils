/**
 * Provide a series of type guard predicates that satisfies the input,
 * and a function that will resolve the value if it matches the type guard.
 *
 * This function is similar to `match`, but resolves 2 arguments input cases
 *
 * !Note: There is a big difference between `match` and `match2`
 * `match2` does not force you to provide all combinations, so it can return undefined,
 *  as return type mentions.
 *  There is technical and coding experience limitation. In order to make `match2` be strict as `match`,
 *  the use will have to provide all possible cases between first argument and the second one. But this is already
 *  cartesian product and it can get huge very easy. For 3x3 input, you get 9 combinations. And yes, you guessed it,
 *  for 4x4, 16 combinations. But in real world usually you need 4 combinations.
 *  But at the same moment it enforces you to satisfy entire input type in at least one of type guards. And this is
 *  what makes it different from `if else` statement.
 */

// region 1 argument
export function match2<T extends U, T2 extends U2, A extends T, B extends T2, R, U = A, U2 = B>(
  ...args: [[(t: T) => t is A, (t2: T2) => t2 is B, (a: A, b: B) => R]]
): (t: T, t2: T2) => R;
// endregion

// region 2 arguments
export function match2<
  T extends U,
  T2 extends U2,
  A extends T,
  A2 extends T,
  B extends T2,
  B2 extends T2,
  R,
  R2,
  U = A | A2,
  U2 = B | B2
>(
  ...args: [
    [(t: T) => t is A, (t2: T2) => t2 is B, (a: A, b: B) => R],
    [(t: T) => t is A2, (t2: T2) => t2 is B2, (a: A2, b: B2) => R2],
  ]
): (t: T, t2: T2) => R | R2 | undefined;
// endregion

// region 3 arguments
export function match2<
  T extends U,
  T2 extends U2,
  A extends T,
  A2 extends T,
  A3 extends T,
  B extends T2,
  B2 extends T2,
  B3 extends T2,
  R,
  R2,
  R3,
  U = A | A2 | A3,
  U2 = B | B2 | B3
>(
  ...args: [
    [(t: T) => t is A, (t2: T2) => t2 is B, (a: A, b: B) => R],
    [(t: T) => t is A2, (t2: T2) => t2 is B2, (a: A2, b: B2) => R2],
    [(t: T) => t is A3, (t2: T2) => t2 is B3, (a: A3, b: B3) => R3],
  ]
): (t: T, t2: T2) => R | R2 | R3 | undefined;
// endregion

// region 4 arguments
export function match2<
  T extends U,
  T2 extends U2,
  A extends T,
  A2 extends T,
  A3 extends T,
  A4 extends T,
  B extends T2,
  B2 extends T2,
  B3 extends T2,
  B4 extends T2,
  R,
  R2,
  R3,
  R4,
  U = A | A2 | A3 | A4,
  U2 = B | B2 | B3 | B4
>(
  ...args: [
    [(t: T) => t is A, (t2: T2) => t2 is B, (a: A, b: B) => R],
    [(t: T) => t is A2, (t2: T2) => t2 is B2, (a: A2, b: B2) => R2],
    [(t: T) => t is A3, (t2: T2) => t2 is B3, (a: A3, b: B3) => R3],
    [(t: T) => t is A4, (t2: T2) => t2 is B4, (a: A4, b: B4) => R4],
  ]
): (t: T, t2: T2) => R | R2 | R3 | R4 | undefined;
// endregion

// region 5 arguments
export function match2<
  T extends U,
  T2 extends U2,
  A extends T,
  A2 extends T,
  A3 extends T,
  A4 extends T,
  A5 extends T,
  B extends T2,
  B2 extends T2,
  B3 extends T2,
  B4 extends T2,
  B5 extends T2,
  R,
  R2,
  R3,
  R4,
  R5,
  U = A | A2 | A3 | A4 | A5,
  U2 = B | B2 | B3 | B4 | B5
>(
  ...args: [
    [(t: T) => t is A, (t2: T2) => t2 is B, (a: A, b: B) => R],
    [(t: T) => t is A2, (t2: T2) => t2 is B2, (a: A2, b: B2) => R2],
    [(t: T) => t is A3, (t2: T2) => t2 is B3, (a: A3, b: B3) => R3],
    [(t: T) => t is A4, (t2: T2) => t2 is B4, (a: A4, b: B4) => R4],
    [(t: T) => t is A5, (t2: T2) => t2 is B5, (a: A5, b: B5) => R5],
  ]
): (t: T, t2: T2) => R | R2 | R3 | R4 | R5 | undefined;
// endregion

// region 6 arguments
export function match2<
  T extends U,
  T2 extends U2,
  A extends T,
  A2 extends T,
  A3 extends T,
  A4 extends T,
  A5 extends T,
  A6 extends T,
  B extends T2,
  B2 extends T2,
  B3 extends T2,
  B4 extends T2,
  B5 extends T2,
  B6 extends T2,
  R,
  R2,
  R3,
  R4,
  R5,
  R6,
  U = A | A2 | A3 | A4 | A5 | A6,
  U2 = B | B2 | B3 | B4 | B5 | B6
>(
  ...args: [
    [(t: T) => t is A, (t2: T2) => t2 is B, (a: A, b: B) => R],
    [(t: T) => t is A2, (t2: T2) => t2 is B2, (a: A2, b: B2) => R2],
    [(t: T) => t is A3, (t2: T2) => t2 is B3, (a: A3, b: B3) => R3],
    [(t: T) => t is A4, (t2: T2) => t2 is B4, (a: A4, b: B4) => R4],
    [(t: T) => t is A5, (t2: T2) => t2 is B5, (a: A5, b: B5) => R5],
    [(t: T) => t is A6, (t2: T2) => t2 is B6, (a: A6, b: B6) => R6],
  ]
): (t: T, t2: T2) => R | R2 | R3 | R4 | R5 | R6 | undefined;
// endregion

// region 7 arguments
export function match2<
  T extends U,
  T2 extends U2,
  A extends T,
  A2 extends T,
  A3 extends T,
  A4 extends T,
  A5 extends T,
  A6 extends T,
  A7 extends T,
  B extends T2,
  B2 extends T2,
  B3 extends T2,
  B4 extends T2,
  B5 extends T2,
  B6 extends T2,
  B7 extends T2,
  R,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  U = A | A2 | A3 | A4 | A5 | A6 | A7,
  U2 = B | B2 | B3 | B4 | B5 | B6 | B7
>(
  ...args: [
    [(t: T) => t is A, (t2: T2) => t2 is B, (a: A, b: B) => R],
    [(t: T) => t is A2, (t2: T2) => t2 is B2, (a: A2, b: B2) => R2],
    [(t: T) => t is A3, (t2: T2) => t2 is B3, (a: A3, b: B3) => R3],
    [(t: T) => t is A4, (t2: T2) => t2 is B4, (a: A4, b: B4) => R4],
    [(t: T) => t is A5, (t2: T2) => t2 is B5, (a: A5, b: B5) => R5],
    [(t: T) => t is A6, (t2: T2) => t2 is B6, (a: A6, b: B6) => R6],
    [(t: T) => t is A7, (t2: T2) => t2 is B7, (a: A7, b: B7) => R7],
  ]
): (t: T, t2: T2) => R | R2 | R3 | R4 | R5 | R6 | R7 | undefined;
// endregion

// region 8 arguments
export function match2<
  T extends U,
  T2 extends U2,
  A extends T,
  A2 extends T,
  A3 extends T,
  A4 extends T,
  A5 extends T,
  A6 extends T,
  A7 extends T,
  A8 extends T,
  B extends T2,
  B2 extends T2,
  B3 extends T2,
  B4 extends T2,
  B5 extends T2,
  B6 extends T2,
  B7 extends T2,
  B8 extends T2,
  R,
  R2,
  R3,
  R4,
  R5,
  R6,
  R7,
  R8,
  U = A | A2 | A3 | A4 | A5 | A6 | A7 | A8,
  U2 = B | B2 | B3 | B4 | B5 | B6 | B7 | B8
>(
  ...args: [
    [(t: T) => t is A, (t2: T2) => t2 is B, (a: A, b: B) => R],
    [(t: T) => t is A2, (t2: T2) => t2 is B2, (a: A2, b: B2) => R2],
    [(t: T) => t is A3, (t2: T2) => t2 is B3, (a: A3, b: B3) => R3],
    [(t: T) => t is A4, (t2: T2) => t2 is B4, (a: A4, b: B4) => R4],
    [(t: T) => t is A5, (t2: T2) => t2 is B5, (a: A5, b: B5) => R5],
    [(t: T) => t is A6, (t2: T2) => t2 is B6, (a: A6, b: B6) => R6],
    [(t: T) => t is A7, (t2: T2) => t2 is B7, (a: A7, b: B7) => R7],
    [(t: T) => t is A8, (t2: T2) => t2 is B8, (a: A8, b: B8) => R8],
  ]
): (t: T, t2: T2) => R | R2 | R3 | R4 | R5 | R6 | R7 | R8 | undefined;
// endregion

// region 9 arguments
export function match2<
T extends U,
T2 extends U2,
A extends T,
A2 extends T,
A3 extends T,
A4 extends T,
A5 extends T,
A6 extends T,
A7 extends T,
A8 extends T,
A9 extends T,
B extends T2,
B2 extends T2,
B3 extends T2,
B4 extends T2,
B5 extends T2,
B6 extends T2,
B7 extends T2,
B8 extends T2,
B9 extends T2,
R,
R2,
R3,
R4,
R5,
R6,
R7,
R8,
R9,
U = A | A2 | A3 | A4 | A5 | A6 | A7 | A8 | A9,
U2 = B | B2 | B3 | B4 | B5 | B6 | B7 | B8 | B9
>(
...args: [
  [(t: T) => t is A, (t2: T2) => t2 is B, (a: A, b: B) => R],
  [(t: T) => t is A2, (t2: T2) => t2 is B2, (a: A2, b: B2) => R2],
  [(t: T) => t is A3, (t2: T2) => t2 is B3, (a: A3, b: B3) => R3],
  [(t: T) => t is A4, (t2: T2) => t2 is B4, (a: A4, b: B4) => R4],
  [(t: T) => t is A5, (t2: T2) => t2 is B5, (a: A5, b: B5) => R5],
  [(t: T) => t is A6, (t2: T2) => t2 is B6, (a: A6, b: B6) => R6],
  [(t: T) => t is A7, (t2: T2) => t2 is B7, (a: A7, b: B7) => R7],
  [(t: T) => t is A8, (t2: T2) => t2 is B8, (a: A8, b: B8) => R8],
  [(t: T) => t is A9, (t2: T2) => t2 is B9, (a: A9, b: B9) => R9],
]
): (t: T, t2: T2) => R | R2 | R3 | R4 | R5 | R6 | R7 | R8 | R9 | undefined;
// endregion

export function match2<T extends U, T2 extends U2, A extends T, B extends T2, R, U = A, U2 = B>(
  ...args: Array<[(t: T) => t is A, (t: T2) => t is B, (a: A, b: B) => R]>
): (t: T, t2: T2) => R | undefined {
  // @ts-expect-error
  return (t: T, t2: T2): R => {
    for (let i = 0; i < args.length; i++) {
      if (args[i][0](t) && args[i][1](t2)) {
        return args[i][2](t, t2);
      }
    }
  };
}
