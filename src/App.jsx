import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Inicio from './pages/Inicio'
import Registro from './pages/Registro'
import Contacto from './pages/Contacto'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <div className="layout">
        <Navbar />
        <div className="contenido">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
