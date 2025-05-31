import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todosSlice';
import filterReducer from './filterSlice';
import themeReducer from './themeSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer, // Глобальное состояние массива задачь, и функции для редактирования задач
    todosFilter: filterReducer, // Глобальное состяние какой из типов задач отображать
    theme: themeReducer, // Глобальное состояние темы
  },
});
