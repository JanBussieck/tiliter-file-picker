import React from 'react';
import {ThemeProvider} from '@material-ui/styles';
import {createMuiTheme} from '@material-ui/core/styles';
import './App.css';

const palette = {
  primary: {main: '#32acf1'},
  secondary: {main: '#f8b195'},
};

const themeName = 'Tiliter Main CI';

const theme = createMuiTheme({palette, themeName});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
