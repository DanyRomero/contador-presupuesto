import PropTypes from "prop-types";
import Gasto from "./Gasto";

const ListadoGastos = ({
  gastos,
  setGastoEditar,
  eliminarGasto,
  filtro,
  gastosFiltrados,
}) => {
  return (
    <div className="listado-gastps contenedor">
      {filtro ? (
        <>
          <h2>{gastosFiltrados.length ? "Gastos" : "No hay gastos para esta categoría"}</h2>
          {gastosFiltrados.map((gasto) => (
            <Gasto
              gasto={gasto}
              setGastoEditar={setGastoEditar}
              key={gasto.id}
              eliminarGasto={eliminarGasto}
            />
          ))}
        </>
      ) : (
        <>
          <h2>{gastosFiltrados.length ? "Gastos" : "No hay gastos aún"}</h2>
          {gastos.map((gasto) => (
            <Gasto
              gasto={gasto}
              setGastoEditar={setGastoEditar}
              key={gasto.id}
              eliminarGasto={eliminarGasto}
            />
          ))}
        </>
      )}
    </div>
  );
};

ListadoGastos.propTypes = {
  gastos: PropTypes.array,
  setGastoEditar: PropTypes.func,
  eliminarGasto: PropTypes.func,
  filtro: PropTypes.string,
  gastosFiltrados: PropTypes.array,
};

export default ListadoGastos;
