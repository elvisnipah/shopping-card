import './App.css';
import Header from './components/Header';
import RouteSwitch from './components/RouteSwitch';
import data from "./components/data"
import { useState } from 'react';

function App() {
  const [shopData, setShopData] = useState(data)
  
  return (
    <div className="bg-slate-800 h-full">
      <Header />
      <RouteSwitch 
        data={shopData}
      />
    </div>
  );
}

export default App;
