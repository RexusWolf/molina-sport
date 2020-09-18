import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import { yellow, indigo } from '@material-ui/core/colors';
import './fonts/OPTIEdgarBold-Extended.otf';
import { Provider } from 'react-redux';
import { store } from './store/store';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: indigo[900],
    },
    secondary: yellow,
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
