
console.log('hello webpack')

const a = {a: 'a'}
const b = {b: 'b', ...a}

console.log('spread works: ', b)

class MyClass {
  static myStaticProp = 'myStaticProp'
  static getMyStaticProp = () => MyClass.myStaticProp
  myClassProp = 'myClassProp'
  getMyClassProp = () => this.myClassProp
}

const myClass = new MyClass()
console.log('MyClass.gerMyStaticProps: ', MyClass.getMyStaticProp())
console.log('myClass.gerMyClassProps: ', myClass.getMyClassProp())

const testPolyFill = [1,2].includes(1); // true
console.log('polyFill work: ', testPolyFill)
