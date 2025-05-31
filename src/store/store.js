import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './slices/todosSlice';
import filterReducer from './slices/filterSlice';
import themeReducer from './slices/themeSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer, // Глобальное состояние массива задачь, и функции для редактирования задач
    todosFilter: filterReducer, // Глобальное состяние какой из типов задач отображать
    theme: themeReducer, // Глобальное состояние темы
  },
});
