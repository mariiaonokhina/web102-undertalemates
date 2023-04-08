import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App'
import './index.css'
import Layout from './routes/Layout';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/undertalemates/' element={<Layout />} >
        <Route index={true} path='' element={<App />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
