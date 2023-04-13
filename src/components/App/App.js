import React, { useState } from 'react';
import Header from '../Header/Header'
import Products from '../Products/Products';
// import Launches from '../Launches/Launches';
import Earphones from '../Earphones/Earphones';
import Sellers from '../Sellers/Sellers';
import Footer from '../Footer/Footer';

import context from '../../helpers/Context';




function App() {
  const [countItems, setCountItems] = useState(0);
  function incrementCountItems() {
    setCountItems(countItems + 1);
  }
  return (
    <div className="App">
      <context.Provider value={{
        incrementCountItems
      }}>
        <Header countItems={countItems} />
        <Products />
        <Sellers />
        <Earphones />
        <Footer />
      </context.Provider>
    </div>
  )
}

export default App;