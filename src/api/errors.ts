import { ApiResponseErrorObject } from './common';
import { ApiResponse } from './response';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ResourceNotFoundApiResponse<TResourceId = any> = ApiResponse<
  ApiResponseErrorObject & {
    code: 'E_RESOURCE_NOT_FOUND';

    /**
     * Resource
     */
    resourceId: TResourceId;

    /**
     * Resource type/name
     */
    resourceType: string;
  }
>;

export type RouteNotFoundApiResponse = ApiResponse<
  ApiResponseErrorObject & {
    code: 'E_ROUTE_NOT_FOUND';

    /**
     * HTTP method (e.g. GET, POST, etc)
     */
    method: string;

    /**
     * Path (e.g. /v1/resource-name/:id)
     */
    path: string;
  }
>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ForbiddenApiResponse<TResourceId = any> = ApiResponse<
  ApiResponseErrorObject & {
    code: 'E_FORBIDDEN';

    /**
     * Resource type/name
     */
    resourceType: string;

    /**
     * Resource
     */
    resourceId: TResourceId;
  }
>;

export type UnauthorizedApiResponse = ApiResponse<
  ApiResponseErrorObject & {
    code: 'E_UNAUTHORIZED';
  }
>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type BadRequestApiResponse<TValidationError = any> = ApiResponse<
  ApiResponseErrorObject<TValidationError> & {
    code: 'E_BAD_REQUEST';
  }
>;

export type InternalServerErrorApiResponse<TErrorDetails = void> =
  TErrorDetails extends void
    ? ApiResponse<
        ApiResponseErrorObject & {
          code: 'E_INTERNAL_SERVER_ERROR';
        }
      >
    : ApiResponse<
        ApiResponseErrorObject<TErrorDetails> & {
          code: 'E_INTERNAL_SERVER_ERROR';
        }
      >;
