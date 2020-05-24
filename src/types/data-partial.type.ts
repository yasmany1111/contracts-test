import { StripMethods } from './strip-methods.type';

/**
 * Creates a subtype of T with no functions and with all fields optional
 * Removes functions and makes all keys optional
 */
export declare type DataPartial<T> = Partial<StripMethods<T>>;
