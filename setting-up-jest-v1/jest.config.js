const {defaults} = require('jest-config');

module.exports = {

  // 'testMatch': [ '**/__jest__/**/*.js?(x)', '**/?(*.)+(jest).js?(x)' ], //@ [bug] if use this jest won't compile typescript

  testPathIgnorePatterns: [
    '/nodule_module/',
  ],

  projects : [
    'src'
  ],

  // "testEnvironment": 'node',
  testEnvironment: 'jsdom',

  //@ Scripts to run before jest is loaded
  setupFiles: [
    '<rootDir>/node_modules/regenerator-runtime/runtime', // https://github.com/facebook/jest/issues/5698
    "<rootDir>/test/jest.init.js"
  ],

  //@ Scripts to run after jest is loaded
  setupFilesAfterEnv: [
    require.resolve('./test/setup-tests.js'),
  ],

  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./test/style-mock.js')
  },

  //@ if collectCoverageFrom absence, jest coverage will take into account of
  //@ configuration script in 'test' folder. This lead to wrong statistic on coverage
  collectCoverageFrom: [
    '**/src/**/*.(js|jsx|ts|tsx)' // only run coverage in src (ie. test/ folder is excluded)
  ],

  coverageThreshold: {
    global: {
      stagements: 50,
      branch: 50,
      functions: 50,
      lines: 50
    },
    './src/setup-check/check-a02-handling-async-function/my-async-fn.js': {
      stagements: 100,
      branch: 100,
      functions: 100,
      lines: 100
    }
  },

  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ]
};
