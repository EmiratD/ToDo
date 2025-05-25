import { useEffect, useState } from 'react';
import style from './todo-list.module.css';
import TodoListItem from '../todo-list-item/todo-list-item';

function TodoList() {
  const [todos, setTodos] = useState([]);

  // Загрузка из localStorage при монтировании
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(storedTodos);
  }, []);

  // Обновление localStorage при изменении todos
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Функция для обновления текста задачи
  const updateTodoText = (id, newText) => {
    const updated = todos.map((todo) =>
      todo.id === id ? { ...todo, todo: newText } : todo,
    );
    setTodos(updated);
  };

  // Функция для переключения статуса задачи
  const toggleTodoStatus = (id) => {
    const updated = todos.map((todo) =>
      todo.id === id ? { ...todo, status: !todo.status } : todo,
    );
    setTodos(updated);
  };

  return (
    <ul className={style.todoList}>
      {todos.map((item) => (
        <TodoListItem
          key={item.id}
          id={item.id}
          todo={item.todo}
          status={item.status}
          updateTodoText={updateTodoText}
          toggleTodoStatus={toggleTodoStatus}
        />
      ))}
    </ul>
  );
}

export default TodoList;
