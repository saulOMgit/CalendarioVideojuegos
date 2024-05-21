import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import './styles.css';
import { Calendario } from './Calendario.jsx';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <Calendario/>
    </Provider>
  </React.StrictMode>,
)
