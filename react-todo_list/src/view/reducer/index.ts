import {ITodo} from "../typings";

interface ITypeObj {
  [key: string]: () => ITodo[]
}

const reducerFn = (state: ITodo[], action: { type: string, payload: ITodo | string }) => {
  const {type, payload} = action;

  const typeObj: ITypeObj = {
    'add': () => [...state, payload as ITodo],
    'remove': () => state.filter(todo => todo.id !== payload as string),
    'toggle': () => state.map(todo => {
      return todo.id === (payload as string)
        ? {
          ...todo,
          completed: !todo.completed
        }
        : todo
    }),
    'init': () => [...state, ...payload as unknown as ITodo[]]
  }

  if (typeObj[type]) {
    return typeObj[type]();
  } else {
    throw new Error('unsupported action type');
  }
}

export {
  reducerFn
}
