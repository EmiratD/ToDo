import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '../../store/todosSlice';

import lupa from '../../assets/svg/search.svg';
import style from './search-Input.module.css';

function SearchInput() {
  const dispatch = useDispatch();

  // Получаем значение строки поиска из Redux
  const searchValue = useSelector((state) => state.todosFilter.search);

  // Обработка изменения поля ввода
  const handleChange = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <form className={style.form} onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search">
        <img src={lupa} alt="search" className={style.lupa} />
      </label>
      <input
        className={style.search}
        type="search"
        id="search"
        placeholder="Search note..."
        value={searchValue}
        onChange={handleChange}
      />
    </form>
  );
}

export default SearchInput;
