import style from './theme-button.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../../store/themeSlice';
import Moon from '../../assets/svg/moon.svg';
import Sun from '../../assets/svg/Sun.svg';

function ThemeButton() {
  const isDark = useSelector((state) => state.theme.isDark);
  const dispatch = useDispatch();

  return (
    <button className={style.theme} onClick={() => dispatch(toggleTheme())}>
      <img src={isDark ? Sun : Moon} alt="theme" />
    </button>
  );
}

export default ThemeButton;
