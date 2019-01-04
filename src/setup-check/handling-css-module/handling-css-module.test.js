import 'react-testing-library/cleanup-after-each'
import {render} from 'react-testing-library'
import React from 'react'
import MyComponentWithCssModule from './handling-css-module.js'

test('Import css module with identity-obj-proxy check', ()=>{
  const {container} = render(<MyComponentWithCssModule />)
  expect(container.innerHTML).toMatch('classNameOfMyComponentWithCssModule')
})
