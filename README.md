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


