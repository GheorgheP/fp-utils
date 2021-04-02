export type Nothing = undefined | null;

export type MNothing<T> = T | Nothing;

/**
 * Check is the value is a Nothing value
 * Nothing are considered undefined and null
 */
export const isNothing = (v: unknown): v is Nothing => v === null || v === undefined;

/**
 * Check whenever a potential maybe value is empty or not
 */
export const isT = <T>(t: MNothing<T>): t is T => !isNothing(t);

/**
 * Return the default value if the provided value is Nothing
 */
export function orElse<T>(orElse: T): (v: MNothing<T>) => T;
export function orElse<T>(orElse: T, v: MNothing<T>): T;
export function orElse<T>(...args: [T] | [T, MNothing<T>]): T | ((v: MNothing<T>) => T) {
  return args.length === 1 ? (v: MNothing<T>) => (isNothing(v) ? args[0] : v) : isNothing(args[1]) ? args[0] : args[1];
}
