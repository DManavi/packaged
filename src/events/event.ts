type EventBase<
  TEventType = string,
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
};

type EventWithPayload<
  TEventType = string,
  TPayload = any,
  TCorrelationId = string,
  TTimestamp = number,
> = EventBase<TEventType, TCorrelationId, TTimestamp> & {
  /**
   * Event payload
   */
  payload: TPayload;
};

/**
 * Standard event object
 */
export type Event<
  TEventType = string,
  TPayload = void,
  TCorrelationId = string,
  TTimestamp = number,
> = TPayload extends void
  ? EventBase<TEventType, TCorrelationId, TTimestamp>
  : EventWithPayload<TEventType, TPayload, TCorrelationId, TTimestamp>;
