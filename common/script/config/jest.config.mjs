import path from 'node:path'

/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  rootDir: path.resolve(import.meta.dirname, '../../'),
  testEnvironment: 'jsdom',
  transform: {
    '^.+.tsx?$': [
      'ts-jest',
      {
        tsconfig: {
          jsx: 'react-jsx',
        },
      },
    ],
  },
  moduleNameMapper: {
    '^@common/(.*)$': '<rootDir>/$1',
    '^@model/(.*)$': '<rootDir>/model/$1',
    '^@model$': '<rootDir>/model/index.ts',
  },
}
