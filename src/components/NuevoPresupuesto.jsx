import PropTypes from "prop-types";
import { useState } from "react";
import Mensaje from "./Mensaje";

const NuevoPresupuesto = ({
  presupuesto,
  setPresupuesto,
  setIsValidPresupuesto,
}) => {
  const [mensaje, setMensaje] = useState("");

  const handlePresupuesto = (e) => {
    e.preventDefault();

    if (!presupuesto || presupuesto < 0) {
      setMensaje("No es un presupuesto válido");
      return;
    }

    setMensaje("");
    setIsValidPresupuesto(true)
  };
  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form className="formulario" onSubmit={handlePresupuesto}>
        <div className="campo">
          <label>
            {" "}
            <strong>Definir Presupuesto</strong>
          </label>
          <input
            className="nuevo-presupuesto"
            type="number"
            placeholder="Añade tu presupesto"
            value={presupuesto}
            onChange={(e) => setPresupuesto(Number(e.target.value))}
          />
        </div>
        <input type="submit" value="añadir" />
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
      </form>
    </div>
  );
};

NuevoPresupuesto.propTypes = {
  presupuesto: PropTypes.number,
  setPresupuesto: PropTypes.func,
  setIsValidPresupuesto: PropTypes.func
};

export default NuevoPresupuesto;
