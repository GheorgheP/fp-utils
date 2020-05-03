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

