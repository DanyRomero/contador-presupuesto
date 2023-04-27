import PropTypes from "prop-types";
import { formatearFecha } from "../helpers";
const Gasto = ({ gasto }) => {
  return (
    <div className="gasto sombra">
      <div className="contenido-gasto">
        <div className="descripcion-gasto">
          <p className="categoria">{gasto.categoria}</p>
          <p className="nombre-gasto">{gasto.nombre}</p>
          <p className="fecha-gasto">
            Agregado el: <span>{formatearFecha(gasto.fecha)}</span>
          </p>
        </div>
      </div>
      <p className="cantidad-gasto"> ${gasto.cantidad}</p>
    </div>
  );
};
Gasto.propTypes = {
  gasto: PropTypes.object,
};
export default Gasto;
