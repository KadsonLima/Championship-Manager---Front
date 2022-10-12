import {Route, Routes, BrowserRouter} from 'react-router-dom'
import { AuthPage } from './pages/AuthPage';
import Home from './pages/Home';
import Jobs from './pages/Jobs';
import Global from './styles/global';
import TokenProvider from './contexts/tokenContext';
import { useState } from 'react';
import Register from './pages/Register'
import { JobId } from './pages/Jobs/JobId';

function App() {
  

  return ( 
    <BrowserRouter>
    <Global/>
    <TokenProvider>
      <Routes>
        <Route path="/" element={<AuthPage/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/jobs" element={<Jobs/>}/>
        <Route path="/job/:id" element={<JobId/>}/>
        <Route path="/register/:link" element={<Register/>}/>
      </Routes>
      </TokenProvider>
    </BrowserRouter>
  );
}

export default App;
