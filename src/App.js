import './App.css';
import { Route, Routes} from 'react-router-dom'
import SCREENS from './routes/screenName';
import Home from './screens/home/Home';
import Game from './screens/game/Game';
import BgContainer from './components/ui/bgcontainer/BgContainer';

function App() {
  return (
    <div className="App">
      <BgContainer/>
        <Routes>
          <Route path={SCREENS.home} element={<Home/>} />
          <Route path={SCREENS.game} element={<Game/>} />
        </Routes>
    </div>
  );
}

export default App;
