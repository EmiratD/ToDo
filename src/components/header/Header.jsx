import style from './Header.module.css';
import SearchInput from '../search-Input/search-Input';
import FilterButton from '../filter-button/filter-button';
import ThemeButton from '../theme-button/theme-button';

const Header = () => {
  return (
    <header className={style.header}>
      <h1 className={style.title}>TODO LIST</h1>
      <div className={style.form}>
        <SearchInput />
        <div className={style.form}>
          <FilterButton />
          <ThemeButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
