import { RpcBase } from './common';

type RpcRequestBase<TRequestId = string> = RpcBase<TRequestId>;
type RpcRequestWithPayload<
  TRequestId = string,
  TPayload = any,
> = RpcRequestBase<TRequestId> & {
  /**
   * Request payload
   */
  payload: TPayload;
};

/**
 * RPC request
 */
export type RpcRequest<
  TRequestId = string,
  TPayload = void,
> = TPayload extends void
  ? RpcRequestBase<TRequestId>
  : RpcRequestWithPayload<TRequestId, TPayload>;
