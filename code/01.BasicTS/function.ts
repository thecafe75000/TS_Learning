function fn(name: string, age: number) {
  console.log(name, age)
}
fn('Tom', 18) // name对应Toom, age 对应18
// fn(18) // 报错，函数fn要求有2个参数
// fn('Tom')

function getSum(nums: number[]): number {
  let sum: number = 0
  for (let i: number = 0; i < nums.length; i++) {
    sum += nums[i]
  }
  return sum
}

console.log(getSum([1, 2, 3]))
