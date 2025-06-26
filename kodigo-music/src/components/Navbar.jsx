import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Navbar.css'


function Navbar() {
  const [abierto, setAbierto] = useState(false)
  const [esMovil, setEsMovil] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const actualizarVista = () => {
      setEsMovil(window.innerWidth <= 768)
      if (window.innerWidth > 768) setAbierto(false)
    }
    window.addEventListener('resize', actualizarVista)
    return () => window.removeEventListener('resize', actualizarVista)
  }, [])

  return (
    <>
      {/* Botón visible solo en móvil */}
      {esMovil && (
        <button className="toggle-nav" onClick={() => setAbierto(!abierto)}>
          ☰
        </button>
      )}

      <div className={`sidebar ${esMovil && !abierto ? 'oculto' : ''}`}>
        <h2 className="logo flex items-center gap-2">
        <img src="./src/assets/musica.png"  className="logo-img" /> Kodigo Music</h2>

        <nav>
          <Link to="/" onClick={() => setAbierto(false)}>Inicio</Link>
          <Link to="/registro" onClick={() => setAbierto(false)}>Registro</Link>
          <Link to="/contacto" onClick={() => setAbierto(false)}>Contacto</Link>
        </nav>
      </div>
    </>
  )
}

export default Navbar