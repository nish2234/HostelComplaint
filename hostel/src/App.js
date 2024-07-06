import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Pages/Home';
import { ToastContainer } from 'react-toastify';
import About from './Pages/About';
import Complain from './Pages/Complain';

function App() {
  return (
      <BrowserRouter>
      <ToastContainer/>
         <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>}/>
          <Route path='/complain' element={<Complain/>}/>
         </Routes>
      
      </BrowserRouter>
  );
}

export default App;
