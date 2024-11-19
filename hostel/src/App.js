import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Pages/Home';
import { ToastContainer } from 'react-toastify';
import About from './Pages/About';
import Complain from './Pages/Complain';
import Login from './Components/auth/login';
import Register from './Components/auth/register';
import { AuthProvider } from './contexts/authContext';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <ToastContainer/>
         <Routes>
         <Route path='*' element={<Login/>} />
         <Route path='/register' element={<Register/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/about' element={<About/>}/>
          <Route path='/complain' element={<Complain/>}/>
         </Routes>
      
      </BrowserRouter>
      </AuthProvider>
  );
}

export default App;
