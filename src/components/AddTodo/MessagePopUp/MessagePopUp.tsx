import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { TodoContext } from '../../../context/todoContext';
import { TodoContextType } from '../../../types/todo';
import { clearTimeoutRef, MESSAGE_POPUP_DURATION } from '../../../utilities/todoUtilities';
import './MessagePopUp.css';

export default function AlertMessagePopUp() {
  const { newTodoText, messagePopUpVisible, setMessagePopUpVisible } = useContext(TodoContext) as TodoContextType;
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
    setVisible(messagePopUpVisible)
     timeout.current = setTimeout(() => {
      setVisible(false);
      setMessagePopUpVisible(false)
    }, MESSAGE_POPUP_DURATION);
  }, [setMessagePopUpVisible, messagePopUpVisible])

  useEffect(() => {
    defineMessage();
    displayContent();

    return () => {
     clearTimeoutRef(timeout);
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
