import React from 'react';
import {ThemeProvider} from 'styled-components';
import {BrowserRouter as Router} from 'react-router-dom';
import AppContainer from './app-main';
import theme from '../lib/theme';
import ErrorBoundary from './error-boundary';
import Routes from './app-routes';


const App = () => ( 
  <Router>
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <AppContainer>
          <Routes />
        </AppContainer>
      </ErrorBoundary>
    </ThemeProvider>
  </Router>
     
);

export default App;
