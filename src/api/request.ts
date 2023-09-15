import { PaginationRequest } from '../helpers';

type ApiRequestBase = {};
type ApiRequestWithPayload<TPayload = any> = ApiRequestBase & {
  /**
   * Request payload
   */
  payload: TPayload;
};

/**
 * API request
 */
export type ApiRequest<TPayload = void> = TPayload extends void
  ? ApiRequestBase
  : ApiRequestWithPayload<TPayload>;

type PaginatedApiRequestBase<TPaginationRequest = PaginationRequest> =
  ApiRequestBase & { pagination: TPaginationRequest };
type PaginatedApiRequestBaseWithPayload<
  TPayload = any,
  TPaginationRequest = PaginationRequest,
> = PaginatedApiRequestBase<TPaginationRequest> &
  ApiRequestWithPayload<TPayload>;

export type PaginatedApiRequest<TPayload = void> = TPayload extends void
  ? PaginatedApiRequestBase
  : PaginatedApiRequestBaseWithPayload<TPayload>;
