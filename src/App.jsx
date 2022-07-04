import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import PrivateRoutes from './routes/PrivateRoutes'
import { ToastContainer } from 'react-toastify'


function App() {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path='/' element={<Home />} />
        </Route>
        <Route path='/'>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
