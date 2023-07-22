import './App.css';
import Footer from './Components/Footer/footer.jsx';
import Header from './Components/Header/header.jsx';
import Home from './Components/home/Home.jsx';
import Adopciones from './Components/Adopciones/adopciones.jsx';
import Denuncias from './Components/Denuncias/denuncias';
import InfoGral from './Components/Info-Gral/infoGral';
import Donaciones from './Components/Donaciones/donaciones';
import Contacto from './Components/Contacto/contacto';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <div className="container">
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/adopciones' element={<Adopciones/>}></Route>
          <Route path='/denuncias' element={<Denuncias/>}></Route>
          <Route path='/informaciongeneral' element={<InfoGral/>}></Route>
          <Route path='/donaciones' element={<Donaciones/>}></Route>
          <Route path='/contacto' element={<Contacto/>}></Route>
        </Routes>
        <Footer></Footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
