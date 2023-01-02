import {useEffect, useState} from "react";

const Basics = () => {

    /*
    * 注意点 :
    * useEffect 默认是每次渲染的时候都会执行
    * */

    useEffect(() => {
        checkSize()
        window.addEventListener('resize', checkSize)

        // 在 return 方法中可以清理useEffect执行
        return () => {
            window.removeEventListener('resize', checkSize)
        };
    }, []); // 每次渲染的时候都会执行一次 , 如果就想初始化执行, 则在第二个参数中写 []

    const [size, setSize] = useState(0);
    const checkSize = () => {
        setSize(window.innerWidth)
    }

    return (
        <div>
            当前屏幕宽度为 : {size} px
        </div>
    )
}

export default Basics
