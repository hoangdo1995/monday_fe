import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

// redux store
import { Provider } from 'react-redux';
import { store } from './redux/configStore';
//Router
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import { createBrowserHistory} from 'history';

export const history = createBrowserHistory();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HistoryRouter history={history}>
    <Provider store={store}>
        <App />
    </Provider>
  </HistoryRouter>
);
