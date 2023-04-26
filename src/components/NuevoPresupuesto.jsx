import React from 'react'

const NuevoPresupuesto = ({presupuesto, setPresupuesto}) => {
  return (
    <div className='contenedor-presupuesto contenedor sombra'>
      <form className='formulario'>
        <div className='campo'>
          <label> <strong>Definir Presupuesto</strong></label>
          <input 
            className='nuevo-presupuesto'
            type='text'
            placeholder='Añade tu presupesto'
            value={presupuesto}
            onChange={e => setPresupuesto(e.target.value)}
          />
        </div>
        <input type='submit' value="añadir" />
      </form>
    </div>
  )
}

export default NuevoPresupuesto