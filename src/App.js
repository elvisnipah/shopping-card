import './App.css';
import Header from './components/Header';
import RouteSwitch from './components/RouteSwitch';
import data from "./components/data"
import { useState } from 'react';

function App() {

  const [shopData, setShopData] = useState(data)
  const [cartData, setCartData] = useState([])

  function logCart() {
    console.log(cartData)
  }

  function addToCart(name, price, id) {
    const newItem = {
      "name": name,
      "price": price,
      "id": id,
      "quantity": 1
    }
    if (cartData.find(item => item.id === id)) {
      setCartData(cardData => cardData.map(item => {
        return item.id === id ? {...item, quantity: item.quantity + 1} : item
      }))
    } else {
      setCartData([...cartData, newItem])
    }
  }

  return (
    <div className="bg-slate-800 h-full">
      <Header 
        cartInfo={cartData}
        logCart={logCart}
      />
      <RouteSwitch 
        data={shopData}
        addToCart={addToCart}
      />
    </div>
  );
}

export default App;
