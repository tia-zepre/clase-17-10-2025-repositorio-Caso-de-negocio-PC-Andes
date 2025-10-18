import logo from './logo.svg';
import './App.css';
import NavbarPrincipal from './components/Navbar';
import Banner from './components/banner';
import Informacion from './components/informacion';

function App() {
  return (
    <div className="App">
      <div className='contenedor'>
        <NavbarPrincipal/>
        <Banner/>
        <Informacion/>
      </div>

    </div>
  );
}

export default App;
