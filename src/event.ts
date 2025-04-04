/**
 * Base event object
 */
type BaseEvent = {
  /**
   * A unique identifier for the event
   * @example "123e4567-e89b-12d3-a456-426614174000"
   */
  id: string;

  /**
   * Event version (e.g. "1")
   * @example "1"
   * @see https://semver.org/
   * @see https://en.wikipedia.org/wiki/Software_versioning
   */
  version: string;

  /**
   * Time when the event occurred (ISO 8601 format)
   * @example 2023-10-01T12:00:00Z
   * @see https://en.wikipedia.org/wiki/ISO_8601
   */
  time: string;

  /**
   * Type of the event (e.g. "user.created", "user.updated")
   * @example "user.created"
   */
  type: string;

  /**
   * The source of the event (e.g. "user-service", "order-service")
   * @example "user-service"
   */
  source: string;

  /**
   * The ID of the user who triggered the event (e.g. "user-123")
   * Note: This is optional and may not be present in all events (e.g. system events)
   * @example "user-123"
   */
  userId?: string;

  /**
   * Any additional metadata related to the event
   */
  metadata?: {
    [key: string]: any;
  };
};

/**
 * Event with payload
 */
type EventWithPayload<TPayload> = BaseEvent & {
  /**
   * The payload of the event
   * @example { "userId": "123", "name": "John Doe" }
   */
  payload: TPayload;
};

/**
 * Standard event object
 */
export type Event<TPayload = void> = TPayload extends void
  ? BaseEvent
  : EventWithPayload<TPayload>;
