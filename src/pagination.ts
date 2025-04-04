const PAGINATION_TYPES = ['cursor', 'offset'] as const;
export type PaginationType = (typeof PAGINATION_TYPES)[number];

type PaginationRequestBase = {
  /**
   * The type of pagination to use
   */
  type: PaginationType;

  /**
   * The number of items to return per page
   * @example 10
   */
  limit?: number;
};

type CursorBasedPaginationRequest = PaginationRequestBase & {
  type: 'cursor';

  /**
   * The cursor for the next page of results
   * Not required for the first page
   * @example "eyJ2IjoxLCJwIjoxLCJzIjoxfQ=="
   */
  cursor?: string;
};

type OffsetBasedPaginationRequest = {
  type: 'offset';

  /**
   * The offset for the next page of results
   * @example 0
   */
  offset?: number;
};

export type PaginationRequest =
  | CursorBasedPaginationRequest
  | OffsetBasedPaginationRequest;

type PaginationResponseBase = {
  /**
   * The type of pagination used
   */
  type: PaginationType;

  /**
   * The total number of items available
   * @example 100
   */
  totalItems: number;

  /**
   * The total number of pages available
   * @example 10
   */
  totalPages: number;
};

type CursorBasedPaginationResponse = PaginationResponseBase & {
  type: 'cursor';

  /**
   * The cursor for the next page of results
   * @example "eyJ2IjoxLCJwIjoxLCJzIjoxfQ=="
   */
  cursor?: string;
};

type OffsetBasedPaginationResponse = PaginationResponseBase & {
  type: 'offset';
};

export type PaginationResponse =
  | CursorBasedPaginationResponse
  | OffsetBasedPaginationResponse;
