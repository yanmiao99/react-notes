import React, {useReducer, useState} from "react"
import Modal from "./modal";

let data = [
    {name: '张三'},
    {name: '李四'},
    {name: '王五'},
    {name: '赵六'}
]

const reducer = (state, action) => {

    // 如果调用了 reducer 方法, 则一定要 return 返回内容, 否则会报错

    switch (action.type) {
        // case 'changeTitle':
        //     return {...state, modalContent: '改变了'}
        case 'addName' :
            return {
                people: [...state.people, {name: action.payload}],
                modalContent: '添加成功',
                isModalOpen: true,
            }
        case 'closeModal' :
            return {
                ...state,
                isModalOpen: false,
            }
        default:
            // 如果派发的方法不存在, 则直接返回当前内容, 或者给报错
            throw new Error('没有派发类型');
        // return state
    }
};

const defaultState = {
    people: data,
    isModalOpen: false,
    modalContent: 'Hello world'
}

const Reducer = () => {

    // 参考文章
    // https://blog.csdn.net/Jas3000/article/details/124168218

    // const [showModal, setShowModal] = useState(true);
    // const [people, setPeople] = useState(data);
    const [name, setName] = useState('');

    // useReducer 是 useState 的替代方案。它接收一个形如 (state, action) => newState 的 reducer，并返回当前的 state 以及与其配套的 dispatch 方法。

    // useReducer(处理的方法, 初始的状态, init)
    const [state, dispatch] = useReducer(reducer, defaultState);

    const handleSubmit = (e) => {
        e.preventDefault()
        // setPeople([...people, {name}])
        // setName('')

        if (name) {
            // 调用派发的一个方法 , 传递一个类型
            // dispatch({type: 'changeTitle'})

            // 传参使用 payload
            dispatch({type: 'addName', payload: name})
            setName('')

            setTimeout(() => {
                closeModal()
            }, 1000)
        }
    }

    const closeModal = () => {
        dispatch({type: 'closeModal'})
    }

    return (
        <>
            {state.isModalOpen &&
                <Modal modalContent={state.modalContent}/>}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    placeholder='请输入用户名'
                    onChange={e => setName(e.target.value)}
                />
                <button type='submit'>提交</button>
            </form>

            <div>
                {
                    state.people && state.people.length > 0
                        ?
                        state.people.map((item, index) => {
                            return (<p key={index}>
                                用户 : {item.name}
                            </p>)
                        })
                        : <p>暂无数据</p>
                }
            </div>
        </>
    )
}
export default Reducer
