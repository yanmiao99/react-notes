import React, {FC, ReactElement} from "react"
import Item from "./Item"
import {ITodo} from "../typings";

interface IProps {
  todoList: ITodo[];
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
}

const List: FC<IProps> = ({todoList, toggleTodo, removeTodo}): ReactElement => {
  return (
    <div className="list">
      {
        todoList && todoList.map((todo: ITodo) => {
          return (
            <Item
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
            />
          )
        })
      }
    </div>
  )
}

export default List
