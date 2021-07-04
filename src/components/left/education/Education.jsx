import { useContext } from "react"
import MainContext from "../../../context/MainContext"

// BLOCK EDUCATION

const Education = ({id,degree,school,year}) => {

    const{handleChangeFill,handleRemoveBlock} = useContext(MainContext);

    //  CONTENT EDIT INSIDE HTML ELEMENT

    const handleEditEducation = e =>{

        const edit = {
            field:e.target.dataset.field,
            value:e.target.innerText
        }
        handleChangeFill('education',id,edit);
    }

    // REMOVE BLOCK

    const handleRemoveEducation = _ =>{
    
         handleRemoveBlock('education',id);

    }

    return (
        
        <div className="leftEducation">
            
            <div className="leftEducationInfo">

                <h6 data-field="degree" onInput={handleEditEducation} contentEditable="true" className="leftEducationDegree">{degree?degree:"Titulo o Diploma"}</h6>
                <h6 data-field="school" onInput={handleEditEducation}  contentEditable="true" className="leftEducationSchool">{school?school:'Institución'}</h6>
                <h6 data-field="year" onInput={handleEditEducation}  contentEditable="true" className="leftEducationYear">{year?year:'0000-0000'}</h6>
            
            </div>

            <i onClick={handleRemoveEducation} className="bx bx-trash leftIcon leftIconSocialTrash"></i>
        
        </div>
    )
}

export default Education
