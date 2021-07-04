import {useContext} from 'react'
import MainContext from '../../../context/MainContext'

// LANGUAGE BLOCK

const Language = ({id,name}) => {

    const {handleChangeFill,handleRemoveBlock} = useContext(MainContext);

    // EDIT LANGUAGE

    const handleEditLanguage = e =>{
        
        const edit = {
            field:e.target.dataset.field,
            value:e.target.innerText
        }
    
        handleChangeFill('language',id,edit);
    }

    // REMOVE LANGUAGE

    const handleRemoveLanguage = _ =>{

        handleRemoveBlock('language',id);
    }

    return (
      
        <div className="rightLanguagesContent">
            
            <i className="bx bx-grid-small leftIcon"></i>
            <h6 contentEditable="true" data-field="name" onInput={handleEditLanguage} className="rightLanguage">{name?name:'Idioma %'}</h6>
            <i onClick={handleRemoveLanguage} className="bx bx-trash rightIconTrash"></i>
        
        </div>
         
           
            
        
    )
}

export default Language
