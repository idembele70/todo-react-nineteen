import { ChangeEvent, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { TodoContext } from '../../../context/todoContext';
import { Status, TodoContextType } from '../../../types/todo';
import { clearTimeoutRef, clsx, SCALE_ANIMATION_DURATION } from '../../../utilities/todoUtilities';
import './AddTodoForm.css';

export default function AddTodoForm() {
  const timeout = useRef<NodeJS.Timeout | null>(null)
  const {todos, saveTodo, setNewTodoText, setMessagePopUpVisible, messagePopUpVisible} = useContext(TodoContext) as TodoContextType;
  const [text, setText] = useState('');
  const [scaleDown, setScaleDown] = useState(false);

  const handleAddTodo = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNewTodoText(text);

    const hasDuplicate = todos.findIndex(todo => todo.text === text);

    if(text === '' || hasDuplicate !== -1) {
      setMessagePopUpVisible(true)
      return;
    }
      saveTodo({
        id: todos.length + 1,
        createdAt: Date.now(),
        status: Status.PENDING,
        text
      });
      setText('');
  }, [saveTodo, setNewTodoText, text, todos, setMessagePopUpVisible])

  const handleScaleDown = () => {
    setScaleDown(true)
    timeout.current = setTimeout(() => {
      setScaleDown(false)
    }, SCALE_ANIMATION_DURATION);
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  }

  useEffect(() => {
    return () => {
      clearTimeoutRef(timeout);
    }
  }, [])

  return (
    <form className='add-todo-form' onSubmit={(e)=>handleAddTodo(e)}>
      <input type="text" placeholder="✍️ Add item..." id='add-todo-input' value={text} onChange={(e) => handleChange(e)} />
      <button className={clsx(['add-todo-btn', messagePopUpVisible && 'disable', scaleDown && 'scale'])} type="submit" onClick={handleScaleDown} disabled={messagePopUpVisible}>+</button>
    </form>
  )
};
