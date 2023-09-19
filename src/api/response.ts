import { PaginationResponse } from '../helpers/pagination';

type ApiResponseBase = {
  /**
   * Computer-friendly code (e.g. OK or E_ACCESS_DENIED)
   */
  code: string;

  /**
   * Human-friendly message (e.g. You're request has been processed)
   */
  message?: string;
};

type ApiResponseWithData<TPayload = void> = ApiResponseBase & {
  /**
   * API response payload
   */
  payload: TPayload;
};

export type PaginatedApiResponse<TPayload = any> =
  ApiResponseWithData<TPayload> & {
    /**
     * Pagination response
     */
    pagination: PaginationResponse;
  };

export type ApiResponse<TPayload = void> = TPayload extends void
  ? ApiResponseBase
  : ApiResponseWithData<TPayload>;

type FailedApiResponseBase = ApiResponseBase;
type FailedApiResponseWithDetails<TError = any> = FailedApiResponseBase & {
  /**
   * Error details
   */
  error: TError;
};

export type FailedApiResponse<TError = void> = TError extends void
  ? FailedApiResponseBase
  : FailedApiResponseWithDetails<TError>;
