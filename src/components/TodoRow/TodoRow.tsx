import { useEffect, useRef, useState } from "react";
import { ScaleButton, Status, Todo } from "../../types/todo";
import { clearTimeoutRef, clsx, SCALE_ANIMATION_DURATION } from "../../utilities/todoUtilities";
import './TodoRow.css';

export default function TodoRow({todo}: {readonly todo: Todo}) {
  const timeout = useRef<NodeJS.Timeout | null>(null)
  const [scaleButton, setScaleButton] = useState<ScaleButton>({
    edit: false,
    complete: false,
    delete: false,
  });

  const dateString = new Date(todo.createdAt).toLocaleDateString('fr-FR', {dateStyle: 'short'});

  const handleScale = (key: keyof ScaleButton) => {
    if(scaleButton[key] === true) return;
    setScaleButton(prev => ({...prev, [key]: true }))
   timeout.current = setTimeout(() => {
      setScaleButton(prev => ({...prev, [key]: false}))
    }, SCALE_ANIMATION_DURATION);
  }

  useEffect(() => {
    return () => {
      clearTimeoutRef(timeout);
    }
  }, [])

  return (
      <tr className="todo-row">
        <td>{todo.text}</td>
        <td>{dateString}</td>
        <td className="status">{todo.status === Status.COMPLETED ? 'Completed' : 'Pending'}</td>
        <td>
          <button className={clsx(["edit", scaleButton.edit && 'scale'])} type="button" onClick={() => handleScale('edit')}>
            <i className="fa fa-pencil" />
          </button>
          <button className={clsx(["complete", scaleButton.complete && 'scale'])} type="button" onClick={() => handleScale('complete')}>
            <i className="fa fa-check" />
          </button>
          <button className={clsx(["delete", scaleButton.delete && 'scale'])} type="button" onClick={() => handleScale('delete')}>
            <i className="fa fa-trash"></i>
          </button>
        </td>
      </tr>
  )
};
