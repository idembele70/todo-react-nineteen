import './App.css';
import AddTodo from './components/add-todo/Add-todo.components';
import TodoProvider from './context/todo.context';

function App() {
  return (
    <TodoProvider>
      <AddTodo />
    </TodoProvider>
  );
}

export default App;
