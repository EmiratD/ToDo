import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/todosSlice';
import './modal-creaat-todo.css';

function ModalForm({ onClose }) {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (trimmed) {
      dispatch(addTodo(trimmed));
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>New Note</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Новая задача..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            maxLength={30}
            autoFocus
          />
          <div className="modal-actions">
            <button type="button" onClick={onClose} className="cancel-btn">
              Cancel
            </button>
            <button type="submit">Apply</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalForm;
