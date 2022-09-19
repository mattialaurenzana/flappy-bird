import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='container'>
          <div className='bg-container'>
          </div>
          <img src={require('./assets/image/moon.png')} className='moon'></img>
        </div>
      </header>
    </div>
  );
}

export default App;
