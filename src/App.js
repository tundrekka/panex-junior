import logo from './logo.svg';
import './App.css';
import Game from './Game';

function App() {

  // javascri
  const functionTest = () => {
    alert("holi")
  }

  // html
  const myHtml = <div>
    <button onClick={functionTest}>Mi boton</button>
  </div>

  return (
    <div>
      <Game />
    </div>
  );
}

export default App;
