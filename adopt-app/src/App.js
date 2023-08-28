import './App.css';
import Footer from './Components/Footer/footer.jsx';
import Header from './Components/Header/header.jsx';
import Home from './Pages/Home/Home.jsx';
import Denuncias from './Pages/Complaints/denuncias.jsx';
import InfoGral from './Pages/Information/infoGral.jsx';
import Donaciones from './Pages/Donations/Donaciones.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdoptPage from './Pages/Adoption/AdoptionPage';

function App() {

  return (
    <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/adopciones/mascotas' element={<AdoptPage/>}></Route>
          <Route path='/denuncias' element={<Denuncias/>}></Route>
          <Route path='/informacion' element={<InfoGral/>}></Route>
          <Route path='/donaciones' element={<Donaciones/>}></Route>
        </Routes>
        <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
