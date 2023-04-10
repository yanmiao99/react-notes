import React, {FC, ReactElement, ChangeEvent, useReducer} from "react"
import {ITodo} from "../typings";
import "./Item.css"

interface IProps {
  todo: ITodo;
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
}

// @ts-ignore
const Item: FC<IProps> = ({todo, toggleTodo, removeTodo}): ReactElement => {
  const {id, content, completed} = todo;
  return (
    <div className="item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodo(id)}/>
      <span
        style={{textDecoration: completed ? "line-through" : "none"}}>
        {content}
      </span>
      <button onClick={() => removeTodo(id)}>删除</button>
    </div>
  )
}

export default Item
