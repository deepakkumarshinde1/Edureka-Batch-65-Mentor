class ClassA {
  getData() {
    console.log("hello and welcome to class A");
  }
}

class ClassB extends ClassA {
  constructor() {
    super();
  }
}

let classB = new ClassB(); // instance  of a class
classB.getData();
