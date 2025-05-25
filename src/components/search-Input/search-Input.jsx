import lupa from '../../assets/svg/search.svg';
import style from './search-Input.module.css';
// import { useState } from 'react';

function SearchInput() {
  // const [value, setVelue] = useState('');

  return (
    <form className={style.form}>
      <label htmlFor="search">
        <img src={lupa} alt="lupa" className={style.lupa} />
      </label>
      <input
        className={style.search}
        type="search"
        id="search"
        placeholder="Search note..."
      />
    </form>
  );
}

export default SearchInput;
