export type PaginationRequest = {
  /**
   * Page number (starts from 1)
   */
  page: number;

  /**
   * Items per page
   */
  size: number;
};

export type PaginationResponse = {
  /**
   * Page number (starts from 1)
   */
  page: number;

  /**
   * Items per page
   */
  size: number;

  /**
   * Total items in the database
   */
  totalItems: number;

  /**
   * Total pages
   */
  totalPages: number;
};
