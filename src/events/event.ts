export type Event<
  TEventType = string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TPayload = any,
  TCorrelationId = string,
  TTimestamp = number,
> = {
  /**
   * Correlation id
   */
  correlationId: TCorrelationId;

  /**
   * Event type
   */
  type: TEventType;

  /**
   * When the event occurred (unix epoch time)
   */
  timestamp: TTimestamp;

  /**
   * Event payload
   */
  payload: TPayload;
};
