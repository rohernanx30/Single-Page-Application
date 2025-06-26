import React, { useState } from "react";
import "./Inicio.css";
import { FaCircleUser } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";

function Inicio() {
  const [toast, setToast] = useState(null);
  const [busqueda, setBusqueda] = useState("");

  const mostrarToast = (mensaje) => {
    setToast(mensaje);
    setTimeout(() => setToast(null), 3000); // Se oculta después de 3 segundos
  };

  const manejarBusqueda = (e) => {
    e.preventDefault();
    if (busqueda.trim() !== "") {
      mostrarToast("🔍 Buscando...");
      setBusqueda(""); // limpiar campo
    }
  };

  return (
    <>
      {/* TOAST - solo 1 vez */}
      {toast && (
        <div className={`toast ${toast === "🔍 Buscando..." ? "toast-arriba" : ""}`}>
          {toast}
        </div>
      )}

      <div className="inicio-container">
        <div className="top-bar">
          <input
            type="text"
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            placeholder="¿Qué quieres reproducir?"onKeyDown={(e) => e.key === "Enter" && manejarBusqueda(e)}
          />
          
          <button className="premium-btn" onClick={() => mostrarToast("Ingresaste para volverte usuario premium")}>
            <span className="premium-text">Explorar Premium</span> <FaStar className="premium-icon" />
          </button>
          <button className="perfil"onClick={() => mostrarToast("Ingresaste a tu perfil")}>
            <FaCircleUser/>
          </button>
        </div>

        <div className="categorias">
          <button className="activo" onClick={() => mostrarToast("Estás en la sección Todo")}>Todo</button>
          <button onClick={() => mostrarToast("Estás en la sección de Música")}>Música</button>
          <button onClick={() => mostrarToast("Estás en la sección de Podcast")}>Podcasts</button>
        </div>

        <div className="playlist-grid">
          <div className="playlist-card">
            <img src="./src/assets/shaki.jpg" alt="Shakira" />
              <div className="playlist-info">
                <p className="playlist-titulo">Shakira</p>
                <span className="playlist-desc">Las mujeres ya no lloran</span>
              </div>
          </div>

          <div className="playlist-card">
            <img src="./src/assets/cree.jpg" alt="Maluma" />
              <div className="playlist-info">
                <p className="playlist-titulo">Maluna y Karol G</p>
                <span className="playlist-desc">Recordando sus inicios</span>
              </div>
          </div>

          <div className="playlist-card">
            <img src="./src/assets/mami.jpg" alt="Feid" />
            <div className="playlist-info">
              <p className="playlist-titulo">Mami-Karol G y Becky G</p>
              <span className="playlist-desc">Lo que no sirve, que no estorbe</span>
            </div>
          </div>

          <div className="playlist-card">
            <img src="./src/assets/peso.jpg" alt="Peso" />
              <div className="playlist-info">
                <p className="playlist-titulo">Lo más nuevo</p>
                <span className="playlist-desc">Actualización semanal de Peso Pluma</span>
              </div>
          </div>
        </div>

        <div className="seccion">
          <h2>Similares a Rauw Alejandro</h2>
            <div className="tarjetas">
              <div className="tarjeta">
                <img src="./src/assets/cardi.jpg" alt="CardiB" />
                <p>I LIKE IT</p>
                <span>Cardi B</span>
              </div>

              <div className="tarjeta">
                <img src="./src/assets/Almas.jpg" alt="Almas Gemelas" />
                <p>ALMAS GEMELAS</p>
                <span>Myke Towers</span>
              </div>

              <div className="tarjeta">
                <img src="./src/assets/feidnormal.jpg" alt="Feid" />
                <p>NORMAL</p>
                <span>Feid</span>
              </div>

              <div className="tarjeta">
                <img src="./src/assets/paulo.jpg" alt="Paulo" />
                <p>CUANDO TE BESÉ</p>
                <span>Paulo Londra</span>
              </div>

              <div className="tarjeta">
                <img src="./src/assets/velda.jpg" alt="Bad" />
                <p>VELDÁ</p>
                <span>Bad Bunny</span>
              </div>

              <div className="tarjeta">
                <img src="./src/assets/victor.jpg" alt="Victor" />
                <p>MALA Y PELIGROSA</p>
                <span>Víctor Manuel</span>
              </div>
             
            </div>

          <div className="seccion">
            <h2>Hecho para ti</h2>
              <div className="tarjetas">
                <div className="tarjeta">
                  <img src="./src/assets/academy.jpg" alt="Avenger" />
                  <p>MIX DIARIO 1</p>
                  <span>The Avangers</span>
                </div>
            
                <div className="tarjeta">
                  <img src="./src/assets/Anuel.jpg" alt="Anuel" />
                  <p>MIX DIARIO 2</p>
                  <span>Anuel AA</span>
                 </div>

                <div className="tarjeta">
                  <img src="./src/assets/Jhayco.jpg" alt="Jhayco" />
                  <p>MIX DIARIO 3</p>
                  <span>Jhayco</span>
                </div>

                <div className="tarjeta">
                  <img src="./src/assets/yandel.jpg" alt="Yandel" />
                  <p>MIX DIARIO 4</p>
                  <span>Yandel</span>
                </div>

                <div className="tarjeta">
                  <img src="./src/assets/raw.jpg" alt="Rauw" />
                  <p>MIX DIARIO 5</p>
                  <span>Rauw Alejandro</span>
                </div>

                <div className="tarjeta">
                  <img src="./src/assets/balvin.jpg" alt="Jbalvin" />
                  <p>MIX DIARIO 6</p>
                  <span>JBalvin</span>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
}

export default Inicio;