import logo from './logo.svg';
import './App.css';
import HRV from './CarList/HRV/HRV';
function App() {
  return (
    <div className="App">
      <h1>HRV</h1>
      <div id="renderCar">
        <div id="beta"></div>
      </div>
      <HRV />
    </div>
  );
}

export default App;
