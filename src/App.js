import logo from './logo.svg';
import './App.css';
import { Login } from './Components/Login';
import { Route, Routes } from 'react-router';
import { Home } from './Components/Home';
import { Signup } from './Components/Signup';

function App() {
  return (
    <div className="App">
      
      <Routes>
      <Route path='/signup' element={<Signup/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path="/home" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
