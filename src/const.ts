export type Const<T> = () => T;

/**
 * Wrap a vale in a function
 */
export const _const = <A>(v: A): Const<A> => () => v;
