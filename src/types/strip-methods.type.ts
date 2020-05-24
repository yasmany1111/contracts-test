/**
 * Creates a subtype of T with no functions (removes functions)
 */
export declare type StripMethods<T> = Omit<T, {
  // tslint:disable-next-line:ban-types
  [K in keyof T]-?: T[K] extends Function ? K : never;
}[keyof T]>;
