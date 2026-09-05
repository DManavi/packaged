<div align="center">

# Packaged

**Portable TypeScript contracts for events, RPC responses, and pagination.**

[![npm version][npm-version-image]][npm-url]
[![npm downloads][npm-downloads-image]][npm-url]
[![license][license-image]][license-url]

</div>

Packaged is a small, implementation-free collection of TypeScript types for
building consistent APIs and event-driven applications. Use the same contracts
in serverless functions, services, workers, and clients without coupling your
business logic to AWS, Azure, Google Cloud, IBM Cloud, OpenWhisk, or a specific
web framework.

## Why Packaged?

- **Environment agnostic** - describe application boundaries without importing
  a cloud provider or framework SDK.
- **Strongly typed** - model payloads, filters, success responses, errors, and
  pagination with TypeScript generics.
- **Composable** - combine small request contracts to match each endpoint.
- **Type-only** - the package adds contracts, not runtime behavior or
  dependencies.

## Installation

```sh
npm install packaged
```

```sh
yarn add packaged
```

```sh
pnpm add packaged
```

## Quick start

Define an event once and share its contract between the code that publishes it
and every consumer:

```typescript
import type { Event } from 'packaged';

type UserRegistered = {
  userId: string;
  email: string;
};

const event: Event<UserRegistered> = {
  id: crypto.randomUUID(),
  version: '1',
  time: new Date().toISOString(),
  type: 'user.registered',
  source: 'accounts-service',
  userId: 'usr_123',
  metadata: {
    correlationId: 'req_456',
  },
  payload: {
    userId: 'usr_123',
    email: 'ada@example.com',
  },
};
```

Because Packaged exports types only, prefer `import type` when your TypeScript
configuration supports it.

## Events

`Event<TPayload>` provides a consistent envelope for messages exchanged through
queues, topics, event buses, or direct function invocations.

```typescript
import type { Event } from 'packaged';

// Events can omit a payload when the envelope contains all required context.
const nightlyCleanup: Event = {
  id: 'evt_01',
  version: '1',
  time: '2026-09-05T02:00:00.000Z',
  type: 'maintenance.cleanup.started',
  source: 'scheduler',
};

type OrderPaid = {
  orderId: string;
  amountInCents: number;
  currency: 'USD' | 'EUR';
};

function handleOrderPaid(event: Event<OrderPaid>): void {
  console.log(`Paid order ${event.payload.orderId}`);
}
```

See the complete [`Event` contract](./src/event.ts).

## RPC requests

Build request contracts by combining only the capabilities an operation needs:

- `RequestWithPayload<TPayload>` for commands with an input body.
- `FilteredRequest<TFilters>` for query filters.
- `PaginatedRequest` for cursor- or offset-based pagination.

### Command request

```typescript
import type { RequestWithPayload } from 'packaged';

type CreateUserRequest = RequestWithPayload<{
  email: string;
  displayName: string;
}>;

async function createUser(request: CreateUserRequest) {
  const { email, displayName } = request.payload;
  // Persist the user using your database or service of choice.
  return { email, displayName };
}
```

### Filtered, paginated query

```typescript
import type { FilteredRequest, PaginatedRequest } from 'packaged';

type ListUsersRequest = FilteredRequest<{
  status?: 'active' | 'disabled';
  teamId?: string;
}> &
  PaginatedRequest;

const request: ListUsersRequest = {
  filters: {
    status: 'active',
    teamId: 'team_42',
  },
  pagination: {
    type: 'offset',
    offset: 40,
    limit: 20,
  },
};

async function listUsers(input: ListUsersRequest) {
  if (input.pagination.type === 'offset') {
    const { offset = 0, limit = 20 } = input.pagination;
    // Apply filters and query with offset/limit.
    return { offset, limit, filters: input.filters };
  }

  const { cursor, limit = 20 } = input.pagination;
  // Decode the cursor and fetch the next page.
  return { cursor, limit, filters: input.filters };
}
```

## RPC responses

Success and error responses form a discriminated union through the `status`
field, so TypeScript narrows the available properties after a status check.

```typescript
import type { ErrorResponse, SuccessResponse } from 'packaged';

type User = {
  id: string;
  email: string;
};

type ValidationError = {
  field: keyof User;
  reason: string;
};

type CreateUserResponse =
  | SuccessResponse<User>
  | ErrorResponse<ValidationError>;

function describe(result: CreateUserResponse): string {
  if (result.status === 'success') {
    return `Created ${result.payload.email}`;
  }

  return `${result.message}: ${result.payload.field}`;
}

const result: CreateUserResponse = {
  status: 'success',
  code: 'USER_CREATED',
  payload: {
    id: 'usr_123',
    email: 'ada@example.com',
  },
};
```

For operations without a payload, omit the generic argument and `payload`
property:

```typescript
import type { ErrorResponse, SuccessResponse } from 'packaged';

const accepted: SuccessResponse = {
  status: 'success',
  code: 'ACCEPTED',
};

const unavailable: ErrorResponse = {
  status: 'error',
  code: 'SERVICE_UNAVAILABLE',
  message: 'Please try again later',
};
```

See all [RPC request and response contracts](./src/rpc.ts).

## Pagination

Packaged supports offset-based and cursor-based pagination. The `type` field
discriminates both request and response shapes.

### Offset-based pagination

Offset pagination works well for stable datasets and interfaces that need page
numbers or direct page navigation.

```typescript
import type {
  OffsetBasedPaginationRequest,
  PaginatedResponse,
} from 'packaged';

const pagination: OffsetBasedPaginationRequest = {
  type: 'offset',
  offset: 20,
  limit: 10,
};

type Product = {
  id: string;
  name: string;
};

const response: PaginatedResponse<Product> = {
  status: 'success',
  code: 'PRODUCTS_LISTED',
  payload: [
    { id: 'prod_21', name: 'Mechanical keyboard' },
    { id: 'prod_22', name: 'USB-C dock' },
  ],
  pagination: {
    type: 'offset',
    totalItems: 42,
    totalPages: 5,
  },
};
```

### Cursor-based pagination

Cursor pagination is useful for frequently changing datasets, feeds, and large
tables where an offset can become slow or inconsistent.

```typescript
import type {
  CursorBasedPaginationRequest,
  CursorBasedPaginationResponse,
  PaginatedResponse,
} from 'packaged';

const pagination: CursorBasedPaginationRequest = {
  type: 'cursor',
  cursor: 'eyJpZCI6ImV2dF8xMDAifQ==',
  limit: 25,
};

type AuditEntry = {
  id: string;
  action: string;
};

const response: PaginatedResponse<
  AuditEntry,
  CursorBasedPaginationResponse
> = {
  status: 'success',
  code: 'AUDIT_ENTRIES_LISTED',
  payload: [{ id: 'evt_101', action: 'user.updated' }],
  pagination: {
    type: 'cursor',
    cursor: 'eyJpZCI6ImV2dF8xMDEifQ==',
    totalItems: 101,
    totalPages: 5,
  },
};
```

See all [pagination contracts](./src/pagination.ts).

## Available exports

All contracts are available from the package root:

```typescript
import type {
  Event,
  ErrorResponse,
  FilteredRequest,
  PaginatedRequest,
  PaginatedResponse,
  PaginationRequest,
  PaginationResponse,
  RequestWithPayload,
  SuccessResponse,
} from 'packaged';
```

Type declarations are also organized by module:

```typescript
import type { Event } from 'packaged/event';
import type { PaginationRequest } from 'packaged/pagination';
import type { SuccessResponse } from 'packaged/rpc';
```

## License

Distributed under the [MIT License](./LICENSE).

[npm-version-image]: https://img.shields.io/npm/v/packaged?logo=npm
[npm-downloads-image]: https://img.shields.io/npm/dw/packaged?logo=npm
[npm-url]: https://www.npmjs.com/package/packaged
[license-image]: https://img.shields.io/npm/l/packaged
[license-url]: ./LICENSE
