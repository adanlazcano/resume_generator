import {useContext} from 'react'
import MainContext from '../../../context/MainContext'

// ADD SOCIAL MEDIA BLOCK

const Social = ({icon,name,id}) => {

    const {handleChangeFill,handleRemoveBlock} = useContext(MainContext);

    // EDIT SOCIAL

    const handleEditSocial = e =>{

        const edit = {
            field:e.target.dataset.field,
            value:e.target.innerText
        }
    
        handleChangeFill('social',id,edit);
    }

    // REMOVE SOCIAL

    const handleRemoveSocial = _ =>{

            handleRemoveBlock('social',id);
    }

    return (
      
        <div className="leftSocialContainer">
            
            <i className={`${icon} leftIcon`}></i>
            <div data-field="name" onInput={handleEditSocial} contentEditable="true" className="leftSocialContent">
            {name?name:'@Dirección'}
            </div>
            <i onClick={handleRemoveSocial} className="bx bx-trash leftIcon leftIconSocialTrash"></i>
        
        </div>
        
    )
}

export default Social
