import { useContext } from 'react'
import './TodoList.css'
import { TodoContext } from '../../context/todoContext'
import { TodoContextType } from '../../types/todo';
import TodoRow from '../TodoRow/TodoRow';

export default function TodoList() {
  const { todos } = useContext(TodoContext) as TodoContextType;
  return (
    <table>
      <thead>
        <tr>
          <th>Task</th>
          <th>Creation date</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
    {
      todos.length ?
      todos.map(
        todo => <TodoRow key={todo.id} todo={todo}/>
      ) :
      <tr>
        <td className='no-task' colSpan={4}>No task found</td>
      </tr>
    }
      </tbody>
    </table>
  )
};
