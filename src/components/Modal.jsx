import { useState } from "react";
import PropTypes from "prop-types";
import CerrarBtn from "../img/cerrar.svg";
import Mensaje from "./Mensaje";


const Modal = ({ setModal, animarModal, setAnimarModal, guardarGasto }) => {

  const [nombre, setNombre] = useState('')
  const [cantidad, setCantidad] = useState('')
  const [categoria, setCategoria] = useState('')
  const [mensaje, setMensaje] = useState('')

  const ocultarModal = () => {
    setAnimarModal(false);
    setTimeout(() => {
      setModal(false);
    }, 500);
  };
 
  const handleSubmit = (e) =>{
    e.preventDefault()
    if([nombre, cantidad, categoria].includes("")){
        console.log('falló')
        setMensaje('Todos los campos son obligatorios')
        setTimeout(()=>{
          setMensaje('')
        },2000)
        return
    }
    guardarGasto({nombre, cantidad, categoria})
  }
  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CerrarBtn} alt="Cerrar modal" onClick={ocultarModal} />
      </div>
      <form className={`formulario ${animarModal ? "animar" : "cerrar"}`} onSubmit={handleSubmit}>
        <legend>Nuevo Gasto</legend>
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        <div className="campo">
          <label htmlFor="nombre">Nombre Gasto</label>
          <input
            id="nombre"
            type="text"
            placeholder="Añade el nombre de gasto"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="cantidad">Cantidad Gasto</label>
          <input
            id="cantidad"
            type="number"
            placeholder="Añade la cantidad del gasto: ej. 300"
            value={cantidad}
            onChange={e => setCantidad(Number(e.target.value))}

          />
        </div>
        <div className="campo">
          <label htmlFor="categoria">Categoría</label>
          <select id="categoria" 
            value={categoria}
            onChange={e => setCategoria(e.target.value)}>
            <option value="">-- Seleccione --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos Varios</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
    
          </select>
        </div>
        <input  type="submit" value="Añadir Gasto"/>
      </form>
      
    </div>
  );
};

Modal.propTypes = {
  setModal: PropTypes.func,
  animarModal: PropTypes.bool,
  setAnimarModal: PropTypes.func,
  guardarGasto: PropTypes.func
};

export default Modal;
