// public-level
import * as z from 'zod';

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

/**
 * Page number schema
 */
export const pageNumberSchema = z
  .number()
  .int()
  .min(1)
  .safe()
  .optional()
  .default(1);

/**
 * Page size schema
 */
export const pageSizeSchema = z.number().int().min(1).safe();

/**
 * Calculate skip/take parameters
 * @param page Page number (starts from 1)
 * @param size Items per page
 * @returns How many records to skip and take
 */
export const getSkipTake = (
  page: number,
  size: number,
): { skip: number; take: number } => {
  const skip = (page - 1) * size;
  const take = size;

  return { skip, take };
};

/**
 * Get total pages available
 * @param totalItems Total items available in the database
 * @param pageSize Items per each page
 * @returns Total number of pages available
 */
export const getTotalPages = (totalItems: number, pageSize: number) => {
  const quotient = (totalItems / pageSize) | 0; // DM: bitwise OR to convert float to int
  const modulus = totalItems % pageSize;

  return quotient + (modulus > 0 ? 1 : 0);
};

const createPaginationRequestSchema = z.object({
  /**
   * Page number (starts from 1)
   */
  page: pageNumberSchema,

  /**
   * Items per page
   */
  size: pageSizeSchema,
});

export const createPaginationRequest = (
  opts: z.infer<typeof createPaginationRequestSchema>,
): PaginationRequest => {
  // validate inputs
  const { page, size } = createPaginationRequestSchema.parse(opts);

  return {
    page,
    size,
  };
};

const createPaginationResponseSchema = z.object({
  /**
   * Page number (starts from 1)
   */
  page: pageNumberSchema,

  /**
   * Items per page
   */
  size: pageSizeSchema,

  /**
   * Total items in the store
   */
  totalItems: z.number().int().positive().safe(),
});

export const createPaginationResponse = (
  opts: z.infer<typeof createPaginationResponseSchema>,
): PaginationResponse => {
  // validate inputs
  const { page, size, totalItems } = createPaginationResponseSchema.parse(opts);

  // calculate total pages
  const totalPages = getTotalPages(totalItems, size);

  return {
    page,
    size,

    totalItems,
    totalPages,
  };
};
