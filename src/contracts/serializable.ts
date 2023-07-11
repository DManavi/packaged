/**
 * Serializable object
 */
export interface Serializable<TSerialized = any> {
  /**
   * Serialize an instance of the object into plain object
   */
  serialize(): TSerialized;
}
