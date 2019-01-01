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

import myAsyncFunction from './my-async-fn.js'
myAsyncFunction().then(
  data=>{ console.log('AsyncFunction Work:', data === 'myAsyncFunction')}
)


import('./lazy-load').then((m)=>{
  console.log('content of lazy module test 1:', m)
})

;(async function() {
  console.log('...loading lazy module')
  const lazyContent = await import('./lazy-load')
  console.log('content of lazy module test 2: ', lazyContent)
})()


ReactDom.render(
  <React.Fragment>
    <h1>Hello React</h1>
  </React.Fragment>,
  document.getElementById('app')
)
