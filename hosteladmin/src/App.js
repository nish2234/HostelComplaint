
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./Page/Home"
import Main from "./Page/Main"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
    <ToastContainer/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/category/:categoryId/block/:blockId'element={<Main/>}/>
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
