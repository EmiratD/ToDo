// redux/themeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialTheme = JSON.parse(localStorage.getItem('theme'))?.bool === 'true';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    isDark: initialTheme,
  },
  reducers: {
    toggleTheme: (state) => {
      state.isDark = !state.isDark;
      localStorage.setItem(
        'theme',
        JSON.stringify({ bool: String(state.isDark) }),
      );
    },
    setTheme: (state, action) => {
      state.isDark = action.payload;
      localStorage.setItem(
        'theme',
        JSON.stringify({ bool: String(action.payload) }),
      );
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
