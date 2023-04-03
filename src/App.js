import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Launches from './components/Launches/Launches';
import Earphones from './components/Earphones/Earphones';
import Sellers from './components/Sellers/Sellers';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Products />
      <Sellers />
      <Earphones />
      <Launches />

      <Footer />
    </div>
  )
}

export default App;