import {useContext} from 'react'
import MainContext from '../../../context/MainContext'

// COURSE BLOCK

const Course = ({id,name}) => {

    const {handleChangeFill,handleRemoveBlock} = useContext(MainContext);

    // EDIT COURSE

    const handleEditCourse = e =>{
        
        const edit = {
            field:e.target.dataset.field,
            value:e.target.innerText
        }
    
        handleChangeFill('course',id,edit);
    }

    // REMOVE COURSE

    const handleRemoveCourse = _ =>{

        handleRemoveBlock('course',id);
    }

    return (
  
        <div className="rightContentCourses">
            
            <i className="bx bx-radio-circle-marked leftIcon"></i>
            <h6 onInput={handleEditCourse} contentEditable="true" data-field="name" className="rightContentCourse">{name?name:'Nombre'}</h6>
            <i onClick={handleRemoveCourse} className="bx bx-trash rightIconTrash"></i>
        
        </div>
    )
}

export default Course
