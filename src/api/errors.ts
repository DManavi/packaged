import { ApiResponseErrorObject } from './common';
import { FailedApiResponse } from './failed_response';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ResourceNotFoundApiResponse<TResourceId = any> =
  FailedApiResponse<ApiResponseErrorObject> & {
    error: {
      code: 'E_RESOURCE_NOT_FOUND';
    };

    metadata: {
      /**
       * User requested the resource
       */
      userId: string;

      /**
       * Resource
       */
      resourceId: TResourceId;

      /**
       * Resource type/name
       */
      resourceType: string;
    };
  };

export type RouteNotFoundApiResponse =
  FailedApiResponse<ApiResponseErrorObject> & {
    error: {
      code: 'E_ROUTE_NOT_FOUND';
    };

    metadata: {
      /**
       * HTTP method (e.g. GET, POST, etc)
       */
      method: string;

      /**
       * Path (e.g. /v1/organization-portal/)
       */
      path: string;
    };
  };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ForbiddenApiResponse<TResourceId = any> =
  FailedApiResponse<ApiResponseErrorObject> & {
    error: {
      code: 'E_ACCESS_DENIED';
    };

    metadata: {
      /**
       * User requested the resource
       */
      userId: string;

      /**
       * Resource type/name
       */
      resourceType: string;

      /**
       * Resource
       */
      resourceId: TResourceId;
    };
  };

export type UnauthorizedApiResponse =
  FailedApiResponse<ApiResponseErrorObject> & {
    error: {
      code: 'E_UNAUTHORIZED';
    };
  };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type BadRequestApiResponse<TValidationError = any> = FailedApiResponse<
  ApiResponseErrorObject<TValidationError>
> & {
  error: {
    code: 'E_BAD_REQUEST';
  };
};

export type InternalServerErrorDevelopmentApiResponse<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  TError extends Error = any,
> = ApiResponseErrorObject<TError> & {
  error: {
    code: 'E_INTERNAL_SERVER_ERROR';
  };
};

export type InternalServerErrorProductionApiResponse =
  FailedApiResponse<ApiResponseErrorObject> & {
    error: {
      code: 'E_INTERNAL_SERVER_ERROR';
    };
  };
