import logo from './logo.svg';
import './App.css';
import BlueButton from "./components/BlueButton"
import RedButton from "./components/RedButton"


function App() {
  return (
    <div className="App" id="app-div" data-testid="app-div">
          <BlueButton/>
          <RedButton/>
    </div>
  );
}

export default App;
