import {useContext} from 'react'
import MainContext from '../../../context/MainContext'

// INTEREST BLOCK

const Interest = ({id,name}) => {

    const {iconTheme,handleChangeFill,handleRemoveBlock} = useContext(MainContext);
  

    // EDIT INTEREST

    const handleEditInterest = e =>{
        
        const edit = {
            field:e.target.dataset.field,
            value:e.target.innerText
        }
    
        handleChangeFill('interest',id,edit);
    }

    // REMOVE INTEREST

    const handleRemoveInterest= _ =>{

        handleRemoveBlock('interest',id);
    }
   
    return (

        <div className="rightInterestContent">
            
            <i className={`${iconTheme==='bxs-sun'?'bx bxs-happy':'bx bx-happy'} leftIcon`} ></i>
            <h6 onInput={handleEditInterest} contentEditable="true" data-field="name" className="rightInterest">{name?name:'Interes'}</h6>
            <i onClick={handleRemoveInterest} className="bx bx-trash rightIconTrash"></i>
       
        </div>
    )
}

export default Interest
