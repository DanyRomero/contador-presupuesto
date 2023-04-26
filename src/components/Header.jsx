import NuevoPresupuesto from "./NuevoPresupuesto";
import PropTypes from "prop-types";
import ControlPresupuesto from "./ControlPresupuesto";


const Header = ({
  presupuesto,
  setPresupuesto,
  isValidPresupuesto,
  setIsValidPresupuesto,
}) => {
  return (
    <header>
      <h1>Planificador de gastos</h1>
      {isValidPresupuesto ? (
        <ControlPresupuesto presupuesto={presupuesto} />
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
  presupuesto: PropTypes.number,
  setPresupuesto: PropTypes.func,
  setIsValidPresupuesto: PropTypes.func,
  isValidPresupuesto: PropTypes.bool,
}
export default Header;
