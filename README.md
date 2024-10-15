## TypeScript (TS)

TypeScript = Type + JavaScript 

TS 是微软开发的开源编程语言，它为JS添加了类型系统，其目标是开发大型应用，可以在任何浏览器，任何计算机，任何操作系统上运行.

#### 安装解析TS的工具包

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


