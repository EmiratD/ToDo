import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  updateTodoText,
  toggleTodoStatus,
  deleteTodo,
  selectFilteredTodos,
} from '../../store/slices/todosSlice';

import style from './todo-list.module.css';
import TodoListItem from '../todo-list-item/todo-list-item';

import DetectiveSVG from '../../assets/svg-component/Detective-svg';

function TodoList() {
  const todos = useSelector(selectFilteredTodos);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <ul className={style.todoList}>
      {todos.map((item) => (
        <TodoListItem
          key={item.id}
          id={item.id}
          todo={item.todo}
          status={item.status}
          updateTodoText={(id, text) =>
            dispatch(updateTodoText({ id, newText: text }))
          }
          toggleTodoStatus={(id) => dispatch(toggleTodoStatus(id))}
          deleteTodo={(id) => dispatch(deleteTodo(id))}
        />
      ))}
      {!todos.length && (
        <div className={style.wrapper}>
          <DetectiveSVG />
          <span>Empty...</span>
        </div>
      )}
    </ul>
  );
}

export default TodoList;
