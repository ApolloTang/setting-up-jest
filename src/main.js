import ReactDom from 'react-dom'
import React from 'react'

console.log('hello webpack')

const a = {a: 'a'}
const b = {b: 'b', ...a}

console.log('spread works: ', b)

import MyClass from './my-class.js'
const myClass = new MyClass()
console.log('MyClass.gerMyStaticProps: ', MyClass.getMyStaticProp())
console.log('myClass.gerMyClassProps: ', myClass.getMyClassProp())

const testPolyFill = [1,2].includes(1); // true
console.log('polyFill work: ', testPolyFill)


ReactDom.render(
  <React.Fragment>
    <h1>Hello React</h1>
  </React.Fragment>,
  document.getElementById('app')
)

import webpackSetupCheck from './setup-check/webpack-setup-check.js'
