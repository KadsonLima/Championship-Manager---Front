import {Route, Routes, BrowserRouter} from 'react-router-dom'
import { AuthPage } from './pages/AuthPage';
import Home from './pages/Home/index';
import Camp from './pages/Camps/index';
import CampId from './pages/CampId/index';
import Global from './styles/global';
import TokenProvider from './contexts/tokenContext';
import { useState } from 'react';


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
      </Routes>
      </TokenProvider>
    </BrowserRouter>
  );
}

export default App;
