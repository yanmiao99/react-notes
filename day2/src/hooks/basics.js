import React, {useState} from 'react';

function Basics() {
    const [text, setText] = useState('hello react Hooks')
    const handleChangeText = () => {
        /*
        * 注意点 :
        * 1. 如果需要使用 hooks , 那么要注意不要在循环和条件判断中使用 hooks , 因为调用use函数需要保证顺序一致
        * 2. 如果使用 Hooks 那么组件必须是大写字母开头, 例如Basics, 不能是 basics
        * */
        setText('hello oooooo')

        // 不能这么写
        // if (text === 'hello react Hooks'){
        //     setText('hello oooooo')
        // }else{
        //     setText('hello react Hooks')
        // }
    }

    return (
        <div className="App">
            <p>{text}</p>

            {/*
            如果 onClick 事件注意点 :
            如果需要传参  : () => handleClick(props)
            如果无需传参  : handleClick

            */}

            <button onClick={handleChangeText}>change text</button>
        </div>
    )
}

export default Basics;
