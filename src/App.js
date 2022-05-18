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

function App() {
  return (
    <div className='max-w-7xl mx-auto '>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/todo' element={<ToDo></ToDo>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/addTask' element={<AddTask></AddTask>}></Route>
        <Route path='/spnnier' element={<Spnnier></Spnnier>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
