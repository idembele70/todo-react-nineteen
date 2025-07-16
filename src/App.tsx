import './App.css';
import AddTodo from './components/add-todo/Add-todo.components';
import Container from './components/container/Container';
import TodoList from './components/todo-list/Todo-list';
import TodoProvider from './context/todo.context';

function App() {
  return (
    <TodoProvider>
      <Container>
      <AddTodo />
      <TodoList />
      </Container>
    </TodoProvider>
  );
}

export default App;
