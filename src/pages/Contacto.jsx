import { useForm } from "react-hook-form";
import { useState } from "react";
import "./form.css";

function Contacto() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
    reset  
  } = useForm({ mode: "onTouched" });

  const [mensajeEnviado, setMensajeEnviado] = useState(false);
  const [abierta, setAbierta] = useState(null);

  const enviar = () => {
    setMensajeEnviado(true);
    reset();
    setTimeout(() => {
      setMensajeEnviado(false);
    }, 4000); // Ocultar después de 4 segundos
  };

  const preguntasFrecuentes = [
    {
      pregunta: "¿Qué es Kodigo Music?",
      respuesta:
        "Es una plataforma de streaming musical que te permite escuchar millones de canciones, podcast, crear listas personalizadas y descubrir nuevos artistas todos los días."    },
    {
      pregunta: "¿Kodigo Music es gratis?",
      respuesta:
        "Ofrecemos una versión gratuita con anuncios y una suscripción premium sin interrupciones publicitarias, con descarga de canciones y más beneficios."
    },
    {
      pregunta: "¿Puedo descargar música para escuchar offline?",
      respuesta:
        "Sí, con la versión Premium puedes descargar canciones y escucharlas sin conexión a Internet."
    },
    {
      pregunta: "¿Está disponible en mi país?",
      respuesta:
        "Kodigo Music está disponible en la mayoría de países de Latinoamérica. Puedes verificar la disponibilidad en tu tienda de aplicaciones."
    },
    {
      pregunta: "¿Cómo cancelo mi suscripción?",
      respuesta:
        "Puedes cancelar tu suscripción desde la sección de configuración de tu cuenta, en cualquier momento."
    },
    {
      pregunta: "¿Puedo subir mi propia música?",
      respuesta:
        "Sí. Si eres artista independiente o tienes un sello, puedes registrarte en nuestra sección para creadores y enviar tu contenido."
    }
  ];

  const togglePregunta = (index) => {
    setAbierta(abierta === index ? null : index);
  };

  return (
    <div className="contacto-pagina text-white max-w-6xl">
      <h2 className="text-3xl font-bold mb-10 text-center">Contáctanos</h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* FORMULARIO */}
        <form onSubmit={handleSubmit(enviar)} className="faq-container">
          {mensajeEnviado && (
            <div className="mensaje-exito">
              <p className="titulo">📩 ¡Mensaje enviado con éxito!</p>
              <p className="detalle">Un encargado de Kodigo Music se contactará contigo para resolver tus dudas.</p>
            </div>
          )}

          <label>Nombre</label>
          <input
            {...register("nombre", {
              required: "Ingrese su nombre. Campo Obligatorio",
              pattern: {
                value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
                message: "Solo letras"
              }
            })}
            onBlur={() => trigger("nombre")}
          />
          {errors.nombre && (
            <div className="tooltip-error">{errors.nombre.message}</div>
          )}

          <label>Correo</label>
          <input
            type="email"
            {...register("email", {
              required: "Ingrese un correo. Campo Obligatorio",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Correo inválido"
              }
            })}
            onBlur={() => trigger("email")}
          />
          {errors.email && (
            <div className="tooltip-error">{errors.email.message}</div>
          )}

          <label>Mensaje</label>
          <textarea
            {...register("mensaje", {
              required: "Ingrese un mensaje. Campo Obligatorio",
              minLength: {
                value: 10,
                message: "Ingrese como mínimo 10 caracteres"
              }
            })}
            onBlur={() => trigger("mensaje")}
          />
          {errors.mensaje && (
            <div className="tooltip-error">{errors.mensaje.message}</div>
          )}

          <button type="submit" className="boton-enviar">
            <b>Enviar</b>
          </button>
        </form>

        {/* PREGUNTAS FRECUENTES */}
        <div className="faq-container">
          <h2 className="text-2xl font-semibold mb-6 text-center md:text-left">Preguntas Frecuentes</h2>
          {preguntasFrecuentes.map((item, index) => (
            <div key={index} className="faq-item">
              <button
                onClick={() => togglePregunta(index)}
                className="faq-question"
              >
                <span className="faq-text">{item.pregunta}</span>
                <span
                  className={`faq-arrow ${abierta === index ? "rotated" : ""}`}
                >
                  ▼
                </span>
              </button>
              {abierta === index && (
                <div className="faq-answer">{item.respuesta}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contacto;
