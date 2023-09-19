import { RpcBase } from './common';

type RpcResponseBase<TRequestId = string> = RpcBase<TRequestId> & {
  /**
   * Computer-friendly code (e.g. OK or E_ACCESS_DENIED)
   */
  code: string;

  /**
   * Human-friendly message (e.g. You're request has been processed)
   */
  message?: string;
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
