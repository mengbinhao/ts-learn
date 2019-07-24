//接口定义对象
interface List {
  readonly id: number
  name: string
  //[x: string]: any
  age?: number
}

interface Result {
  data: List[]
}

let render = (ret: Result) => {
  ret.data.forEach(list => {
    console.log(`${list.id}--${list.name}`)
    if (list.age) {
      console.log(`${list.id}--${list.name}--${list.age}`)
    }
    //list.id++
  })
}

let result = {
  data: [
    //不符合对象接口规范的数据ts不报错，但直接传个对象会报错
    {
      id: 1,
      name: 'jack',
      sex: 'male'
    },
    {
      id: 2,
      name: 'feifei',
      age: 10
    }
  ]
}

render(result)
// 直接传个对象会报错，3种解决方法
// 1 传变量 2 类型断言 3 索引签名
// render({
//   data: [
//     {
//       id: 1,
//       name: 'jack',
//       sex: 'male'
//     },
//     {
//       id: 2,
//       name: 'feifei'
//     }
//   ]
// })

render({
  data: [
    {
      id: 1,
      name: 'jack',
      sex: 'male'
    },
    {
      id: 2,
      name: 'feifei'
    }
  ]
} as Result)

//但React里面会引起歧义
render((<Result>{
  data: [
    {
      id: 1,
      name: 'jack',
      sex: 'male'
    },
    {
      id: 2,
      name: 'feifei'
    }
  ]
}) as Result)

interface StringArray {
  [index: number]: string
}
let chars: StringArray = ['a', 'b']

//
interface Names1 {
  [x: string]: string
  //数字索引的返回值必须是字符串索引的子类型
  [z: number]: string
}

interface Names2 {
  [x: string]: any
  // y: number;
  [z: number]: number
}

// let add: (x: number, y: number) => number

//接口定义函数
// interface Add {
//     (x: number, y: number): number
// }

//类型别名定义函数
type Add = (x: number, y: number) => number
let addfunc: Add = (a: number, b: number) => a + b

//混合接口
interface Lib {
  (): void
  version: string
  doSomething(): void
}

function getLib() {
  let lib = (() => {}) as Lib
  lib.version = '1.0.0'
  lib.doSomething = () => {}
  return lib
}

let lib1 = getLib()
lib1()
let lib2 = getLib()
lib2.doSomething()
