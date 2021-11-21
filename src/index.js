import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import darkScrollbar from '@mui/material/darkScrollbar';

// import roboto font
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';

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

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2eac68',
    },
    secondary: {
      main: '#AC2E72',
    },
    background: {
      default: '#0e1c2a',
      paper: '#182b3c',
    },
    text: {
      primary: '#e6e6e6',
    }  
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: darkScrollbar(),
      },
    },
  },
  typography: {
    h1: {
      '@media (max-width:768px)': {
        fontSize: '4rem',
      }
    },
    h3: {
      '@media (max-width:768px)': {
        fontSize: '2rem',
      }
    }
  }
});


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
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
