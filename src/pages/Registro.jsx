import { useForm } from 'react-hook-form';
import { useState } from "react";
import './form.css';
import { FiEye, FiEyeOff } from "react-icons/fi";

function Registro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    trigger,
    reset
  } = useForm({ mode: 'onTouched' });

  const [mensajeEnviado, setMensajeEnviado] = useState(false);
  const [verPassword, setVerPassword] = useState(false);
  const [verConfirmar, setVerConfirmar] = useState(false);

  const toggleVerPassword = () => setVerPassword(!verPassword);
  const toggleVerConfirmar = () => setVerConfirmar(!verConfirmar);

  const enviar = () => {
    setMensajeEnviado(true);
    reset();
    setTimeout(() => {
      setMensajeEnviado(false);
    }, 4000);
  };

  return (
    <div className="contacto-pagina text-white max-w-6xl">
      <h2 className="text-3xl font-bold mb-10 text-center">Regístrate</h2>

      <div className="grid md:grid-cols-2 gap-10">
        <form onSubmit={handleSubmit(enviar)} className="faq-container">

          {mensajeEnviado && (
            <div className="mensaje-exito">
              <p className="titulo">✅ ¡Te has registrado exitosamente!</p>
              <p className="detalle">Ya puedes ingresar con tus credenciales.</p>
            </div>
          )}

          <label>Usuario</label>
          <input
            {...register("usuario", {
              required: "Ingresa tu usuario. Campo obligatorio",
              minLength: {
                value: 5,
                message: "Debe tener al menos 5 caracteres"
              },
              validate: {
                tieneLetras: (valor) =>
                  /[A-Za-z]/.test(valor) || "Debe contener al menos una letra",
                tieneNumeros: (valor) =>
                  /[0-9]/.test(valor) || "Debe contener al menos un número",
                soloLetrasYNumeros: (valor) =>
                  /^[A-Za-z0-9]+$/.test(valor) || "Solo letras y números sin espacios"
              }
            })}
            onBlur={() => trigger("usuario")}
          />
          {errors.usuario && <div className="tooltip-error">{errors.usuario.message}</div>}

          <label>Nombre</label>
          <input
            {...register("nombre", {
              required: "Ingrese su Nombre. Campo obligatorio",
              minLength: {
                value: 2,
                message: "Debe tener al menos 2 caracteres"
              },
              pattern: {
                value: /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/,
                message: "Solo letras"
              }
            })}
            onBlur={() => trigger("nombre")}
          />
          {errors.nombre && <div className="tooltip-error">{errors.nombre.message}</div>}

          <label>Contraseña</label>
          <div className="campo-password">
            <input
              type={verPassword ? "text" : "password"}
              {...register("password", {
                required: "Ingrese la contraseña. Campo obligatorio",
                minLength: {
                  value: 8,
                  message: "Mínimo 8 caracteres"
                },
                validate: {
                  tieneMayuscula: (valor) =>
                    /[A-Z]/.test(valor) || "Debe contener al menos una letra mayúscula",
                  tieneMinuscula: (valor) =>
                    /[a-z]/.test(valor) || "Debe contener al menos una letra minúscula",
                  tieneNumero: (valor) =>
                    /[0-9]/.test(valor) || "Debe contener al menos un número",
                  tieneEspecial: (valor) =>
                    /[!@#$%^&*(),.?":{}|<>]/.test(valor) || "Debe contener al menos un carácter especial",
                  sinEspacios: (valor) =>
                    !/\s/.test(valor) || "No se permiten espacios"
                }
              })}
              onBlur={() => trigger("password")}
            />
          <button type="button" className="ver-btn" onClick={toggleVerPassword}>
            {verPassword ? <FiEyeOff /> : <FiEye />}
          </button>

          </div>
            {errors.password && <div className="tooltip-error">{errors.password.message}
          </div>}

          <label>Confirmar Contraseña</label>
          <div className="campo-password">
            <input
              type={verConfirmar ? "text" : "password"}
              {...register("confirmar", {
                required: "Confirme su contraseña. Campo obligatorio",
                validate: (valor) =>
                  valor === getValues("password") || "Las contraseñas no coinciden"
              })}
              onBlur={() => trigger("confirmar")}
            />
            <button
  type="button"
  className="ver-btn"
  onClick={toggleVerConfirmar}
>
  {verConfirmar ? <FiEyeOff /> : <FiEye />}
</button>

          </div>
          {errors.confirmar && <div className="tooltip-error">{errors.confirmar.message}</div>}

          <button type="submit" className="boton-enviar"><b>Enviar</b></button>
        </form>
      </div>
    </div>
  );
}

export default Registro;
