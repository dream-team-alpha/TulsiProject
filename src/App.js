
import './App.css';
import Home from './components/Home';
import Login from './components/signElements/Login';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './components/About404';
import SignUp from './components/signElements/SignUp';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signUp' element ={<SignUp />} />
        <Route path='*' element={<About />} />
      </Routes>
    </BrowserRouter>

      
    </>
  );
}

export default App;
