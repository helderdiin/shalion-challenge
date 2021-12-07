import React from 'react';
import { createBrowserHistory } from 'history';
import { Provider } from 'mobx-react';
import { RouterStore, syncHistoryWithStore } from 'mobx-react-router';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Toastify } from '~/modules';
import Routes from './routes';
import * as serviceWorker from './serviceWorker';
import store from './stores';
import { borders, breakpoints, colors, radius, spacings } from './theme';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyle from './theme/global';

import 'antd/dist/antd.css';

const routingStore = new RouterStore();
const browserHistory = createBrowserHistory();
const history = syncHistoryWithStore(browserHistory, routingStore);

const stores = {
  ...store,
  routing: routingStore,
};

const theme = {
  ...colors,
  ...radius,
  ...spacings,
  ...borders,
  ...breakpoints,
};

render(
  <Provider {...stores}>
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <Toastify.ToastContainer />
        <Routes />

        <GlobalStyle />
      </Router>
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
