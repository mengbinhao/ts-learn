//原始类型
let bool: boolean = true
let num: number = 123
let str: string = 'abc'

//array
let arr1: number[] = [1, 2, 3]
let arr2: Array<number | string> = [1, 2, 3, '4']

//元祖
let tuple: [number, string] = [1, '2']
//不要像下面这么干
// tuple.push(3)
// console.log(tuple)
// tuple[2]

//函数
//可以省略函数返回类型，通过ts类型推荐得到
let add = (x: number, y: number): number => x + y

//对象
