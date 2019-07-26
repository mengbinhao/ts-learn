// 函数定义
function add1(x: number, y: number) {
  return x + y
}

//以下全是定义，需要实现
let add2: (x: number, y: number) => number

type add3 = (x: number, y: number) => number

interface add4 {
  (x: number, y: number): number
}

//ts形参跟实参必须一一对应
//add1(1, 2, 3)

//可选参数必须在必选参数之后
function add5(x: number, y?: number) {
  return y ? x + y : x
}
add5(1)

//参数默认值
function add6(x: number, y = 0, z: number, q = 1) {
  return x + y + z + q
}
//必须显示给undefined
console.log(add6(1, undefined, 3))

//剩余参数
function add7(x: number, ...rest: number[]) {
  return x + rest.reduce((pre, cur) => pre + cur)
}
add7(1, 2, 3, 4, 5)

//函数重载
function add8(...rest: number[]): number
function add8(...rest: string[]): string
//在类型最宽泛的方法里实现
//最容易匹配的定义在最前面
function add8(...rest: any[]) {
  let first = rest[0]
  if (typeof first === 'number') {
    return rest.reduce((pre, cur) => pre + cur)
  }
  if (typeof first === 'string') {
    return rest.join('')
  }
}
console.log(add8(1, 2))
console.log(add8('a', 'b', 'c'))
