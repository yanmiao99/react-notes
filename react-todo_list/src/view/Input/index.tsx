import React, {FC, ReactElement, useRef, KeyboardEvent} from "react"
import {ITodo} from "../typings"
import "./index.css"

interface IProps {
  addTodo: (todo: ITodo) => void;
  todoList: ITodo[];
}

const Input: FC<IProps> = ({addTodo, todoList}): ReactElement => {
  const inputRef = useRef<HTMLInputElement>(null)
  const handleAdd = (): void => {
    const value = inputRef.current?.value.trim()
    if (value && value.length) {
      const isExist = todoList.find(todo => todo.content === value)
      if (isExist) return alert("该任务已经存在")
      addTodo({
        id: crypto.randomUUID(),
        content: value,
        completed: false
      })
      inputRef.current!.value = ""
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      handleAdd()
    }
  }

  return (
    <div className='box'>
      <input
        type="text"
        ref={inputRef}
        placeholder={'请输入任务名称，按回车键确认'}
        onKeyDown={(e) => handleKeyDown(e)}/>
      <button onClick={handleAdd}>添加</button>
    </div>
  )
}

export default Input
