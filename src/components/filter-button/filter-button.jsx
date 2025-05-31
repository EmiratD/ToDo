import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../store/todosSlice';

import style from './filter-button.module.css';
import arrow from '../../assets/svg/arrow.svg';

const filterMap = {
  all: 'All',
  complete: 'Complete',
  incomplete: 'Incomplete',
};

const FilterButton = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.todos.filter);

  const [showDropdown, setShowDropdown] = useState(false);
  const [buttonLabel, setButtonLabel] = useState('All');

  useEffect(() => {
    setButtonLabel(filterMap[currentFilter]);
  }, [currentFilter]);

  const handleSelect = (value) => {
    dispatch(setFilter(value));
    setShowDropdown(false);
  };
  const styleArrowRevers = { transform: 'rotate(0.5turn)' };

  return (
    <div className={style.filter}>
      <button
        className={style.buttonOpenList}
        onClick={() => setShowDropdown((prev) => !prev)}
      >
        {buttonLabel}
        <img
          src={arrow}
          alt="↓"
          className={style.arrow}
          style={showDropdown ? styleArrowRevers : null}
        />
      </button>

      {showDropdown && (
        <div className={style.listBtns}>
          <button
            className={style.listItem}
            onClick={() => handleSelect('all')}
          >
            All
          </button>
          <button
            className={style.listItem}
            onClick={() => handleSelect('complete')}
          >
            Complete
          </button>
          <button
            className={style.listItem}
            onClick={() => handleSelect('incomplete')}
          >
            Incomplete
          </button>
        </div>
      )}
    </div>
  );
};

export default FilterButton;
