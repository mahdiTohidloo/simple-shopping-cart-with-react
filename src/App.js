import React from 'react';
import Products from './pages/products';
import AppContextProvider from './store/app';
import './assets/styles/app.scss';

const  App = () => {
  return (
    <div className="App">
        <AppContextProvider>
          <Products />
        </AppContextProvider>
    </div>
  );
}

export default App;
