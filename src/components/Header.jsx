import NuevoPresupuesto from "./NuevoPresupuesto";
import PropTypes from "prop-types";
import ControlPresupuesto from "./ControlPresupuesto";

const Header = ({
  gastos,
  setGastos,
  presupuesto,
  setPresupuesto,
  isValidPresupuesto,
  setIsValidPresupuesto,
}) => {
  return (
    <header>
      <h1>Planificador de gastos</h1>
      {isValidPresupuesto ? (
        <ControlPresupuesto
          presupuesto={presupuesto}
          gastos={gastos}
          setGastos={setGastos}
          setPresupuesto={setPresupuesto}
          setIsValidPresupuesto= {setIsValidPresupuesto}
        />
      ) : (
        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
        />
      )}
    </header>
  );
};

Header.propTypes = {
  gastos: PropTypes.array,
  setGastos: PropTypes.func,
  presupuesto: PropTypes.number,
  setPresupuesto: PropTypes.func,
  setIsValidPresupuesto: PropTypes.func,
  isValidPresupuesto: PropTypes.bool,
};
export default Header;
