import style from './filterButton.module.css';
import { useState } from 'react';
import arrow from '../../assets/svg/arrow.svg';

const FilterButton = () => {
  const [show, setShow] = useState(false);
  const [filter, setFilter] = useState('All');

  return (
    <div className={style.filter}>
      <button
        className={style.button}
        onClick={() => {
          if (show) {
            setShow(false);
          } else {
            setShow(true);
          }
        }}
      >
        {filter}

        <img src={arrow} alt="↓" className={style.arrow} />
      </button>
      {show && (
        <div className={style.list}>
          <button
            className={style.listItem}
            onClick={() => {
              setFilter('All');
              setShow(false);
            }}
          >
            All
          </button>
          <button
            className={style.listItem}
            onClick={() => {
              setFilter('Complete');
              setShow(false);
            }}
          >
            Complete
          </button>
          <button
            className={style.listItem}
            onClick={() => {
              setFilter('Incomplete');
              setShow(false);
            }}
          >
            Incomplete
          </button>
        </div>
      )}
    </div>
  );
};

export default FilterButton;
