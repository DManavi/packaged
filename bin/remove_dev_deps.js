#!/usr/bin/env node

const { readFileSync } = require('node:fs');

// load package.json
const pkgStr = readFileSync(0, 'utf-8');

// parse JSON content
const pkg = JSON.parse(pkgStr);

// delete devDependencies
delete pkg.devDependencies;

// write-back to the console
console.log(JSON.stringify(pkg, null, 2));
