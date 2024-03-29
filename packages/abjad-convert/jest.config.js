/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports =  {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testMatch: [
    '**/?(*.)+(test.ts)',
  ],
  coverageReporters: [
    'json-summary',
  ],
};
