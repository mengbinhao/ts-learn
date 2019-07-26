class Dog {
  //构造函数private / protected
  constructor(name: string) {
    this.name = name
  }
  public name: string
  run() {
    console.log(`dog run`)
  }
  private pri() {}
  protected pro() {}
  readonly legs: number = 4
  static food: string = 'bone'
}

console.log(Dog.prototype)
let dog = new Dog('wang')
console.log(dog)
console.log(Dog.food)

class Husky extends Dog {
  //添加public直接相当于定义实例属性
  constructor(name: string, public color: string) {
    super(name)
    this.color = color
  }
  //color: string
}
console.log(Husky.food)
