import { RpcBase } from './common';

type RpcResponseBase<
  TRequestId = string,
  TResult = string,
> = RpcBase<TRequestId> & {
  /**
   * Operation result
   */
  result: TResult;
};
type RpcResponseWithPayload<
  TRequestId = string,
  TPayload = any,
> = RpcResponseBase<TRequestId> & {
  /**
   * Response payload
   */
  payload: TPayload;
};

/**
 * RPC response
 */
export type RpcResponse<
  TRequestId = string,
  TPayload = void,
> = TPayload extends void
  ? RpcResponseBase<TRequestId>
  : RpcResponseWithPayload<TRequestId, TPayload>;
