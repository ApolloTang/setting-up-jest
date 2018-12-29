class MyClass {
  static myStaticProp = 'myStaticProp'
  static getMyStaticProp = () => MyClass.myStaticProp
  myClassProp = 'myClassProp'
  getMyClassProp = () => this.myClassProp
}

export default MyClass
