import { createTheme, darkScrollbar } from "@mui/material";

export const darkTheme = createTheme({
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