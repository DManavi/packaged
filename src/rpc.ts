import { PaginationRequest, PaginationResponse } from './pagination';

const RESPONSE_STATUSES = ['success', 'error'] as const;
export type ResponseStatus = (typeof RESPONSE_STATUSES)[number];

type BaseResponse = {
  /**
   * Status of the response
   */
  status: ResponseStatus;

  /**
   * Computer-friendly code (e.g. OK or E_ACCESS_DENIED)
   */
  code: string;
};

type BaseSuccessResponse = BaseResponse & {
  status: 'success';
};

type SuccessResponseWithPayload<TPayload> = BaseSuccessResponse & {
  /**
   * Response payload
   * @example { "userId": "123", "name": "John Doe" }
   */
  payload: TPayload;
};

export type SuccessResponse<TPayload = void> = TPayload extends void
  ? BaseSuccessResponse
  : SuccessResponseWithPayload<TPayload>;

type BaseErrorResponse = BaseResponse & {
  status: 'error';

  /**
   * Human-friendly message (e.g. Failed to fetch data or Access denied)
   * @example "Failed to fetch data"
   */
  message: string;
};

type ErrorResponseWithPayload<TError> = BaseErrorResponse & {
  /**
   * Error payload
   * @example { "code": "E_ACCESS_DENIED", "message": "Access denied" }
   */
  payload: TError;
};

export type ErrorResponse<TError = void> = TError extends void
  ? BaseErrorResponse
  : ErrorResponseWithPayload<TError>;

export type Response = SuccessResponse | ErrorResponse;

export type PaginatedResponse<TDataItem = any, TPagination = PaginationResponse> = SuccessResponseWithPayload<
  Array<TDataItem>
> & {
  /**
   * Pagination response
   */
  pagination: TPagination;
};

export type PaginatedRequest = {
  /**
   * Pagination request
   */
  pagination: PaginationRequest;
};

export type FilteredRequest<TFilters = any> = {
  /**
   * Filtered request
   */
  filters: TFilters;
};

export type RequestWithPayload<TPayload = any> = {
  /**
   * Request payload
   * @example { "userId": "123", "name": "John Doe" }
   */
  payload: TPayload;
};
