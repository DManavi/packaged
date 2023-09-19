import { FailedApiResponse } from './response';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ResourceNotFoundApiResponse<TResourceId = any> = FailedApiResponse<{
  /**
   * Resource
   */
  resourceId: TResourceId;

  /**
   * Resource type/name
   */
  resourceType: string;
}> & { code: 'E_RESOURCE_NOT_FOUND' };

export type RouteNotFoundApiResponse = FailedApiResponse<{
  /**
   * HTTP method (e.g. GET, POST, etc)
   */
  method: string;

  /**
   * Path (e.g. /v1/resource-name/:id)
   */
  path: string;
}> & { code: 'E_ROUTE_NOT_FOUND' };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ForbiddenApiResponse<TResourceId = any> = FailedApiResponse<{
  /**
   * Resource type/name
   */
  resourceType: string;

  /**
   * Resource
   */
  resourceId: TResourceId;
}> & { code: 'E_FORBIDDEN' };

export type UnauthorizedApiResponse = FailedApiResponse & {
  code: 'E_UNAUTHORIZED';
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type BadRequestApiResponse<TValidationError = any> =
  FailedApiResponse<TValidationError> & { code: 'E_BAD_REQUEST' };

export type InternalServerErrorApiResponse<TError = void> = TError extends void
  ? FailedApiResponse & { code: 'E_INTERNAL_SERVER_ERROR' }
  : FailedApiResponse<TError> & { code: 'E_INTERNAL_SERVER_ERROR' };
