import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: `'Open Sans', sans-serif;`
  },
  palette: {
    primary: {
      main: '#a1a1a1'
    },
    secondary: {
      main: '#042460'
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
