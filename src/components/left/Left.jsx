import { useState,useContext } from "react"
import  MainContext  from "../../context/MainContext"
import './css/left.css'
import Social from "./social/Social";
import Education from "./education/Education";
import Skill from "./skill/Skill";
import html2pdf from '@types/html2pdf.js';
import Modal from "../modal/Modal";

const Left = () => {



    // CONSUME THE CONTEXT
   
    const {handleTheme,iconTheme,imgFile,handleFileInput,localInfo,handleChangeFill,handleAddBlock} = useContext(MainContext);
   
   //MODAL STATE

    const [showModal,setShowModal] = useState(false);

   //OPTIONS FOR DOWNLOAD THROUGH html2pdf library

   const optDownload = {
    margin: 0.2,
    filename: 'micurri.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 3, letterRendering:true },
    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
};

// DOWNLOAD PDF FILE

   const handleDownload = _ =>{
    
        const element = document.querySelector('.App');
        document.body.classList.add('print');
        html2pdf(element,optDownload); 

        setTimeout(_=>{
            document.body.classList.remove('print');

        },5000);
    }

  //SOCIAL MODAL HANDLER (set useState)
  
  const showPopup = e =>{
   
    setShowModal(true);
  
   }

// CONTENT EDIT INSIDE HTML ELEMENT

   const handleEditElementLeft = e =>{
        const edit = {

            field:e.target.dataset.field,
            value:e.target.innerText
        }
    

       handleChangeFill('single',0,edit);
   }

   // ADD NEW BLOCKS BY CATEGORY

   const handleAddEducation = _ =>{

    const body = {

        id:Math.floor(Math.random()*999),
        degree:'Titulo o Diploma',
        school:'Institución',
        year:'0000-0000'
    }
      
       handleAddBlock('education',body);
   }

   const handleAddSkill = _ =>{

    const body = {
        id:Math.floor(Math.random()*999),
        name:'Habilidad'
    }

    handleAddBlock('skill',body);

   }

   // END ADD NEW BLOCKS BY CATEGORY

    return (
        <div className="left">

            <div className="leftContainerIcon">
               
                <i onClick={handleDownload} className="bx bxs-download leftIcon leftIconPrint"></i>    
                <i className={`bx ${iconTheme?iconTheme:'bxs-moon'} leftIcon leftIconPrint`} onClick={handleTheme}></i>
            
            </div>
           
            <div id="image-upload" className="leftContainerImgUpload">
               
                <input onChange={handleFileInput} className="leftFileImg" id="file-input" type="file" accept="image/*" />
                <label htmlFor="file-input">
                    <i title="Subir Imagén" className='bx bxs-up-arrow-alt leftIcon leftIconFile leftIconPrint'></i>
                </label>
                <img className="leftImgUpload" src={imgFile || './assets/img/perfil.png'} alt="perfil" />
            
            </div>
            
            <h5 contentEditable="true" data-field="name" onInput={handleEditElementLeft} className="leftContainerInfoGral">
               {localInfo.name ?localInfo?.name : 'Nombre'}
            </h5>
            
            <h6 className="leftContainerInfoGral leftContainerInfoGralProf" contentEditable="true" data-field="degree" onInput={handleEditElementLeft}>
            {localInfo.degree?localInfo?.degree:'Profesión'}
            </h6>
            
            <div className="leftContainerInfoPer">
              
                <i className="bx bx-map leftIcon"></i>
                <div data-field="address" onInput={handleEditElementLeft} contentEditable="true" className="leftInfoPer">
                {localInfo.address?localInfo?.address:'Dirección'}
                </div>
           
            </div>

            <div className="leftContainerInfoPer">
                
                <i className="bx bx-envelope leftIcon"></i>
                <div contentEditable="true" data-field="mail" className="leftInfoPer" onInput={handleEditElementLeft}>
                {localInfo.mail?localInfo?.mail:'Correo Electrónico'}
                </div>
            
            </div>
            
            <div className="leftContainerInfoPer">
              
                <i className="bx bx-phone leftIcon"></i>
                <div data-field="phone" onInput={handleEditElementLeft}  contentEditable="true" className="leftInfoPer">
                {localInfo.phone?localInfo?.phone:"Teléfono"}
                </div>
           
            </div>

            <div className="leftTitleContainer">
                
                <h5 className="leftTitle">Social
                   {
                        showModal 
                        && 
                        <Modal setShowModal={setShowModal}/>
                    }
                </h5>
                <i onClick={showPopup} className='bx bx-plus-circle leftIconPlus' ></i>
            
             </div>
            
            {
                localInfo.social && localInfo?.social.map(item=>(

                     <Social  key={item.id} {...item} />
                ))
                        
             }
             
            <h5 style={{marginTop:"45px"}} className="leftTitle">Perfil</h5>
         
            <h6 contentEditable="true" data-field="perfil" onInput={handleEditElementLeft} className="leftPerfilContent">
            {localInfo.perfil?localInfo?.perfil:'Describete...'}
            </h6>
            
            <div className="leftTitleContainer">
           
                <h5 className="leftTitle">Educaci&oacute;n</h5>
                <i data-name="education" onClick={handleAddEducation}  className='bx bx-plus-circle leftIconPlus'></i>
           
            </div>

            {
                localInfo.education && localInfo?.education.map(item=>(

                    <Education  key={item.id} {...item} />
                ))
            }
            
            <div className="leftTitleContainer">
                
                <h5 className="leftTitle">Habilidades</h5>
                <i onClick={handleAddSkill}  className='bx bx-plus-circle leftIconPlus'></i>
            
            </div>
            
            {
                localInfo.skill && localInfo?.skill.map(item=>(

                    <Skill key={item.id} {...item} />
                ))
            }
        </div>
    )
}

export default Left
