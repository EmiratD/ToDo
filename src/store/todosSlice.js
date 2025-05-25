import { createSlice } from '@reduxjs/toolkit';

// Пытаемся загрузить из localStorage
const loadFromLocalStorage = () => {
  const saved = localStorage.getItem('todos');
  return saved
    ? JSON.parse(saved)
    : [{ id: 0, todo: 'create new todo', status: true }];
};

const initialState = {
  todos: loadFromLocalStorage(),
};

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    toggleShow: (state, action) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) todo.show = !todo.show;
    },
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
  },
});

export const { addTodo, toggleShow, setTodos } = todosSlice.actions;
export default todosSlice.reducer;
