import { JSON_RPC_VERSION_20 } from 'json_rpc_base';
import { InvokeRequest, NotificationRequest } from 'request';

export const createNotificationRequest = <TParams = Array<any>>(
  method: string,
  params?: TParams,
): NotificationRequest<TParams> => ({
  jsonrpc: JSON_RPC_VERSION_20,
  method,
  params,
});

export const createInvokeRequest = <TParams = Array<any>>(
  requestId: string,
  method: string,
  params?: TParams,
): InvokeRequest<TParams> => ({
  jsonrpc: JSON_RPC_VERSION_20,
  id: requestId,
  method,
  params,
});
