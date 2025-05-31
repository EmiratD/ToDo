import { useState } from 'react';
import ModalForm from '../modal-creaat-todo/modal-creaat-todo';
import './add-todo-button.css';
import PlusIconComponent from '../../assets/svg-component/plus-icon-component';

function AddTodoButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="add-todo-btn-1" onClick={() => setOpen(true)}>
        <PlusIconComponent />
      </button>

      {/* Модальное окно */}
      {open && <ModalForm onClose={() => setOpen(false)} />}
    </>
  );
}

function AddTodoButton2() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className="add-todo-btn-2" onClick={() => setOpen(true)}>
        <span>New note</span>

        <PlusIconComponent />
      </button>

      {/* Модальное окно */}
      {open && <ModalForm onClose={() => setOpen(false)} />}
    </>
  );
}

export { AddTodoButton, AddTodoButton2 };
