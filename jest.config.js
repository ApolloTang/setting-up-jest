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
  ]

};
