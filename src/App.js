import {Route, Routes, BrowserRouter} from 'react-router-dom'
import { AuthPage } from './pages/AuthPage';
import Home from './pages/Home';
import Camp from './pages/Camps';
import CampId from './pages/CampId';
import Global from './styles/global';
import TokenProvider from './contexts/tokenContext';
import { useState } from 'react';
import Register from './pages/Register'

function App() {
  const [aside, setAside] = useState(true)

  return ( 
    <BrowserRouter>
    <Global/>
    <TokenProvider>
      <Routes>
        <Route path="/" element={<AuthPage/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/camps" element={<Camp/>}/>
        <Route path="/camps/:id" element={<CampId/>}/>
        <Route path="/register/:camp" element={<Register/>}/>
      </Routes>
      </TokenProvider>
    </BrowserRouter>
  );
}

export default App;
