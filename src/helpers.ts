import { Request, InvokeRequest, NotificationRequest } from './request';
import { ErrorResponse, Response, SuccessResponse } from './response';

export const isSuccessResponse = (
  response: Response,
): response is SuccessResponse => {
  const potentialError = (response as ErrorResponse).error;

  return typeof potentialError === undefined || potentialError === null;
};

export const isErrorResponse = (
  response: Response,
): response is ErrorResponse => {
  const potentialError = (response as ErrorResponse).error;

  return typeof potentialError !== 'undefined' && potentialError !== null;
};

export const isNotificationRequest = (
  request: Request,
): request is NotificationRequest => {
  const potentialRequestId = (request as InvokeRequest).id;

  return typeof potentialRequestId === 'undefined';
};

export const isInvokeRequest = (request: Request): request is InvokeRequest => {
  const potentialRequestId = (request as InvokeRequest).id;

  return (
    typeof potentialRequestId === 'string' ||
    typeof potentialRequestId === 'number'
  );
};
