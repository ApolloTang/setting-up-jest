import configuration from '../jest-setup-check-configuration.js'
const styleMock = require(`${configuration().testFolderPath}/style-mock.js`);

const testFolderPath = '../../../test'
import importCss from './import-css.js'

test('import css check', ()=>{
  expect(importCss).toEqual(styleMock)
})
