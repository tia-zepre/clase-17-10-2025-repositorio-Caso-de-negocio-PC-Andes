import logo from './logo.svg';
import './App.css';
import NavbarPrincipal from './components/Navbar';
import Banner from './components/banner';
import Informacion from './components/informacion';

import CalculoCotizacor from './components/CalculoCotizacor';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <div className='contenedor'>
        <NavbarPrincipal/>
        <Banner/>
        <Informacion/>

        <CalculoCotizacor/>
        <Footer/>
      </div>

    </div>
  );
}

export default App;
