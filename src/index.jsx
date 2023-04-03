import './index.css';
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App";
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Home from './Routes/Home'
import Detail from './Routes/Detail'
import Favs from './Routes/Favs'
import Contact from './Routes/Contact'
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<App/>} />
  <Route path='/home' element={<Home/>} />
  <Route path='/detail' element={<Detail/>} />
  <Route path='/favs' element={<Favs/>} />
  <Route path='/contact' element={<Contact/>} />
  </Routes>
  </BrowserRouter>
  </React.StrictMode>
  );