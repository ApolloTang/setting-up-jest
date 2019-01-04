import configuration from '../jest-setup-check-configuration.js';
const styleMock = require(`${configuration().testFolderPath}/style-mock.js`);

import importedCssFilefrom from './handle-css-file.js';

test('It handle css file', ()=>{
  expect(importedCssFilefrom).toEqual(styleMock);
})
