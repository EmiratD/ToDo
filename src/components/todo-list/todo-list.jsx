import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import style from './todo-list.module.css';
import TodoListItem from '../todo-list-item/todo-list-item';

import {
  updateTodoText as updateReduxText,
  toggleTodoStatus as toggleReduxStatus,
  deleteTodo as deleteReduxTodo,
} from '../../store/todosSlice';

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // Сохраняем изменения в localStorage при каждом обновлении задач
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Функция: обновление текста задачи
  const updateTodoText = (id, newText) => {
    dispatch(updateReduxText({ id, newText }));
  };

  // Функция: переключение состояния задачи
  const toggleTodoStatus = (id) => {
    dispatch(toggleReduxStatus(id));
  };

  // Функция: удаление задачи
  const deleteTodo = (id) => {
    dispatch(deleteReduxTodo(id));
  };

  return (
    <div>
      {/* Список задач */}
      <ul className={style.todoList}>
        {todos.map((item) => (
          <TodoListItem
            key={item.id}
            id={item.id}
            todo={item.todo}
            status={item.show}
            updateTodoText={updateTodoText}
            toggleTodoStatus={toggleTodoStatus}
            deleteTodo={deleteTodo} // передаём в item
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
