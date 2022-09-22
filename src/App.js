import './App.css';
import { Route, Routes} from 'react-router-dom'
import SCREENS from './routes/screenName';
import Home from './screens/home/Home';
import Game from './screens/game/Game';
import Ranking from './screens/ranking/Ranking';
import GameOver from './screens/gameover/GameOver';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path={SCREENS.home} element={<Home/>} />
          <Route path={SCREENS.game} element={<Game/>} />
          <Route path={SCREENS.gameover} element={<GameOver/>} />
          <Route path={SCREENS.ranking} element={<Ranking />}/>
        </Routes>
    </div>
  );
}

export default App;
