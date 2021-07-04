import {useContext} from 'react'
import MainContext from '../../context/MainContext'
import Experience from './experience/Experience'
import Course from './course/Course'
import Language from './language/Language'
import Interest from './interest/Interest'
import './css/right.css'

const Right = () => {

    //CONSUME THE CONTEXT

     const {localInfo,handleAddBlock} = useContext(MainContext);

     // ADD NEW BLOCKS BY CATEGORY

     const handleAddExperience = _ =>{

        const body = {
            id:Math.floor(Math.random()*999),
            charge:"Cargo",
            place:"Empresa o Compañía",
            func:"Descripción"

        }

        handleAddBlock('experience',body);
    }

    const handleAddCourse = _ =>{
         const body = {
             id:Math.floor(Math.random()*999),
             name:"Nombre"
         }

         handleAddBlock('course',body);
    }
     
    const handleAddLanguage = _ =>{
        const body = {
            id:Math.floor(Math.random()*999),
            name:"Idioma"
        }

        handleAddBlock('language',body);
    }

    const handleAddInterest = _ =>{
        const body = {
            id:Math.floor(Math.random()*999),
            name:"Interes"
        }

        handleAddBlock('interest',body);
    }

    // END ADD NEW BLOCKS BY CATEGORY
    
    return (
        
        <div className="right">
            
            <div className="rightTitleExpContainer">
           
                <h5 className="rightTitleExp">Experiencia</h5>
                <i onClick={handleAddExperience} className='bx bx-plus-circle rightIconPlus'></i>
           
            </div>
            
            {
                localInfo.experience && localInfo?.experience.map(item=>(

                    <Experience key={item.id} {...item} />
                ))
            }
                
            <div  className="rightTitleContainer">
            
                <h5 className="rightTitle">Cursos</h5>
                <i onClick={handleAddCourse} className='bx bx-plus-circle rightIconPlus'></i>
            
            </div>
               
            {
                 localInfo.course && 
                
                 localInfo.course.length!==0 &&
               
                    <div className="rightContainerCourses">
                    {localInfo?.course.map(item=>(

                        <Course key={item.id} {...item} />
                    ))
                    }

                    </div> 
            }
          
            <div  className="rightTitleContainer">
            
                <h5 className="rightTitle">Idiomas</h5>
                <i onClick={handleAddLanguage} className='bx bx-plus-circle rightIconPlus'></i>
            
            </div>
        
            {
                 localInfo.language && 
                
                 localInfo.language.length!==0 &&
               
                <div className="rightLanguagesContainer">
                    {localInfo?.language.map(item=>(

                        <Language key={item.id} {...item} />
                    ))
                    }

                 </div> 
            }
          
            <div className="rightTitleContainer">
            
                <h5 className="rightTitle">Intereses</h5>
                <i onClick={handleAddInterest} className='bx bx-plus-circle rightIconPlus'></i>
            
            </div>
            
            {
                 localInfo.interest && 
                
                 localInfo.interest.length!==0 &&
               
                <div className="rightInterestContainer">
                    {localInfo?.interest.map(item=>(

                        <Interest key={item.id} {...item} />
                    ))
                    }

                 </div> 
            }
        
        </div>
    )
}

export default Right
