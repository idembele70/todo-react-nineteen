import { createContext, ReactNode, useState } from "react";
import { Status, TodoContextType, Todo } from "../types/todo";

export const TodoContext = createContext<TodoContextType | null>(null);

export default function TodoProvider({children}: {children: ReactNode}) {
  const [todos, setTodos] =  useState<Todo[]>([{
    id: 1,
    createdAt: Date.now(),
    status: Status.PENDING,
    text: 'Hello World!'
  }]);

  const saveTodo = (todo: Todo) => {
    setTodos(todos => [...todos, todo]);
  };

  const [text, setText] = useState('');
  const setNewTodoText = (text: string) => {
    setText(text);
  }
  const [showErrorPopUp, setErrorPopUpVisible] = useState(false)

  const setErrorPopUp = (visible:boolean) => {
    setErrorPopUpVisible(visible)
  }

  return (
    <TodoContext.Provider value={{todos, saveTodo, newTodoText: text, setNewTodoText, showErrorPopUp, setErrorPopUp}}>
      {children}
    </TodoContext.Provider>
  )
};