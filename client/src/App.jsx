import {Detail, Form, Home, Landing} from './views';
import { Route, Routes, useLocation } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import './App.css'
import axios from 'axios';
axios.defaults.baseURL= "https://countrie-pi-henry.onrender.com";


function App() {
  
  const location = useLocation()

  return (
    <>
      <div>
            {location.pathname !== "/" && <NavBar/>}
        <Routes>

            <Route exact path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route exact path='/countries/:id' element={<Detail/>} />
            <Route path= '/form' element = {<Form/>} />

        </Routes>

      
       
        
     


      
      </div>
    
    </>
  )
}

export default App
