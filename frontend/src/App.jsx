import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'


import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'

function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        
          <Route path='/' element={<Home/>}/>
          <Route path='/product/:slug' element={<ProductDetail/>}/>
      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
