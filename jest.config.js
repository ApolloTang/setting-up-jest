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
  }

};
