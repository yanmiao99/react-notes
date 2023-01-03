import React, {useState, createContext, useContext} from "react";

// 创建上下文 (两种不同的写法)
const CountContext = createContext();
// const CountContext = React.createContext();

// countContext 里面就有 Provider, Consumer
// const {Provider, Consumer} = createContext(默认值,可不传)

const Example = () => {

    // 参考文章
    // https://www.jianshu.com/p/cc91178724d5
    /*
    在Hooks出来之前，开发者都是使用的class组件，通过props传值。现在使用方法组件（Function）开发了，没有constructor构造函数也就没有了props的接收，所以父子组件的传值就成了一个问题。
       React Hooks就为我们准备了useContext来解决这个问题
     */

    // console.log(Provider);
    // console.log(Consumer);


    const [count, setCount] = useState(0);
    return (
        <div>
            <p>父组件点击数量：{count}</p>
            <button
                onClick={() => setCount(count + 1)}>
                {"点击+1"}
            </button>
            {/*
                使用 CountContext 包裹就能传递值
                value 就是传值
                如果需要传递对象, 则需要 value = {{obj}} 的方式 ,因为 第一层 {} 是 jsx 的语法
                可以传值, 可以传方法
            */}
            <CountContext.Provider value={{count, setCount}}>
                <CounterTwo/>
            </CountContext.Provider>
        </div>
    );
};

const CounterTwo = () => {
    return <CounterThree></CounterThree>
};

const CounterThree = () => {
    const {count, setCount} = useContext(CountContext)

    return (
        <>
            <p>三级组件获取到的点击数量 : {count}</p>
            <button onClick={() => setCount(0)}>复位</button>
        </>
    )
}


export default Example;
