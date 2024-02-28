import { Link, Route, Routes } from 'react-router-dom';
import './App.css'
import Mac from './components/macbook/Mac';
import Acer from './components/acer/Acer';
import Airpods from './components/airpods/Airpods';
import Asus from './components/asus/Asus';
import Phons from './components/phons/Phons';

function App() {
  return (
    <div className="App">
     <div style={{ display: 'flex', justifyContent: 'space-around', height: '50px' }}>
      <Link to="/mac">Mac</Link>
      <Link to="/acer">Acer</Link>
      <Link to="/airpods">Airpods</Link>
      <Link to="/asus">Asus</Link>
      <Link to="/phons">Phons</Link>
     </div>
     <Routes>
      <Route path='/mac' element={<Mac />} />
      <Route path='/acer' element={<Acer />} />
      <Route path='/airpods' element={<Airpods />} />
      <Route path='/asus' element={<Asus />} />
      <Route path='/phons' element={<Phons />} />
     </Routes>
    </div>
  )
}

export default App;

