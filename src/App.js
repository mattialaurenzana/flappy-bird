import './App.css';
import { Route, Routes} from 'react-router-dom'
import SCREENS from './routes/screenName';
import Home from './screens/home/Home';
import WinLose from './screens/winLose/winLose'

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path={SCREENS.home} element={<Home/>} />
          <Route path={SCREENS.winLose} element={<WinLose />}/>
        </Routes>
    </div>
  );
}

export default App;
