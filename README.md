# Packaged

[![NPM version][npm-image]](https://npmjs.org/package/packaged)
[![NPM downloads][downloads-image]](https://npmjs.org/package/packaged)
[![Build Status][github-actions-publish-npm-package]](https://github.com/DManavi/packaged/actions/workflows/publish_npm_package.yml)

## About

Packaged is a repository that contains interfaces/types/contracts that helps developers to create their own strongly-typed environment-agnostic (AWS, Azure, Google Cloud, IBM Cloud, Apache OpenWhisk, etc.) Function-as-a-Service apps.

This project only contains the abstraction and there's no implementation involved. Given that, developers can implement application-specific business logic without having a unified API interface.

## Installation

To install this package, run the command below.

> Since there's no implementation involved, it's recommended to install this package as a development-time package.

```sh
npm install --save-dev packaged
yarn add packaged --dev
```

## Usage

### CommonJS

```js
const { FunctionRequestV1, FunctionResponseV1, EventV1 } = require('packaged');
```

### ES6/TypeScript

```js
import { FunctionRequestV1, FunctionResponseV1, EventV1 } from 'packaged';
```

And you're good to go!

## License

GPL v3

[npm-image]: https://img.shields.io/npm/v/packaged
[npm-url]: https://npmjs.org/package/packaged
[github-actions-publish-npm-package]: https://github.com/DManavi/packaged/actions/workflows/publish_npm_package.yml/badge.svg
[downloads-image]: https://img.shields.io/npm/dw/packaged
[downloads-url]: https://npmjs.org/package/packaged
