const {defaults} = require('jest-config');

module.exports = {

  // "testMatch": [ "**/__jest__/**/*.js?(x)", "**/?(*.)+(jest).js?(x)" ], // <--- if use this jest won't compile typescript

  "testPathIgnorePatterns": [
    "/nodule_module/",
  ],

  "projects" : [
    "src"
  ],

  // "testEnvironment": 'node',
  "testEnvironment": 'jsdom',

  "setupFiles": [
    // collection of script to run before jest is loaded
    "<rootDir>/test/jest.init.js"
  ],

  setupFilesAfterEnv: [
    require.resolve('./test/setup-tests.js'), // path to script after jest is loaded
  ],

  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./test/style-mock.js')
  }

};
