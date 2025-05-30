import { createSlice } from '@reduxjs/toolkit';

// Получение данных из localStorage или установка дефолтных
const getInitialTodos = () => {
  const stored = localStorage.getItem('todos');
  return stored
    ? JSON.parse(stored)
    : [
        { id: 0, todo: 'Buy groceries', status: true, show: false },
        { id: 1, todo: 'Call mom', status: true, show: true },
        { id: 2, todo: 'Do React homework', status: true, show: true },
        {
          id: 3,
          todo: 'Read a chapter from a book',
          status: true,
          show: false,
        },
        { id: 4, todo: 'Go for a walk', status: true },
      ];
};

// Создаём срез Redux
const todosSlice = createSlice({
  name: 'todos',
  initialState: getInitialTodos(),
  reducers: {
    // Переключаем статус видимости задачи
    toggleTodoStatus: (state, action) => {
      const todo = state.find((t) => t.id === action.payload);
      if (todo) {
        todo.show = !todo.show;
      }
    },

    // Обновляем текст задачи
    updateTodoText: (state, action) => {
      const { id, newText } = action.payload;
      const todo = state.find((t) => t.id === id);
      if (todo) {
        todo.todo = newText;
      }
    },

    // Удаляем задачу по ID
    deleteTodo: (state, action) => {
      return state.filter((t) => t.id !== action.payload);
    },

    // Добавляем новую задачу
    addTodo: (state, action) => {
      const newId = state.length > 0 ? state[state.length - 1].id + 1 : 0;
      state.push({ id: newId, todo: action.payload, show: true });
    },
  },
});

// Экспортируем действия и редьюсер
export const { toggleTodoStatus, updateTodoText, deleteTodo, addTodo } =
  todosSlice.actions;
export default todosSlice.reducer;
