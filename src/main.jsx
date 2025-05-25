import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style/var.css';
import { Provider } from 'react-redux';
import { store } from './store/store';

import App from './app/App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
