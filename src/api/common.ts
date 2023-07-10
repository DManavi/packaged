/* API response base */
export type ApiResponseBase<TRequestId = string> = {
  /**
   * Request identifier
   */
  requestId: TRequestId;

  /**
   * determines if the operation was successful or not
   */
  success: boolean;

  /**
   * Response metadata
   */
  metadata?: Record<string, any>;
};

/**
 * API response error object
 */
type ApiResponseErrorObjectBase = {
  /**
   * Error code (computer friendly e.g. Forbidden)
   */
  code: string;

  /**
   * Error message (human friendly e.g. You don't have access to perform this operation)
   */
  message: string;
};

type ApiResponseErrorObjectWithDetails<TErrorDetails = any> =
  ApiResponseErrorObjectBase & {
    /**
     * Details of the error
     */
    details: TErrorDetails;
  };

/**
 * API response error object
 */
export type ApiResponseErrorObject<TErrorDetails = void> =
  TErrorDetails extends void
    ? ApiResponseErrorObjectBase
    : ApiResponseErrorObjectWithDetails<TErrorDetails>;
