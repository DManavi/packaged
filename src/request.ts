import { JsonRpcBase } from './json_rpc_base';

export type RequestBase<TParams = Array<any>> = JsonRpcBase & {
  /**
   * Method name
   */
  method: string;

  /**
   * Method arguments/parameters
   */
  params?: TParams;
};

export type InvokeRequest<TParams = Array<any>> = RequestBase<TParams> & {
  /**
   * Request identifier
   */
  id: string | number;
};

export type NotificationRequest<TParams = Array<any>> =
  RequestBase<TParams> & {};

export type Request = InvokeRequest | NotificationRequest;
