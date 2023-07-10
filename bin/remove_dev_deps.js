#!/usr/bin/env node

const { resolve } = require('node:path');
const { readFileSync } = require('node:fs');

// load package.json
const pkgStr = readFileSync(resolve(__dirname, '..', 'package.json'), 'utf-8');
// parse JSON content
const pkg = JSON.parse(pkgStr);

// delete devDependencies
delete pkg.devDependencies;

// write-back to the console
console.log(JSON.stringify(pkg, null, 2));
