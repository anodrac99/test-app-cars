import './App.css';
import Nav from './components/Nav';
import { HashRouter, Route, Routes } from 'react-router-dom'
import Almacenamiento from './components/Almacenamiento';
import Home from './components/Home';
import Preparacion from './components/Preparacion';
import Vendidos from './components/Vendidos';
import EnVenta from './components/EnVenta';

function App() {
  return (
    <HashRouter>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/preparacion' element={<Preparacion/>}/>
        <Route path='/almacenamiento' element={<Almacenamiento />}/>
        <Route path='/ventas' element={<EnVenta />}/>
        <Route path='/pedidos' element={<Vendidos />}/>
      </Routes>
      
    </HashRouter>
  );
}

export default App;
