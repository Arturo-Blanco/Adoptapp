import './App.css';
import Footer from './Components/Footer/footer.jsx';
import Header from './Components/Header/header.jsx';
import Home from './Pages/Home/Home.jsx';
import AdoptPage from './Pages/Adoption/AdoptionPage';
import InformationPage from 'Pages/Information/InformationPage';
import ComplaintsPage from 'Pages/Complaints/ComplaintsPage';
import DonationPage from 'Pages/Donations/DonationPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/adopciones/mascotas' element={<AdoptPage/>}></Route>
          <Route path='/denuncias' element={<ComplaintsPage/>}></Route>
          <Route path='/informacion' element={<InformationPage/>}></Route>
          <Route path='/donaciones' element={<DonationPage/>}></Route>
        </Routes>
        <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
