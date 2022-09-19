import './App.css';
import { Route, Routes} from 'react-router-dom'
import SCREENS from './routes/screenName';
import Home from './screens/home/Home';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path={SCREENS.home} element={<Home/>} />
        </Routes>
    </div>
  );
}

export default App;
