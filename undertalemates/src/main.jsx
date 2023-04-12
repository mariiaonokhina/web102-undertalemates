import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App'
import './index.css'
import Layout from './routes/Layout';
import CreateScreen from './routes/CreateScreen';
import Gallery from './routes/Gallery';
import DetailPage from './routes/DetailPage'
import EditPage from './routes/EditPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/web102-undertalemates/' element={<Layout />} >
        <Route index={true} path='' element={<App />} />
        <Route index={false} path='/web102-undertalemates/create/' element={<CreateScreen />} />

        <Route index={false} path='/web102-undertalemates/gallery/' element={<Gallery />} />
        <Route index={false} path="/web102-undertalemates/gallery/:name" element={<DetailPage />} />
        <Route index={false} path="/web102-undertalemates/gallery/:name/edit" element={<EditPage />} exact />

      </Route>
    </Routes>
  </BrowserRouter>
)
