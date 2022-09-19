import logo from './logo.svg';
import './App.css';
import BgContainer from './components/ui/bgcontainer/BgContainer';
import { Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path={'/'} element={<BgContainer/>} />
        </Routes>
    </div>
  );
}

export default App;
