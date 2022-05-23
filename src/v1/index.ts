export type FunctionRequestV1<
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

export type FunctionResponseV1<
  TCode = number,
  TResult = any,
  TError = Error,
> = {
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

export type EventV1<TName = string, TPayload = any> = {
  /**
   * Event name
   */
  name: TName;

  /**
   * Event payload
   */
  payload?: TPayload;

  /**
   * Event timestamp
   */
  timestamp?: Date;
};
