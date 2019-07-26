abstract class Animal {
  eat() {
    console.log('eat')
  }
  abstract sleep(): void
}

class Dog1 extends Animal {
  constructor(name: string) {
    super()
    this.name = name
  }
  sleep() {
    console.log('dog sleep')
  }
  name: string
}

let dog1 = new Dog1('wang')

class Cat extends Animal {
  sleep() {
    console.log('Cat sleep')
  }
}

let cat = new Cat()

let animals: Animal[] = [dog1, cat]
//polymorphism
animals.forEach(i => {
  i.sleep()
})

class Workflow {
  step1() {
    return this
  }
  step2() {
    return this
  }
}
new Workflow().step1().step2()

class MyFlow extends Workflow {
  next() {
    return this
  }
}
//this可以是子类型也可以是父类型
new MyFlow()
  .next()
  .step1()
  .next()
  .step2()
