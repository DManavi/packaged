# Packaged

[![NPM version][npm-image]](https://npmjs.org/package/packaged)
[![NPM downloads][downloads-image]](https://npmjs.org/package/packaged)
[![Build Status][github-actions-publish-npm-package]](https://github.com/DManavi/packaged/actions/workflows/publish_npm_package.yml)

## About

Packaged is a repository that contains interfaces/types/contracts that helps developers to create their own strongly-typed environment-agnostic (AWS, Azure, Google Cloud, IBM Cloud, Apache OpenWhisk, etc.) Function-as-a-Service apps.

This project only contains the abstraction and there's no implementation involved. Given that, developers can implement application-specific business logic without having a unified API interface.

## Installation

To install this package, run the command below.

```sh
# npm
npm install --save packaged

# yarn
yarn add packaged
```

## Usage

### Event

[This file](./src/event.ts) contains a general event structure. The event is a generic type, means that not providing the payload type (TPayload) results in an event w/o payload.

```typescript
import { Event } from 'packaged';

const dailyCronEvent: Event = {
  // check the properties of the Event object
};

const userRegisteredEvent: Event<User> = {
  // check the properties of the Event object

  payload: {
    // User object (based on the input type)
  },
};
```

### RPC

[This file](./src/rpc.ts) contains a request/response structure for an RPC system (e.g. HTTP API or internal lambda functions).

#### Request

The request object is not unified (due to the complexity and coupling to the implementation). But there are several types you can use to unify your request objects.

- PaginatedRequest
- FilteredRequest<TFilter>
- RequestWithPayload<TPayload>

You can define your request object by combining these types.

```typescript
import { PaginatedRequest, FilteredRequest } from 'packaged';

type UserFilters = {
  group: Array<string>;
};

type ListUsersRequest = PaginatedRequest & FilteredRequest<UserFilters>;

const listUsers = (req: ListUserRequest) => {
  const { filters, pagination } = req;

  // apply filters (e.g. filters.group...)

  // apply pagination (e.g. skip/take or cursor based)
};
```

#### Response

There are two main response types:

- SuccessResponse
- ErrorResponse

There is one child response from SuccessResponse

- PaginatedResponse

```typescript
import { Response, PaginatedResponse } from 'packaged';

const requestReceived: Response = {
  // check the properties of the Event object
};

const userCreatedResponse: Response<User> = {
  // check the properties of the Event object

  payload: {
    // User object (based on the input type)
  },
};
```

### Pagination

#### Offset-based

TBD

#### Cursor-based

TBD

And you're good to go!

## License

MIT

[npm-image]: https://img.shields.io/npm/v/packaged
[npm-url]: https://npmjs.org/package/packaged
[github-actions-publish-npm-package]: https://github.com/DManavi/packaged/actions/workflows/publish_npm_package.yml/badge.svg
[downloads-image]: https://img.shields.io/npm/dw/packaged
[downloads-url]: https://npmjs.org/package/packaged

```

```
