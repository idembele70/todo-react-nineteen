import './App.css';
import AddTodo from './components/AddTodo/AddTodo';
import Container from './components/container/Container';
import TodoList from './components/TodoList/TodoList';
import TodoProvider from './context/todoContext';

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
