let names: string[] = ['Tom', 'Mary', 'Annie']
console.log(names)
names[0] = 'James' // 修改元素的值
console.log(names)
names[3] = 'Coco' // 给数组添加新元素
console.log(names)
names[names.length] = 'Vincent'
console.log(names)

let nums: number[] = [1, 2, 3, 4, 5]
let sum: number = 0
for (let i: number = 0; i < nums.length; i++) {
  console.log(nums[i])
  sum += nums[i]
}
console.log('sum is', sum)
