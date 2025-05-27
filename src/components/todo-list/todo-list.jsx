import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import style from './todo-list.module.css';
import TodoListItem from '../todo-list-item/todo-list-item';
import {
  updateTodoText as updateReduxText,
  toggleTodoStatus as toggleReduxStatus,
} from '../../store/todosSlice';

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  // Сохраняем Redux-состояние в localStorage при изменении
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const updateTodoText = (id, newText) => {
    dispatch(updateReduxText({ id, newText }));
  };

  const toggleTodoStatus = (id) => {
    dispatch(toggleReduxStatus(id));
  };

  return (
    <ul className={style.todoList}>
      {todos.map((item) => (
        <TodoListItem
          key={item.id}
          id={item.id}
          todo={item.todo}
          status={item.show}
          updateTodoText={updateTodoText}
          toggleTodoStatus={toggleTodoStatus}
        />
      ))}
    </ul>
  );
}

export default TodoList;
