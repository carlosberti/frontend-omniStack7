import React from 'react';
import GlobalStyle from './styles/global';
import Routes from './routes'
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  </>
)

export default App;
