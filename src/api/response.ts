import { PaginationResponse } from '../helpers/pagination';

type ApiResponseBase<TResult = string> = {
  /**
   * API operation result
   */
  result: TResult;
};

type ApiResponseWithData<
  TPayload = void,
  TResult = string,
> = ApiResponseBase<TResult> & {
  /**
   * API response payload
   */
  payload: TPayload;
};

export type PaginatedApiResponse<
  TPayload = any,
  TResult = string,
> = ApiResponseWithData<TPayload, TResult> & {
  /**
   * Pagination response
   */
  pagination: PaginationResponse;
};

export type ApiResponse<
  TPayload = void,
  TResult = string,
> = TPayload extends void
  ? ApiResponseBase<TResult>
  : ApiResponseWithData<TPayload, TResult>;
