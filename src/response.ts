import { JsonRpcBase } from 'json_rpc_base';

export const JsonRpcErrors: Record<number, string> = {
  /* https://www.jsonrpc.org/specification */
  [-32700]: 'E_PARSE_ERROR',
  [-32600]: 'E_INVALID_REQUEST',
  [-32601]: 'E_METHOD_NOT_FOUND',
  [-32602]: 'E_INVALID_PARAMS',
  [-32603]: 'E_INTERNAL_ERROR',

  // -32000 to -32099 -> reserved for implementation-defined server-errors
};

export type ResponseError<TData = Error> = {
  /**
   * Error code
   */
  code: number;

  /**
   * Brief error message
   */
  message: string;

  /**
   * Error object or detailed information about error
   */
  data?: TData;
};

export type ResponseBase = JsonRpcBase & {
  /**
   * Request identifier
   */
  id: string | number;

  /**
   * Called method
   */
  method: string;
};

export type ErrorResponse<TErrorData = any> = ResponseBase & {
  /**
   * Error happened during the operation
   */
  error?: ResponseError<TErrorData>;
};

export type SuccessResponse<TResult = any> = ResponseBase & {
  /**
   * Called method result/output
   */
  result: TResult;
};

export type Response = ErrorResponse | SuccessResponse;

export type BatchResponse = Array<Response>;
