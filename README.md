# FP Utils
Yes, this is another fp library for js. On the other and, this library doesn't try to compete with libraries like [fp-ts](https://github.com/gcanti/fp-ts/).
This library is a series of utility functions to make the development process easier.

## Motivation
There are a lot of fp oriented libraries for js, but mostly on one hand they try to bring the entire FP world in js (but js/ts is not Haskell), this making harder to follow the flow; or on the other hand implement the fp concepts in object oriented style, where Just and Nothing instances have a private `__value` and a bunch of methods (`map`, `apply`, `isNothing`, `isJust`, ...) and the value is wrapped in this Just wrapper. While mentioned methods are not bad at all, and I even consider them good; the problem is that I find them pretty hard to be integrated in an existing code base, and for developers that are not familiarised with functional programming, hard to reason about.
The **FP Utils** intention is to provide some simple abstractions that can be very easy integrated with an already existing codebase.

## The definition of `bottom`
While the library want to be very lightweight and easy to use in existing codebase, it does come with a very specific behavior. The `undefined` and `null` are considered as same value and both are considered as **bottom** values. This is important to know and take in consideration when using this library, as many codebases tend to consider `null` as value and you may introduce many issues in your codebase using this library in your codebase.

### Solution
The good part is that this definition is centralized in the `Nothing` type definition. So you can fork this repository and just redefine the `Nothing` meaning, by removing the `null` from definition.
In some specific codebases, values like `""` are considered as `Nothing` too, so you can extend the meaning of `Nothing` like you want.

## Where is `Just`?
The library uses intensively the all known `Maybe` monad, but in same time, there is no instance of `Nothing` and `Just`. Any value tht is not [`Nothing`](https://github.com/GheorgheP/fp-utils/blob/master/src/Nothing.ts) (or in other words, is not `undefined` or `null`) is considered as `Just`. No value is wrapped in a `Just` layer.

## Docs

### Nothing

`Nothing` describes the `null` and `undefined` values. In this library they are considered as the same value.

```ts
import { Nothing } from "fp-utitlities/Nothing";

const asNull: Nothing = null;
const asUndefined: Nothing = undefined;
```

### MNothing
`MNothing<T>` is a generic type that describes whenever a value may be `Nothing` or not.

```ts
import { MNothing } from "fp-utitlities/Nothing";

type MString = MNothing<string>

const asNull: MString = null;
const asUndefined: MString = undefined;
const asString: MString = "test";
```

### isNothing
Check is the value is a `Nothing` value

```ts
import { isNothing, MNothing } from "fp-utitlities/Nothing";

const ls: Array<MNothing<number>> = [1, undefined, 3, null, 4];

const emptiesCount = ls.filter(isNothing).length; // 2
```

### isT
Check whenever a potential maybe value is empty or not

[stackblitz](https://stackblitz.com/edit/fp-utilities-ist?devtoolsheight=100&file=index.ts)
```ts
import { isT } from "fp-utitlities/Nothing";

const inc = (a: number): number => a + 1

const ls: Array<number|undefined> = [1, undefined, 3, undefined, 4];
const incremented = ls.filter(isT).map(inc); // [2, 4, 5]
```

### orElse
Return the default value if the provided value is Nothing
Note: the type of the default value needs to be the same as the type of the checked value.

`orElese` is already curried, so you can use it in both full applied or partial applied form.

[stackblitz](https://stackblitz.com/edit/fp-utilities-orelse?devtoolsheight=100&file=index.ts)
```ts
import { orElse } from "fp-utilities";

const ls: Array<string | undefined> = ["😁", undefined, "😁", undefined, "😁"];
const fillWithSmiles = ls.map(orElse("😱"));

console.log(fillWithSmiles); // ["😁", "😱", "😁", "😱", "😁"];
```

### pass
Provide a predicate and a value for it.
If predicate returns `true`, return back that value.
Otherwise, return `undefined`.
Note: `pass` support both simple boolean predicates and [type guards](https://basarat.gitbook.io/typescript/type-system/typeguard).
So you get full type checker support.
`pass` is very handy in combination with `mPipe`, when you want to guard the pipe with a predicate.

`pass` is already curried, so you can use it in both full applied or partial applied form.

[stackblitz](https://stackblitz.com/edit/fp-utilities-pass?file=index.ts)
```ts
import { pass, mPipe } from "fp-utilities";

type Mood = "good" | "bad";

const isMood = (s: string): s is Mood => ["good", "bad"].includes(s as Mood);
const isGood = (m: Mood): m is "good" => m === "good";
const isBad = (m: Mood): m is "bad" => m === "bad";

// Read a "good" value from a string
const goodMoodGalsses = mPipe(pass(isMood), pass(isGood));

// Read a "bad" value from a string
const badMoodGalsses = mPipe(pass(isMood), pass(isBad));

console.log(goodMoodGalsses("no mood")); // undefined
console.log(goodMoodGalsses("bad")); // undefined
console.log(goodMoodGalsses("good")); // "good"

console.log(badMoodGalsses("no mood")); // undefined
console.log(badMoodGalsses("good")); // undefined
console.log(badMoodGalsses("bad")); // "bad"
```

### liftA2
Apply a binary function over result of 2 single functions.


```ts
import { liftA2 } from "fp-utitlities/liftA2";

const sum = (a: number, b: number): number => a + b
const inc = (a: number): number => a + 1
const double = (a: number): number => a * 2

const fn = liftA2(sum, inc, double);

fn(2,3) /// 9
```




