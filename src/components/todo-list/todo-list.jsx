import style from './todo-list.module.css';
import TodoListItem from '../todo-list-item/todo-list-item';

function TodoList() {
  const todos = [
    { id: 0, todo: 'Купить продукты', status: true },
    { id: 1, todo: 'Позвонить маме', status: true },
    { id: 2, todo: 'Сделать домашку по React', status: true },
    { id: 3, todo: 'Прочитать главу из книги', status: true },
    { id: 4, todo: 'Пройтись на улице', status: true },
  ];
  return (
    <ul className={style.todoList}>
      {todos.map((item) => {
        return (
          <TodoListItem
            id={item.id}
            todo={item.todo}
            status={item.status}
            key={item.id}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
