import PropTypes from "prop-types";

const ControlPresupuesto = ({presupuesto}) => {
  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
      <div>
        <p>Gráfica aquí</p>
      </div>
      <div className='contenido-presupuesto'>
        <p>
          <span>Presupuesto:</span>{presupuesto}
        </p>

      </div>
    </div>
  )
}

ControlPresupuesto.propTypes= {
  presupuesto: PropTypes.number,
};

export default ControlPresupuesto