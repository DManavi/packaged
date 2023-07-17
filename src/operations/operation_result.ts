import { OperationResultBase } from './common';

/* Successful */
type SuccessfulOperationResultBase = OperationResultBase & {
  /**
   * Operation was successful
   */
  success: true;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SuccessfulOperationResultWithData<TData = any> =
  SuccessfulOperationResultBase & {
    /**
     * Operation result
     */
    data: TData;
  };

/**
 * Successful operation result
 */
export type SuccessfulOperationResult<TData = void> = TData extends void
  ? SuccessfulOperationResultBase
  : SuccessfulOperationResultWithData<TData>;

/**
 * Failed operation
 */
type FailedOperationResultBase = OperationResultBase & {
  /**
   * Operation was failed
   */
  success: false;
};

/**
 * Failed API response with error
 */
type FailedOperationResultWithError<E extends Error = Error> =
  FailedOperationResultBase & {
    /**
     * Error object
     */
    error: E;
  };

/**
 * Failed API response
 */
export type FailedOperationResult<E extends Error = Error> = E extends void
  ? FailedOperationResultBase
  : FailedOperationResultWithError<E>;
