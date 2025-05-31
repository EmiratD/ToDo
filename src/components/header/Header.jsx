import style from './Header.module.css';
import SearchInput from '../search-Input/search-Input';
import FilterButton from '../filter-button/filter-button';
import ThemeButton from '../theme-button/theme-button';
import { AddTodoButton2 } from '../add-todo-button/add-todo-button';

const Header = () => {
  return (
    <header className={style.header}>
      <h1 className={style.title}>TODO LIST</h1>
      <div className={style.form}>
        <SearchInput />
        <div className={style.wrapperBts}>
          <FilterButton />
          <ThemeButton />
        </div>
        <AddTodoButton2 />
      </div>
    </header>
  );
};

export default Header;
