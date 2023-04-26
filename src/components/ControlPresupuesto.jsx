import PropTypes from "prop-types";

const ControlPresupuesto = ({presupuesto}) => {

  const formatearCantitdad = (cantidad) =>{
    
    return cantidad.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    })
  }
  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
      <div>
        <p>Gráfica aquí</p>
      </div>
      <div className='contenido-presupuesto'>
        <p>
          <span>Presupuesto:</span>{formatearCantitdad(presupuesto)}
        </p>
        <p>
          <span>Disponible:</span>{formatearCantitdad(0)}
        </p>
        <p>
          <span>Gastado:</span>{formatearCantitdad(0)}
        </p>

      </div>
    </div>
  )
}

ControlPresupuesto.propTypes= {
  presupuesto: PropTypes.number,
};

export default ControlPresupuesto