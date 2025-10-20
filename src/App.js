import logo from './logo.svg';
import './App.css';
import NavbarPrincipal from './components/Navbar';
import Banner from './components/banner';
import Informacion from './components/informacion';
import Cotizacor from './components/cotizador';
import CalculoCotizacor from './components/CalculoCotizacor';

function App() {
  return (
    <div className="App">
      <div className='contenedor'>
        <NavbarPrincipal/>
        <Banner/>
        <Informacion/>
        <Cotizacor/>
        <CalculoCotizacor/>

      </div>

    </div>
  );
}

export default App;
