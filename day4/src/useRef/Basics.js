import {useRef, useEffect} from "react";

const Basics = () => {
    // useRef 和 vue 的 ref 一样, 都是获取 DOM 节点的
    const refInput = useRef(null)
    const refText = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(refInput.current.value);
        console.log(refText.current.innerText);
    }
    useEffect(() => {
        // 进入页面, 选中input框
        refInput.current.focus()
        console.log('如果没有使用 useState 更新数据, 把么我只会打印一次');
    })

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" ref={refInput}/>
                <p ref={refText}>我是展示出来的文字</p>
            </div>
            <button type='submit'>提交</button>
        </form>
    )
}
export default Basics
