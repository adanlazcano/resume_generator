import { useContext } from "react"
import MainContext from "../../../context/MainContext"

// BLOCK SKILLS

const Skill = ({id,name}) => {

    const{handleChangeFill,handleRemoveBlock} = useContext(MainContext);

    // EDIT SKILL 
    
    const handleEditSkill = e =>{

        const edit = {
            field:e.target.dataset.field,
            value:e.target.innerText
        }
        handleChangeFill('skill',id,edit);
    }

    //REMOVE SKILL

    const handleRemoveSkill = e =>{
        handleRemoveBlock('skill',id);
    }
    
    return (
           
        <div className="leftSkillsContainer">

            <i className="bx bxs-award leftIcon leftIconSkills"></i>
            <h6 contentEditable="true" data-field="name" onInput={handleEditSkill} className="leftSkillsContent">{name?name:'Habilidad'}</h6>
            <i onClick={handleRemoveSkill} className="bx bx-trash leftIcon leftIconSocialTrash"></i>

        </div>
    )
}

export default Skill
