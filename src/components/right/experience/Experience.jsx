import {useContext} from 'react'
import MainContext from '../../../context/MainContext'

// EXPERIENCE BLOCK

const Experience = ({id,charge,place,fun}) => {

    const {handleChangeFill,handleRemoveBlock} = useContext(MainContext);

    // EDIT EXPERIENCE

    const handleEditExp = e =>{
        
        const edit = {
            field:e.target.dataset.field,
            value:e.target.innerText
        }
    
        handleChangeFill('experience',id,edit);
    }

    // REMOVE EXPERIENCE

    const handleRemoveExp = _ =>{

        handleRemoveBlock('experience',id);
    }

    return (
      
        <div className="rightContainerExp">
            <div className="rightContainerExpContent">
                
                <h6 data-field="charge" onInput={handleEditExp} contentEditable="true" className="rightContainerExpCharge rightContentExp">
                        {charge?charge:'Cargo'}
                </h6>
                <h6 data-field="place" onInput={handleEditExp} contentEditable="true" className="rightContainerExpPlace rightContentExp">
                        {place?place:"Empresa o Compañía"}
                </h6>
                <h6 data-field="fun" onInput={handleEditExp} contentEditable="true" className="rightContainerExpFun"> 
                        {fun?fun:"Descripción"}
                </h6>
            
            </div>
            
            <i onClick={handleRemoveExp} className="bx bx-trash rightIconTrash"></i>
         
         </div>
  
  
    )
}

export default Experience
