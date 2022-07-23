import { AnimatePresence } from 'framer-motion';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Fotter from './components/Fotter';
import Header from './components/Header';
import Home from './components/Home';
import FarmerRegister from './Database/FarmerRegister';
import Create from './Database/Create';
import Login from './Database/Login';
import CustomerRegister from './Database/CustomerRegister';

function App() {

  const location = useLocation();

  return (
    <div className="App">
      <Header/>
      <AnimatePresence initial={true} exitBeforeEnter>
       <Routes location={location} key={location.pathname} >
        <Route path="/" element={<Home/>}></Route>
        <Route path="/RegisterAsFarmer" element={<FarmerRegister/>}></Route>
        <Route path="/RegisterAsCustomer" element={<CustomerRegister/>}></Route>
        <Route path="/Register" element={<Create/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        </Routes>
        </AnimatePresence>
      <Fotter/>
    </div>
  );
}

export default App;
