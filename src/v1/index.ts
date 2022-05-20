export type FunctionRequest<
  TArgs = Array<any>,
  TPayload = any,
  TRequestId = string,
> = {
  /**
   * Request ID
   */
  requestId: TRequestId;

  /**
   * Function arguments
   */
  args?: TArgs;

  /**
   * Function payload
   */
  payload?: TPayload;
};

export type FunctionResponse<TCode = number, TResult = any, TError = Error> = {
  /**
   * The function result status code
   */
  code?: TCode;

  /**
   * The function result status code
   */
  statusCode?: TCode;

  /**
   * The function output/result
   */
  result?: TResult;

  /**
   * The function result/output
   */
  body?: TResult;

  /**
   * Error that occurred during the operation
   */
  error?: TError;
};
