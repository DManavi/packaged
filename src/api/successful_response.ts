import { ApiResponseBase } from './common';
import { PaginationResponse } from './pagination';

/* Successful */
type SuccessfulApiResponseBase = ApiResponseBase & {
  /**
   * API call was successful
   */
  success: true;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SuccessfulApiResponseWithData<TData = any> = SuccessfulApiResponseBase & {
  /**
   * API response data
   */
  data: TData;
};

/**
 * Successful API response
 */
export type SuccessfulApiResponse<TData = void> = TData extends void
  ? SuccessfulApiResponseBase
  : SuccessfulApiResponseWithData<TData>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type SuccessfulListApiResponse<TListItem = any> = SuccessfulApiResponse<
  Array<TListItem>
>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type SuccessfulPaginatedListApiResponse<TListItem = any> =
  SuccessfulListApiResponse<TListItem> & {
    /**
     * Pagination response
     */
    pagination: PaginationResponse;
  };
