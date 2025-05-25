import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 0, todo: 'Сделать домашку', show: true },
  { id: 1, todo: 'Прочитать книгу', show: true },
  { id: 2, todo: 'Купить молоко', show: true },
  { id: 3, todo: 'Убраться', show: true },
  { id: 4, todo: 'Выгулять собаку', show: true },
];

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    toggleTodoStatus: (state, action) => {
      const todo = state.find((t) => t.id === action.payload);
      if (todo) todo.show = !todo.show;
    },
    updateTodoText: (state, action) => {
      const { id, newText } = action.payload;
      const todo = state.find((t) => t.id === id);
      if (todo) todo.todo = newText;
    },
  },
});

export const { toggleTodoStatus, updateTodoText } = todosSlice.actions;

export default todosSlice.reducer;
