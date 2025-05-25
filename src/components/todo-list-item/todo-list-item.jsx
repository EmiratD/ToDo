import { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux'; //1
import { toggleTodoStatus, updateTodoText } from '../../store/todosSlice.js'; //2

import PenSvg from '../../assets/svg-component/pen-icon-svg/pen-icon-svg.jsx';
import DeleteIconSvg from '../../assets/svg-component/delete-icon-svg/delete-icon-svg.jsx';
import OkIcon from '../../assets/svg-component/ok-icon-component.jsx';
import XIcon from '../../assets/svg-component/x-icon-component.jsx';

import WrapperBtns from '../wrapper-btns/wrapper-btns.jsx';

import './todo-list-item.css';

function TodoListItem({ id, todo }) {
  const dispatch = useDispatch(); //3
  const [inputValue, setInputValue] = useState(todo); //4
  const inputRef = useRef(null);
  console.log(id);

  const [checked, setChecked] = useState(false);
  const [changeTodoText, setChangeTodotext] = useState(false);

  useEffect(() => {
    if (changeTodoText) {
      inputRef.current?.focus();
    }
  }, [changeTodoText]);

  return (
    <li className="todoListItem" id={id}>
      <label className="checkbox-wrapper">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => {
            const isChecked = e.target.checked;
            setChecked(isChecked);
            dispatch(toggleTodoStatus(id)); // отправляем в Redux
          }}
          className="hidden-checkbox"
        />
        {/* //5 */}
        <span className="custom-checkbox" />
        <span
          htmlFor="1"
          className={`checkbox-label ${checked && 'crossed'} ${
            changeTodoText && 'displayNone'
          }`}
        >
          {todo}
        </span>
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          maxLength={30}
          className={`checkbox-label red ${!changeTodoText && 'displayNone'}`}
        />
        {/* //6 */}
      </label>
      {!changeTodoText && (
        <WrapperBtns
          svg1={<PenSvg />}
          svg2={<DeleteIconSvg />}
          fn1={setChangeTodotext}
          fnArg1={true}
          fn2={() => {}}
          fnArg2={undefined}
        />
      )}
      {changeTodoText && (
        <WrapperBtns
          svg1={<OkIcon />}
          svg2={<XIcon />}
          fn1={() => {
            dispatch(updateTodoText({ id, newText: inputValue }));
            setChangeTodotext(false);
          }}
          fnArg1={undefined}
          fn2={() => {
            setInputValue(todo); // откат текста при отмене
            setChangeTodotext(false);
          }}
          fnArg2={undefined}
        />
      )}
      {/* 7 */}
    </li>
  );
}

export default TodoListItem;
