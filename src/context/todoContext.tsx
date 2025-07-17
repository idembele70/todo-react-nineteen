import { createContext, ReactNode, useState } from "react";
import { Todo, TodoContextType } from "../types/todo";

export const TodoContext = createContext<TodoContextType | null>(null);

export default function TodoProvider({children}: {readonly children: ReactNode}) {
  const [todos, setTodos] =  useState<Todo[]>([]);

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