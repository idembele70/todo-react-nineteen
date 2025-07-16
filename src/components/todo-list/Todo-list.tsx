import { useContext } from 'react'
import './Todo-list.css'
import { TodoContext } from '../../context/todo.context'
import { TodoContextType } from '../../types/todo';
import TodoRow from '../todo-row/Todo-row';

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
