import React from 'react';
import {ThemeProvider} from '@material-ui/styles';
import {createMuiTheme, makeStyles} from '@material-ui/core/styles';
import {Container} from '@material-ui/core';

import FileUploadContainer from './components/FileUploadContainer';

const palette = {
  primary: {main: '#32acf1'},
  secondary: {main: '#f8b195'},
};

const theme = createMuiTheme({palette});

const useStyles = makeStyles(theme => ({
  container: {
    backgroundImage: "url('https://source.unsplash.com/xtSYcfq066U')",
    backgroundSize: 'cover',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.container}>
        <Container maxWidth="sm">
          <FileUploadContainer />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
