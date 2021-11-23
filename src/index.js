import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// import roboto font
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { ThemeProvider, CssBaseline } from '@mui/material';
import { darkTheme } from '@styles/darktheme';

// background #0e1c2a
// card #182b3c
// primary #2eac68

/*
  palette: {
    mode: 'dark',
    primary: {
      main: '#04d2a2',
    },
    secondary: {
      main: '#e2585b',
    },
    text: {
      primary: '#e6e6e6',
    }    
  },
*/

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
