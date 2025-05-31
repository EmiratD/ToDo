import { createSlice } from '@reduxjs/toolkit';

// Начальное состояние фильтра
const initialState = {
  filter: 'all', // допустимые значения: 'all', 'done', 'not_done'
};

const filterSlice = createSlice({
  name: 'todosFilter',
  initialState,
  reducers: {
    // Обновление фильтра через switch-case
    setFilter: (state, action) => {
      switch (action.payload) {
        case 'all':
        case 'done':
        case 'not_done':
          state.filter = action.payload;
          break;
        default:
          state.filter = 'all'; // fallback на безопасное значение
      }
    },
  },
});

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
