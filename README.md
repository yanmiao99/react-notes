
### day 代表的含义
1. day1 react 核心基础
2. day2 react hooks


#### React 创建脚手架命令

   ```js
   npx create-react-app <名称>
   ```

#### jsx规则

    1. return 只能返回一个根标签
    2. 根标签可以是 div / section /React.Fragment/ <></> , 其中 React.Fragment 和 <></> 是为了不渲染标签, 类似 vue 的 trmplate
    3. html 属性名使用驼峰命名法
    4. 如果需要使用 class 类名 , 则必须使用 className 代替
    5. 每个标签必须有封闭的 /

#### react Hooks 
      1. hooks 主要针对`无状态组件`
      2. 无状态组件是 函数
      3. 有状态组件是 类
