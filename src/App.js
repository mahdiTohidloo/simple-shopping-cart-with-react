import React from 'react';
import Products from './pages/products';
import AppContextProvider from './store/app';


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
