//原始类型
const bool: boolean = true
let num: number | undefined | null = 123
let str: string = 'abc'
//str = 123

//array
const arr1: number[] = [1, 2, 3]
const arr2: Array<number | string> = [1, 2, 3, '4']

//元祖
let tuple: [number, string] = [0, '1']
//千万不要像下面这么干
// tuple.push(3)
// console.log(tuple)
// tuple[2]

//函数
//可以省略函数返回类型，通过ts类型推断得到
let add = (x: number, y: number): number => x + y
let compute: (x: number, y: number) => number
compute = (a, b): number => a + b

//对象
let obj: { x: number; y: number } = { x: 1, y: 2 }
obj.x = 3

//symbol
let s1: symbol = Symbol()
let s2 = Symbol()
console.log(s1 === s2)

//undefined null
let un: undefined = undefined
let nu: null = null
num = undefined

//void
let noReturn = () => {}

//any
let x
x = 1
x = '1'

//never
const err = () => {
  throw new Error('error')
}
const endless = () => {
  while (true) {}
}
