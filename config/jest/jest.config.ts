import type { Config } from 'jest'
import path from 'path'

const config: Config = {
  globals: {
    __IS_DEV__: true,
    __API__: '',
    __PROJECT__: 'jest',
  },
  clearMocks: true,
  coveragePathIgnorePatterns: [
    '\\\\node_modules\\\\',
  ],
  moduleFileExtensions: [
    'js',
    'mjs',
    'cjs',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node',
  ],
  moduleDirectories: [
    'node_modules',
  ],
  modulePaths: [
    '<rootDir>src',
  ],
  rootDir: '../../',
  testMatch: [
    '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
  ],
  setupFilesAfterEnv: ['<rootDir>/config/jest/setupTests.ts'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(s?css)$': 'identity-obj-proxy',
    '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  reporters: [
    'default',
    ['jest-html-reporters', {
      publicPath: '<rootDir>/reports/unit',
      filename: 'report.html',
      openReport: false,
      inlineSource: true,
    }],
  ],
}

export default config
