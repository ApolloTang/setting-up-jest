import MyClass from './my-es6-class.js';

const myClass = new MyClass();

test('my-es6-class.test: classProp works', () => {
  expect(myClass.getMyClassProp()).toBe('myClassProp');
});

test('my-es6-class.test: property initializers are not on the prototype', () => {
  expect(myClass.__proto__.getMyClassProp).toBe(undefined);
});

test('staticClassProp works', () => {
  expect(MyClass.getMyStaticProp()).toBe('myStaticProp');
});
