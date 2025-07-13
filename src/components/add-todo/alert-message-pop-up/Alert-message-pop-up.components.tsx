import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import './Alert-message-pop-up.css';
import { TodoContext } from '../../../context/todo.context';
import { TodoContextType } from '../../../types/todo';

export default function AlertMessagePopUp() {
  const { newTodoText, showErrorPopUp, setErrorPopUp } = useContext(TodoContext) as TodoContextType;
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');
  const timeout = useRef<NodeJS.Timeout | null>(null)

  const defineMessage = useCallback(() => {
    if(newTodoText === '')
      setMessage('Please enter a valid task');
    else
      setMessage('This task already exists')
  }, [newTodoText])

  const displayContent = useCallback(() => {
    setVisible(showErrorPopUp)
     timeout.current = setTimeout(() => {
      setVisible(false);
      setErrorPopUp(false)
    }, 1500);
  }, [setErrorPopUp, showErrorPopUp])

  useEffect(() => {
    defineMessage();
    displayContent();

    return () => {
      if(timeout?.current)
        clearTimeout(timeout.current);
    }
  }, [defineMessage, displayContent])

  return (
    <div className='alert-message-pop-up-container'>
    { visible && <div className='alert-message-pop-up-wrapper'>
      <span>{message}</span>
    </div> }
    </div>
  )
};
