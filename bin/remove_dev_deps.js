#!/usr/bin/env node

const { resolve } = require('node:path');

// load package.json
const pkg = require(resolve(__dirname, '..', 'package.json'));

// delete devDependencies
delete pkg.devDependencies;

// write-back to the console
console.log(JSON.stringify(pkg, null, 2));
