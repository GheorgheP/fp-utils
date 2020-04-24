import { Const } from "./const";

export type Nothing = undefined | null;

export type MNothing<T> = T | Nothing;

/**
 * Check is the value is a Nothing value
 * Nothing are considered undefined and null
 */
export const isNothing = (v: unknown): v is Nothing => v === null || v === undefined;

/**
 * Return the default value if the provided value is Nothing
 */
export const orElse = <T>(orElse: T, v: MNothing<T>): T => (isNothing(v) ? orElse : v);

/**
 * Return the result of callable if value is Nothing
 * Use when the left value may require some computation, otherwise use `orElse`
 */
export const onNothing = <A>(orCall: Const<A>) => (v: MNothing<A>): A => (isNothing(v) ? orCall() : v);
