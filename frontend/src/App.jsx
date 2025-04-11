import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import AddTask from './components/AddTask';
import Listask from './components/Listask';
import Login from './components/Login';
import Register from './components/Register';
import MHome from './components/MHome';
import Navbar from './components/Navbar';

import { TaskProvider } from './context/TaskContext'; // ✅ Import TaskProvider

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      {/* ✅ Wrap the whole routing section with TaskProvider */}
      <TaskProvider>
        <div>
          <Routes>
            <Route path='/' element={<MHome />} />
            <Route path='/home' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/addtask' element={<AddTask />} />
            <Route path='/listask' element={<Listask />} />
          </Routes>
        </div>
      </TaskProvider>
    </>
  );
}

export default App;
