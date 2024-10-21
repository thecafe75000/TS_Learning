## TypeScript (TS)

TypeScript = Type + JavaScript 

TS 是微软开发的开源编程语言，它为JS添加了类型系统，其目标是开发大型应用，可以在任何浏览器，任何计算机，任何操作系统上运行.

### 安装解析TS的工具包

```shell
npm i -g typescript
```

- TS 代码需要在node环境里运行，但无论是nodejs还是浏览器，都不识别TS

- typescript 是用来解析 TS 的工具包，提供了tsc命令，实现TS转换成JS

- TS 文件后缀名是`.ts`，执行TS代码要输入命令tsc

- 使用`ts-node`包，可直接在node环境里执行TS代码
  
  ```shell
  npm i -g ts-node
  ```
  
  ```ts
  tsc hello.ts // 执行TS代码
  node hello.js // 执行JS代码
  
  #上面代码可简化成一步来执行
  ts-node hello.ts
  ```

### 声明变量并指定类型,以及对变量赋值

```ts
let age: number = 18 
```

### 类型注解

类型注解是一种为变量添加类型约束的方式，也就是程序员和TS做了一个约定

<font color='bronze'>注意：约定了什么类型，就只能给变量赋值什么类型，即只能给变量赋予约定好的类型</font>

```ts
// :number 就是类型注解
let age: number = 18 

/*
   程序员和TS约定变量age的数值的类型是number
*/

age = "hello"  // 错误，age的类型注解是number
```

### 变量的命名规则(必须遵守)

变量名称只能出现：数字，字母，下划线，符号$, 并且不能以数字开头

<font color='bronze'>注意：变量名称区分大小写</font>

```ts
// age 和 AGE 是两个不同的变量
let age: number = 18
let AGE: number = 18
```

### 变量的命名规范(不是必须遵守，但最好遵守)

- 变量名称最好要有意义，顾名思义
  
  ```ts
  let age: number = 18 // 推荐
  let a: number = 18 // 不推荐
  ```

- 使用驼峰命名法：首字母小写，后面的每个单词首字母大写
  
  ```ts
  let cityName: string = "paris"
  let yourAge: number = 18
  ```

### 数据类型

TS中的数据类型分为两大类：

1. 原始类型(基本数据类型)
   
   常用的基本数据类型有5个：number, string, boolean, undefined, null

2. 对象类型(复杂数据类型)

### 基本数据类型

1. number：包含整数值和浮点型小数值, 也包含正数和负数
   
   ```ts
   // 数字类型：整数
   let age: number = 18
   
   // 数字类型：小数
   let score: number = 99,9
   
   // 正数
   let salary: number = 12000
   
   // 负数
   let benefit: number = -200
   ```

2. string
   
   字符串由零个或多个字符串联而成的，用来表示文本信息
   
   字符串可以使用单引号，也可以使用双引号
   
   ```ts
   let food: string = 'cake'
   ```

3. boolean
   
   只有两个值：true 和 false
   
   ```ts
   let isCoding: boolean = true
   let isSunny: boolean = false 
   ```

4. undefined、null
   
   共同特点：只有一个值，值为类型本身，即：
   
   - undefined 类型的值为undefined
   
   - null 类型的值为null 
   
   不同：
   
   - undefined 表示声明了但还没有赋值的变量值(找不到值，即值就是undefined)
   
   - null 表示声明了变量并已经赋值，值就是null
   
   ```ts
   let u: undefined // u的值是undefined，或理解为找不到变量u的值
   let n: null = null
   ```

### 运算符

运算符也称为操作符，用来实现赋值，算术运算，比较等功能的符号

常用的运算符：

- 算术运算符：用于两个数值之间的计算
  
  加减乘除：`+`, `-`, `*`, `/` 
  
  注意1：`+` 号不仅可以用于加法计算，还能实现字符串拼接
  
  注意2：除了`+` 号以外，其他算术运算符只应该和数字类型一起使用

- 赋值运算符：`=` , `+=`, `-=`, `*=`, `/=`

- 自增/自减运算符: `++` 是`+=1` 的简化形式；`--` 是`-=1`的简化形式
  
  `++` 或 `--` 只能让变量的值增加或减少1

- 比较运算符：`>`, `<`, `>=`, `<=`, `===`, `!==`

- 逻辑运算符: 逻辑与`&&`, 逻辑或`||` , 取反`!`

### 语句

- if语句
  
  ```ts
  let age: number = 18
  if(age < 18){
      console.log('go home')
  }else{
      console.log('go to office')
  }
  ```
- 三元运算符
  
  语法：结果 = 判断条件 ？ 值1 ：值2
  
  如果判断条件为 true, 结果为值1
  
  如果判断条件为 false, 结果为值2
  
  <font color='bronze'>注意：得到结果的类型由值1或值2的类型决定，通常值1 和值2 的类型相同</font>
  
  ```ts
  let result:string = 5 > 3? 'true':'false'
  console.log(result)
  ```
- 循环语句
  
  for(初始化语句；判断条件；计数器更新){  
  
    循环体 
  
  }
  
  ```ts
  let sum: number = 0
  for(let i:number=1; i<=10; i++){
      sum += i
  }
  console.log(sum)
  ```
- break 和 continue
  
  break 和 continue 常用在循环语句中，用来改变循环的执行过程
  
  break 能够让循环提前结束，即终止循环
  
  ```ts
  for(let i:number=1; i<=5; i++){
     if(i ===3){
      break
    }
    console.log('He is holding'+ i + 'apples in hand')
  }
  ```
  
  continue 能够让循环间断执行，即跳过本次循环，继续下一次循环
  
  ```ts
  for(let i:number=1; i<=5; i++){
     if(i ===3){
      continue
    }
    console.log('He is holding'+ i + 'apples in hand')
  }
  ```

### 数组

数组是用于存放多个数据的集合

<font color='bronze'>注意：数组中通常是相同类型的数据</font>

<font color='bronze'/>数组的类型注解由2部分组成：类型 + [ ] </font>

```ts
let names: string[] = ['Tom','Mary', 'Annie']
```

- 创建数组有2种语法形式：
  
  - 语法一(推荐)：
    
    `let names: string[]=[]` // 如果数组中没有内容，就是一个空数组
    
    `let names: string[ ] = ['Tom', 'Mary', 'Annie']`
    
    这里表示字符串类型的数组，因此数组元素只能是字符串类型
    
    `let count: number[] =[1,2,3,4,5]`
    
    这里表示的是number类型的数组，因此数组元素只能是number类型
  
  - 语法二(不推荐)：功能和语法一一样，但是更加繁琐
    
    `let names: string[ ] = new Array()`
    
    ```ts
    let names: string[] = new Array('Tom','Mary','Annie')
    
    相当于：
    
    let names: string[] = ['Tom','Mary', 'Annie']
    ```

- 数组中的元素与索引是一一对应的，通过索引获取到某一个元素的值：
  
  语法：数组名称[索引]
  
  ```ts
  let names: string[] = ['Tom','Mary', 'Annie']
  console.log(names[1]) // Mary
  ```

- 修改或添加数组中的元素：
  
  语法：数组名称[索引] = 新值
  
  如果索引存在，就是修改元素的值
  
  如果索引不存在，就是给数组添加新元素
  
  添加新元素还可以写成：数组名称[数组名称.length] = 新值
  
  ```ts
  let names: string[] = ['Tom','Mary', 'Annie']
  names[0] = 'James' //数组第1个元素的值改为'James'
  names[3] = 'Coco' // 给数组添加了一个新元素，值为'Coco'
  names[names.length] = 'Vincent' // 给数组添加了一个新元素，值为'Vincent'
  ```

- 遍历数组，推荐使用for循环来遍历数组
  
  ```ts
  let nums:number[] = [1,2,3,4,5]
  let sum:number = 0
  
  for(let i:number=0; i < nums.length; i++){
      console.log(nums[i])
      sum += nums[i]
  }
  console.log(sum)
  ```

### 函数

函数就是声明一次，但可以调用任意多次的一段代码，实现代码的复用，提示开发效率

- 函数的使用：
  
  1. 声明函数
  
  2. 调用函数
  
  只有调用函数后，函数中的代码才会执行
  
  ```ts
  function 函数名称（）{ // 声明函数
      函数体
  }
  函数名称() // 调用函数
  ```
  
  ```ts
  function sum(){
      let num1: number = 10
      let num2: number = 20
      let result: number = num1 + num2
      console.log(result)
  }
  sum()
  ```

- 函数参数
  
  函数参数增加了函数的灵活性和通用性，针对相同的功能，能够适应更多的数据(值)
  
  - 形参：声明函数时指定的参数，语法：
    
    <font color='bronze'>形参名称: 类型注解</font>，类似于变量声明但没有赋值，用来指定函数可以接收的数据
    
    可以把形参理解为是函数的变量，在函数体里可以像使用变量一样使用形参
  
  - 实参: 调用函数时传入的参数，它是一个具体的值，用来赋值给形参
  
  ```ts
  function sing(songName:string){ // 形参songName，类型为string
      console.log(songName)
  }
  sing('Happy Hour') // 实参'Happy Hour'
  ```

- 参数说明：
  
  1. 根据具体的功能，函数参数可以有多个，参数之间用逗号来分隔
     
     ```ts
     function fn(name:string, age:number){
         console.log(name, age)
     }
     fn('Tom', 18)
     ```
  
  2. 实参和形参要按照顺序一一对应，否则报错
     
     ```ts
     function fn(name:string, age:number){
         console.log(name, age)
     }
     fn('Tom', 18) // name对应Toom, age 对应18
     fn() // 报错，函数fn要求有2个参数，但是没有传递参数
     fn('Tom') // 报错，函数fn要求有2个参数，但是只传递了一个参数
     fn(18) // 报错，同上
     ```
  
  3. 实参必须符合形参的类型要求，否则报错
     
     ```ts
     function sing(songName:string){ // 形参songName，类型为string
         console.log(songName)
     }
     sing(18) // 报错！形参要求是string类型，但传递的实参是number类型
     ```

- 函数返回值
  
  函数返回值的作用：将函数内部计算的结果返回，以便使用该结果继续参与其他的计算
  
  <font color='bronze'>如果没有指定函数的返回值，那么函数返回值的默认类型是 void (空，什么都没有）</font>
  
  <font color='bronze'/>或者如果函数就是没有返回值，那么默认返回值的类型是 void</font>
  
  当返回值类型是void的时候，void可以省略不写，但最好还是显式的写出来较好
  
  ```ts
  function getSum(nums:number[]):number{ // 返回值的类型是number
      let sum:number = 0
      for(let i:number = 0; i< nums.length; i++){
         sum += nums[i]
   }
   return sum 
  }
  
  getSum([1,2,3])
  ```
  
  - 函数返回值的基本使用，2个步骤：
    
    1. 指定返回值的类型, 语法：在声明函数的小括号的后面通过`:类型注解` 指定
       
       function fn() : <font color='bronze'/>类型注解</font>{
       
          return 返回值
       
        }
       
       ```ts
       function fn():number{ } // 返回值类型是number
       ```
    
    2. 指定返回值：在函数体中，使用关键字 return 来返回函数执行的结果
       
       ```ts
       function fn():number{ // 返回值类型是number
         return 18
       } 
       ```
       
       <font color='bronze'/>注意：返回值必须符合返回值类型的类型要求，否则报错</font>
  
  - 函数返回值的接收：
    
    1. 使用变量接收函数返回值，相当于直接将返回值赋值给变量
       
       ```ts
       let result: 类型注解 = fn()
       
       let result: number = 18
       ```
    
    2. 不需要变量接收返回值，直接使用函数调用的结果(返回值)进行其他计算
       
       ```ts
       function fn():number{ 
         return 18
       } 
       console.log(fn()*10)
       ```
  
  - 关键字 return 的说明
    
    1. 将函数内部的计算结果返回
    
    2. 终止函数代码执行，即 return 后面的代码不会执行
    
    3. 关键字 return 只能在函数中使用，否则会报错
    
    4.  关键字 return 可以单独使用，后面可以没有任何代码内容，用来刻意终止函数的执行


