const {defaults} = require('jest-config');
module.exports = {
  // "testEnvironment": 'node',
  "testEnvironment": 'jsdom',
  "setupFiles": [
    "<rootDir>/jest.init.js"
  ],
  moduleNameMapper: {
    '\\.module\\.css$': 'identity-obj-proxy',
    '\\.css$': require.resolve('./test/style-mock.js')
  }
}
