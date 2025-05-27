import { useState, useRef, useEffect } from 'react';

import PenSvg from '../../assets/svg-component/pen-icon-svg/pen-icon-svg.jsx';
import DeleteIconSvg from '../../assets/svg-component/delete-icon-svg/delete-icon-svg.jsx';
import OkIcon from '../../assets/svg-component/ok-icon-component.jsx';
import XIcon from '../../assets/svg-component/x-icon-component.jsx';

import WrapperBtns from '../wrapper-btns/wrapper-btns.jsx';

import './todo-list-item.css';

function TodoListItem({ id, todo, status, updateTodoText, toggleTodoStatus }) {
  const inputRef = useRef(null);
  const [changeTodoText, setChangeTodoText] = useState(false);
  const [inputValue, setInputValue] = useState(todo);

  // Обновляем inputValue, если значение todo изменилось извне
  useEffect(() => {
    setInputValue(todo);
  }, [todo]);

  useEffect(() => {
    if (changeTodoText) {
      inputRef.current?.focus();
    }
  }, [changeTodoText]);

  const handleSave = () => {
    const trimmed = inputValue.trim();
    updateTodoText(id, trimmed.length > 0 ? trimmed : todo);
    setChangeTodoText(false);
  };

  return (
    <li className="todoListItem" id={id}>
      <label className="checkbox-wrapper">
        <input
          type="checkbox"
          checked={!status}
          onChange={() => toggleTodoStatus(id)}
          className="hidden-checkbox"
        />
        <span className="custom-checkbox" />

        {!changeTodoText ? (
          <span className={`checkbox-label ${!status && 'crossed'}`}>
            {todo}
          </span>
        ) : (
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            maxLength={30}
            className="checkbox-label red"
          />
        )}
      </label>

      {!changeTodoText ? (
        <WrapperBtns
          svg1={<PenSvg />}
          svg2={<DeleteIconSvg />} // здесь можно подключить удаление
          fn1={setChangeTodoText}
          fnArg1={true}
          fn2={() => {}}
          fnArg2={undefined}
        />
      ) : (
        <WrapperBtns
          svg1={<OkIcon />}
          svg2={<XIcon />}
          fn1={handleSave}
          fnArg1={undefined}
          fn2={() => {
            setInputValue(todo);
            setChangeTodoText(false);
          }}
          fnArg2={undefined}
        />
      )}
    </li>
  );
}

export default TodoListItem;
