import CerrarBtn from '../img/cerrar.svg'
import PropTypes from 'prop-types'

const Modal = ({setModal}) => {
  const ocultarModal = () =>{
   setModal(false)
  }
  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={CerrarBtn} alt='Cerrar modal' onClick={ocultarModal}/>
      </div>
    </div>
  )
}

Modal.propTypes={
  setModal : PropTypes.func,
}

export default Modal