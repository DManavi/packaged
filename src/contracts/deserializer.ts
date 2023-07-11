/**
 * Deserialize a plain object to an instance of a class
 */
export type Deserializer<TPlainObject = any, TInstance = any> = (
  data: TPlainObject,
) => TInstance;
