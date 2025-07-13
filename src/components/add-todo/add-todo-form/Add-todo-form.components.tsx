import { useContext, useState } from 'react';
import { TodoContext } from '../../../context/todo.context';
import { Status, TodoContextType } from '../../../types/todo';
import './Add-todo-form.css';

export default function AddTodoForm() {

  const {todos, saveTodo, setNewTodoText, setErrorPopUp, showErrorPopUp} = useContext(TodoContext) as TodoContextType;
  const [text, setText] = useState('');

  const addTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNewTodoText(text);

    const hasDuplicate = todos.findIndex(todo => todo.text === text);

    if(text === '' || hasDuplicate !== -1) {
      setErrorPopUp(true)
      return;
    } else {
      saveTodo({
        id: todos.length + 1,
        createdAt: Date.now(),
        status: Status.PENDING,
        text
      });
      setText('');
    }
  }

  return (
    <form className='add-todo-form'onSubmit={(e)=>addTodo(e)}>
      <input type="text" placeholder="✍️ Add item..." className='add-todo-input' value={text} onChange={(e) => setText(e.target.value)} />
      <button className={`add-todo-btn${showErrorPopUp ? ' disable' : ''}`} type="submit" disabled={showErrorPopUp}>+</button>
    </form>
  )
};
