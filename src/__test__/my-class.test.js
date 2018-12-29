import MyClass from '../my-class.js'

test('staticClassProp works', () => {
  expect(MyClass.getMyStaticProp()).toBe('myStaticProp')
})
test('classProp works', () => {
  const myClass = new MyClass()
  expect(myClass.getMyClassProp()).toBe('myClassProp')
})
