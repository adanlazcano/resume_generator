import './css/help.css'
const Help = _ =>{

    //HELP CONTAINER
    
    window.addEventListener('click',_=>{
        document.querySelector('.helpContainer').classList.remove('active');
    })

    const handleHelp = e =>{
     e.stopPropagation();
        document.querySelector('.helpContainer').classList.toggle('active');
    }

    return(
        <div className="help">
        
            <i onClick={handleHelp} className="bx bx-help-circle helpIcon"></i>

            <div className="helpContainer">
                <h4>Bienvenid@ a tu Generador de CV</h4>
                
                <hr/>
                
                <br/>
                
                <h5>Puedes comenzar a cambiar el contenido presionando dentro de los t&iacute;tulos y subir tu fotograf&iacute;a dando clic en  &nbsp;<i style={{background:"gray",borderRadius:"50%"}} className="bx bxs-up-arrow-alt"></i></h5>
                <br/>

                <h5>Tambi&eacute;n puedes agregar 1 o m&aacute;s: <br/><br/>
                <b>Redes Sociales, Habilidades, Experiencia, Cursos, Idiomas e Intereses en el icono</b>&nbsp;&nbsp;<i className='bx bx-plus-circle' ></i></h5>
                
                <br/>

                <h5>Cuando completes tu CV podr&aacute;s descargarlo en PDF presionando &nbsp;<i className="bx bxs-download"></i></h5>

                <br/>
                
                <h5 style={{textAlign:"center"}}>Felicidades y te deseo much&iacute;sima suerte para lograr tus metas 👍🧐👏 !!</h5>

            </div> 

        </div>
    )
}

export default Help