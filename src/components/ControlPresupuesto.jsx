import PropTypes from "prop-types";
import { useEffect, useState } from "react";

const ControlPresupuesto = ({presupuesto, gastos}) => {

  const [disponible, setDisponible] = useState(0)
  const [gastado, setGastado] = useState(0)
  

  useEffect(()=>{
    const totalGastado = gastos.reduce((total, gasto)=> gasto.cantidad + total, 0)
    setGastado(totalGastado)
    const restante = presupuesto - totalGastado
    setDisponible(restante)
  }, [gastos])


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
          <span>Presupuesto: </span>{formatearCantitdad(presupuesto)}
        </p>
        <p>
          <span>Disponible: </span>{formatearCantitdad(disponible)}
        </p>
        <p>
          <span>Gastado: </span>{formatearCantitdad(gastado)}
        </p>

      </div>
    </div>
  )
}

ControlPresupuesto.propTypes= {
  presupuesto: PropTypes.number,
  gastos: PropTypes.array,
};

export default ControlPresupuesto