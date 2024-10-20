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
  let cityName: boolean = "paris"
  let yourAge: number = 18
  ```

### 
