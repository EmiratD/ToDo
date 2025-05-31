import { createSlice, createSelector } from '@reduxjs/toolkit';

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

// Начальное состояние
const initialState = {
  todos: getInitialTodos(),
  filter: 'all', // 'all' | 'complete' | 'incomplete'
  searchQuery: '',
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // Обновление текста задачи
    updateTodoText: (state, action) => {
      const { id, newText } = action.payload;
      const todo = state.todos.find((t) => t.id === id);
      if (todo) {
        todo.todo = newText;
      }
    },

    // Добавление новой задачи
    addTodo: (state, action) => {
      const newId =
        state.todos.length > 0 ? state.todos[state.todos.length - 1].id + 1 : 0;
      state.todos.push({
        id: newId,
        todo: action.payload,
        status: true,
        show: true,
      });
    },

    // Удаление задачи
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
    },

    // Переключение статуса задачи
    toggleTodoStatus: (state, action) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) {
        todo.status = !todo.status;
      }
    },

    // Установка фильтра
    setFilter: (state, action) => {
      state.filter = action.payload;
    },

    // Обновление строки поиска
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload.toLowerCase();
    },
  },
});

export const {
  updateTodoText,
  addTodo,
  deleteTodo,
  toggleTodoStatus,
  setFilter,
  setSearchQuery,
} = todosSlice.actions;

export default todosSlice.reducer;

// Простые селекторы
const selectTodos = (state) => state.todos.todos;
const selectFilter = (state) => state.todos.filter;
const selectSearchQuery = (state) => state.todos.searchQuery;

// Мемоизированный селектор отфильтрованных и отфильтрованных по поиску задач
export const selectFilteredTodos = createSelector(
  [selectTodos, selectFilter, selectSearchQuery],
  (todos, filter, searchQuery) => {
    return todos.filter((todo) => {
      const matchesSearch = todo.todo.toLowerCase().includes(searchQuery);
      let matchesFilter = true;

      switch (filter) {
        case 'complete':
          matchesFilter = todo.status === false;
          break;
        case 'incomplete':
          matchesFilter = todo.status === true;
          break;
        case 'all':
        default:
          matchesFilter = true;
          break;
      }

      return matchesSearch && matchesFilter;
    });
  },
);
