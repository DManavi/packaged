export type RpcBase<TRequestId = string> = {
  /**
   * Request id
   */
  requestId: TRequestId;

  /**
   * Contract version (used in both request and response)
   */
  version: string;
};
