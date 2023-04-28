import PropTypes from "prop-types";
import Gasto from "./Gasto";

const ListadoGastos = ({ gastos, setGastoEditar, eliminarGasto }) => {
  return (
    <div className="listado-gastps contenedor">
      <h2>{gastos.length ? "Gastos" : "No hay gastos aún"}</h2>
      {gastos.map((gasto) => (
        <Gasto
          gasto={gasto}
          setGastoEditar={setGastoEditar}
          key={gasto.id}
          eliminarGasto={eliminarGasto}
        />
      ))}
    </div>
  );
};

ListadoGastos.propTypes = {
  gastos: PropTypes.array,
  setGastoEditar: PropTypes.func,
  eliminarGasto: PropTypes.func,
};

export default ListadoGastos;
