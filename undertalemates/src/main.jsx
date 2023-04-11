import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App'
import './index.css'
import Layout from './routes/Layout';
import CreateScreen from './routes/CreateScreen';
import Gallery from './routes/Gallery';
import DetailPage from './routes/DetailPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/undertalemates/' element={<Layout />} >
        <Route index={true} path='' element={<App />} />
        <Route index={false} path='/undertalemates/create/' element={<CreateScreen />} />

        <Route index={false} path='/undertalemates/gallery/' element={<Gallery />} />
        <Route index={false} path="/undertalemates/gallery/:name" element={<DetailPage />} exact />

      </Route>
    </Routes>
  </BrowserRouter>
)
