import './css/modal.css'
import { useContext, useRef } from 'react';
import MainContext from '../../context/MainContext';

// SOCIAL MEDIA SOCIAL

const Modal = ({setShowModal}) => {

    const selectSocial = useRef();
    const inputSocial = useRef();

    const {handleAddBlock} = useContext(MainContext);

   // SET STATE OF MODAL

    const handleCloseModal = _ =>{
        setShowModal(false);
    }

    const handleClickModal = _ =>{

        document.querySelector('.modalInput').style.borderColor="#FFF";

        if(inputSocial.current.value !== ''){

            const body = {
                id:Math.floor(Math.random()*999),
                icon:selectSocial.current.value,
                name:inputSocial.current.value
            }
    
             handleAddBlock('social',body);
        }else{
            document.querySelector('.modalInput').style.borderColor="red";
        }
    }

    return (
          
        <div className="modal">
              
            <div className="modalHeader">
              <i onClick={handleCloseModal} className="bx bx-x"></i>
            </div>
              
            <div className="modalContent">
                
                <select ref={selectSocial} className="modalSelect">
                <option value="bx bxl-facebook">Facebook</option>
                <option value="bx bxl-instagram">Instagram</option>
                <option value="bx bxl-twitter">Twitter</option>
                <option value="bx bxl-linkedin-square">Linkedin</option>
                <option value="bx bxl-youtube">Youtube</option>
                <option value="bx bxl-twitch">Twitch</option>
                </select>
                
                <input placeholder="Nombre" className="modalInput" ref={inputSocial} type="text" />
                <button className="modalButton" onClick={handleClickModal}>Agregar</button>
            
            </div>
        
        </div>
    )
}

export default Modal
