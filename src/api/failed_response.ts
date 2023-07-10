import { ApiResponseBase, ApiResponseErrorObject } from './common';

/**
 * Failed API response
 */
type FailedApiResponseBase = ApiResponseBase & {
  /**
   * API call was failed
   */
  success: false;
};

/**
 * Failed API response with error
 */
type FailedApiResponseWithError<
  TErrorObject extends ApiResponseErrorObject = ApiResponseErrorObject,
> = FailedApiResponseBase & {
  error: TErrorObject;
};

/**
 * Failed API response
 */
export type FailedApiResponse<
  TErrorObject extends ApiResponseErrorObject = ApiResponseErrorObject,
> = TErrorObject extends void
  ? FailedApiResponseBase
  : FailedApiResponseWithError<TErrorObject>;
