import style from './Header.module.css';
import SearchInput from '../searchInput/SearchInput';
import FilterButton from '../filterButton/filterButton';

import Moon from '../../assets/svg/moon.svg';
import Sun from '../../assets/svg/Sun.svg';

import { useState, useEffect } from 'react';

const Header = () => {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    const statusTheme = JSON.parse(localStorage.getItem('theme'));
    if (statusTheme) {
      setTheme(statusTheme);
    }
    console.log(statusTheme);
  }, []);

  return (
    <header className={style.header}>
      <h1 className={style.title}>TODO LIST</h1>
      <dir className={style.form}>
        <SearchInput />
        <FilterButton />
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
      </dir>
    </header>
  );
};

export default Header;
