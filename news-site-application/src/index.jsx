import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import App from './pages/MainPage/MainPage';
import { store } from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
