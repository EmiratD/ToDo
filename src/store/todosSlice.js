import { createSlice } from '@reduxjs/toolkit';

const getInitialTodos = () => {
  const stored = localStorage.getItem('todos');
  return stored
    ? JSON.parse(stored)
    : [
        { id: 0, todo: 'Buy groceries', status: false },
        { id: 1, todo: 'Call mom', status: false },
        { id: 2, todo: 'Do React homework', status: false },
        { id: 3, todo: 'Read a chapter from a book', status: false },
        { id: 4, todo: 'Go for a walk', status: false },
      ];
};

const todosSlice = createSlice({
  name: 'todos',
  initialState: getInitialTodos(),
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
