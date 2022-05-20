/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  displayName: 'packaged',
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: './',
  testRegex: '(/src/.*.spec.ts)$',
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.build.json',
    },
  },
};
