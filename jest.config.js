const {defaults} = require('jest-config');
module.exports = {
  "testEnvironment": 'node',
  // "testEnvironment": 'jsdom',
  "setupFiles": [
    "<rootDir>/jest.init.js"
  ]
}
