const {defaults} = require('jest-config');
module.exports = {
  "testEnvironment": 'node',
  // "testEnvironment": 'jsdom',
  "setupFiles": [
    "<rootDir>/node_modules/regenerator-runtime/runtime",
    "<rootDir>/jest.init.js"
  ]
}
