import React, {FC, ReactElement, useCallback, useEffect, useReducer} from 'react';
import Input from "./view/Input";
import List from "./view/List";
import {ITodo} from "./view/typings";
import {reducerFn} from "./view/reducer";
import "./TodoList.css"

// 创建惰性初始化的状态
const init = (initTodoList: ITodo[]) => {
  return initTodoList
}
const TodoList: FC = (): ReactElement => {
  // const [todoList, setTodoList] = useState<ITodo[]>([]);

  // 使用 useReducer 改造 useStatus
  const [todoList, dispatch] = useReducer(reducerFn, [], init);

  useEffect(() => {
    // 读取本地数据 , 实现数据持久化
    const todoList = JSON.parse(localStorage.getItem('todoList') || '[]');
    dispatch({type: 'init', payload: todoList})
  }, []);

  useEffect(() => {
    // 设置本地数据 , 实现数据持久化
    localStorage.setItem('todoList', JSON.stringify(todoList))
  }, [todoList]);

  // 注意点 : 如果子组件的函数是使用的父组件的状态，那么这个函数就需要使用useCallback包裹
  // 使用 useCallback 可以避免在每次渲染时重新创建 addTodo 函数，提高性能。当子组件依赖于父组件传递的函数时，如果父组件使用 useCallback 来定义这个函数，子组件就可以在依赖项列表中将它作为依赖项传递，这样可以确保在父组件重新渲染时不会导致子组件不必要的重新渲染。
  const addTodo = useCallback((todo: ITodo): void => {
    // 在 React 中，useState 钩子的 setState 方法是异步的，如果直接使用 [...todoList, todo1] 的方式更新 state，那么可能会出现新的 todo1 未被添加到 state 中的情况。通过使用传递函数的方式更新 todoList，React 会将当前的 state 作为参数传递给这个函数，从而确保更新的是最新的 state，而不是基于旧的 state 进行更新。这样可以有效避免因为异步导致更新过程出现问题的情况。因此，建议在setTodoList中使用返回函数来更新state。
    // setTodoList(todoList => [...todoList, todo1])
    dispatch({type: 'add', payload: todo})
  }, [])

  const removeTodo = useCallback((id: string): void => {
    dispatch({type: 'remove', payload: id})
  }, [])

  const toggleTodo = useCallback((id: string): void => {
    dispatch({type: 'toggle', payload: id})
  }, [])

  return (
    <div className='todoList'>
      <Input todoList={todoList} addTodo={addTodo}/>
      <List todoList={todoList} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
    </div>
  );
}

export default TodoList;
