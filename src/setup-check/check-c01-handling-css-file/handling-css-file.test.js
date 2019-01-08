import configuration from '../jest-setup-check-configuration.js';
const styleMock = require(`${configuration().testFolderPath}/style-mock.js`);

import importedCssFilefrom from './handling-css-file.js';

test('handling-css-file.test: Jest handle css file', ()=>{
  expect(importedCssFilefrom).toEqual(styleMock);
})
