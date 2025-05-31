import './App.css';

import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import Header from '../components/header/Header';
import TodoList from '../components/todo-list/todo-list';
import { AddTodoButton } from '../components/add-todo-button/add-todo-button';

function App() {
  const isDark = useSelector((state) => state.theme.isDark);

  useEffect(() => {
    document.body.className = isDark ? 'dark-theme' : 'light-theme';
  }, [isDark]);

  return (
    <div className="wrapper">
      <Header />
      <TodoList />
      <AddTodoButton />
    </div>
  );
}

export default App;
