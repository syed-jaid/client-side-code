import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Components/ForAll/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import ToDo from './Components/ToDo/ToDo';
import About from './Components/About/About';
import AddTask from './Components/AddTask/AddTask';
import Spnnier from './Components/ForAll/Spnnier';
import Forgetpass from './Components/Auth/Forgetpass';
import Sign from './Components/Auth/signIn/Sign';
import Registor from './Components/Auth/signIn/Registor';
import Requird from './Components/Auth/signIn/Requird';

function App() {
  return (
    <div className='max-w-7xl mx-auto '>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/todo' element={<Requird><ToDo></ToDo></Requird>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/addTask' element={<Requird><AddTask></AddTask></Requird>}></Route>
        <Route path='/spnnier' element={<Spnnier></Spnnier>}></Route>
        <Route path='/forgetpass' element={<Forgetpass></Forgetpass>}></Route>
        <Route path='/login' element={<Sign></Sign>}></Route>
        <Route path='/Registor' element={<Registor></Registor>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
