import { createContext, ReactNode, useState } from "react";
import { Todo, TodoContextType } from "../types/todo";

export const TodoContext = createContext<TodoContextType | null>(null);

export default function TodoProvider({children}: {readonly children: ReactNode}) {
  const [todos, setTodos] =  useState<Todo[]>([]);
  const [messagePopUpVisible, setMessagePopUpVisible] = useState(false)
  const [text, setText] = useState('');

  const saveTodo = (todo: Todo) => {
    setTodos(todos => [...todos, todo]);
  };

  const setNewTodoText = (text: string) => {
    setText(text);
  }

  return (
    <TodoContext.Provider value={{todos, saveTodo, newTodoText: text, setNewTodoText, messagePopUpVisible, setMessagePopUpVisible}}>
      {children}
    </TodoContext.Provider>
  )
};