import React, { useState } from 'react';
import Header from '../Header/Header'
import Products from '../Products/Products';
import Launches from '../Launches/Launches';
import Earphones from '../Earphones/Earphones';
import Sellers from '../Sellers/Sellers';
import Footer from '../Footer/Footer';

const Context = React.createContext("Hello!");

function LevelThird() {
  return (
    <Context.Consumer >
      <h1>{value => value}</h1>
    </Context.Consumer>

  )
}

function LevelSecond() {
  return (
    <LevelThird />
  )
}

function LevelFirst() {
  return (
    < LevelSecond />
  )
}


function App() {
  const [countItems, setCountItems] = useState(0);
  function incrementCountItems() {
    setCountItems(countItems + 1);
  }



  const title = "Hello! Maxima"
  return (
    <div className="App">
      {/* <Context.Provider value={title}>
        <LevelFirst />
      </Context.Provider> */}


      <Header countItems={countItems} />
      <Products />
      <Sellers setCountItems={incrementCountItems} />
      {/* <Earphones /> */}
      {/* <Launches /> */}
      <Footer />
    </div>
  )
}

export default App;