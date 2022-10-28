import './App.css';
import Header from './components/Header';
import RouteSwitch from './components/RouteSwitch';

function App() {
  return (
    <div className="bg-slate-800 h-full">
      <Header />
      <RouteSwitch />
    </div>
  );
}

export default App;
