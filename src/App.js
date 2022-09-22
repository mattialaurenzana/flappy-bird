import './App.css';
import { Route, Routes} from 'react-router-dom'
import SCREENS from './routes/screenName';
import Home from './screens/home/Home';
import WinLose from './screens/winLose/winLose'
import Game from './screens/game/Game';
import BgContainer from './components/ui/bgcontainer/BgContainer';
import Ranking from './screens/ranking/Ranking';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path={SCREENS.home} element={<Home/>} />
          <Route path={SCREENS.winLose} element={<WinLose />}/>
          <Route path={SCREENS.game} element={<Game/>} />
          <Route path={SCREENS.ranking} element={<Ranking />}/>
        </Routes>
    </div>
  );
}

export default App;
