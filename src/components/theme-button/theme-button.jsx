import style from './theme-button.module.css';
import { useState, useEffect } from 'react';
import Moon from '../../assets/svg/moon.svg';
import Sun from '../../assets/svg/Sun.svg';

function ThemeButton() {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    const statusTheme = JSON.parse(localStorage.getItem('theme'));
    if (statusTheme) {
      setTheme(statusTheme);
    }
    console.log(statusTheme);
  }, []);

  return (
    <button
      className={style.theme}
      onClick={() => {
        if (theme) {
          setTheme(false);
          localStorage.setItem('theme', JSON.stringify({ bool: 'false' }));
        } else {
          setTheme(true);
          localStorage.setItem('theme', JSON.stringify({ bool: 'true' }));
        }
      }}
    >
      <img src={theme ? Sun : Moon} alt="theme" />
    </button>
  );
}

export default ThemeButton;
