import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { TodoContext } from '../../../context/todo.context';
import { Status, TodoContextType } from '../../../types/todo';
import { clsx, SCALE_ANIMATION_DURATION } from '../../../utilities/todo.utilities';
import './Add-todo-form.css';

export default function AddTodoForm() {
  const timeout = useRef<NodeJS.Timeout | null>(null)
  const {todos, saveTodo, setNewTodoText, setErrorPopUp, showErrorPopUp} = useContext(TodoContext) as TodoContextType;
  const [text, setText] = useState('');
  const [scaleDown, setScaleDown] = useState(false);

  const handleAddTodo = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNewTodoText(text);

    const hasDuplicate = todos.findIndex(todo => todo.text === text);

    if(text === '' || hasDuplicate !== -1) {
      setErrorPopUp(true)
      return;
    }
      saveTodo({
        id: todos.length + 1,
        createdAt: Date.now(),
        status: Status.PENDING,
        text
      });
      setText('');
  }, [saveTodo, setErrorPopUp, setNewTodoText, text, todos])

  const handleScaleDown = () => {
    setScaleDown(true)
    timeout.current = setTimeout(() => {
      setScaleDown(false)
    }, SCALE_ANIMATION_DURATION);
  }

  useEffect(() => {
    return () => {
      if(timeout.current)
        clearTimeout(timeout.current);
    }
  }, [])

  return (
    <form className='add-todo-form'onSubmit={(e)=>handleAddTodo(e)}>
      <input type="text" placeholder="✍️ Add item..." className='add-todo-input' value={text} onChange={(e) => setText(e.target.value)} />
      <button className={clsx(['add-todo-btn', showErrorPopUp && 'disable', scaleDown && 'scale'])} type="submit" onClick={handleScaleDown} disabled={showErrorPopUp}>+</button>
    </form>
  )
};
