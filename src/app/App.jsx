import './App.css';

import Header from '../components/header/Header';
import TodoList from '../components/todo-list/todo-list';
import AddTodoButton from '../components/add-todo-button/add-todo-button';

function App() {
  return (
    <>
      <Header />
      <TodoList />
      <AddTodoButton />
    </>
  );
}

export default App;
