// 创建一个接口
interface IUser {
  name: string
  age: number
  sayHi: () => void
}

// 使用接口
let p1: IUser = {
  name: 'Jack',
  age: 18,
  sayHi: function () {
    console.log(p1.name,'is great')
  }
}

p1.name = 'Nicolas'
console.log(p1)

let p2: IUser = {
  name: 'Mary',
  age: 20,
  sayHi: function () {
    console.log('Hi, nice to meet you')
  }
}

p1.sayHi()
p2.sayHi()