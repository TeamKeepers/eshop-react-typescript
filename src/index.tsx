import ReactDOM from 'react-dom';
import { Global, css } from '@emotion/react';
import React from 'react';
import Routes from './routes';
import { Provider } from 'react-redux';
import store from './store';
import { ThemeProvider } from '@emotion/react';
import { theme } from './styles';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
      <Global
            styles={css`
                @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap');
                
                * {
                    font-family: 'Ubuntu', sans-serif;
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                    font-size: 1.1em;
                }
            `}
        />
        <Routes />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
