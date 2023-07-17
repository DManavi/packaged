/**
 * Deserialize a plain object to an instance of a class
 */
export type Deserializable<TPlainObject = any, TInstance = any> = (
  data: TPlainObject,
) => TInstance;
