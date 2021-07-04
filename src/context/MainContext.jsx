import { useState,createContext } from "react";

// WARNING HANDLER CONTENT EDITABLE

  console.error = (function(_error) {
      return function(message) {
        if (typeof message !== 'string' || message.indexOf('component is `contentEditable`') === -1) {
          _error.apply(console, arguments)
        }
      }
    })(console.error)

  const MainContext = createContext();

    const MainProvider = ({children}) =>{

        // GET THEME LOCAL STORAGE AND SET ON USESTATE
        
        const [selectedTheme,setSelectedTheme] = useState(localStorage.getItem('selected-theme'));
        
        // GET ICON (DARK/LIGHT) LOCAL STORAGE AND SET ON USESTATE
        
        const [iconTheme,setIconTheme] = useState(localStorage.getItem('icon-theme'));
        
        // GET IMAGE FILE LOCAL STORAGE AND SET ON USESTATE

        const [imgFile,setImgFile] = useState(localStorage.getItem('img-file'));
        
        //GET ALL INFO OF CV FROM LOCAL STORAGE AND SET ON USESTATE 

        const [localInfo,setLocalInfo] = useState(JSON.parse(localStorage.getItem('info'))||{});

        // THEME SELECTED CONFIGURATION
        
        selectedTheme && document.body.classList.add(selectedTheme);

        const getCurrentTheme = color =>{
            return document.body.classList.contains(color) ? color : '';
        }

        const getCurrentIcon = icon =>{
            return icon.contains('bxs-moon') ? 'bxs-moon' : 'bxs-sun';
        }

        const handleTheme = e =>{
            document.body.classList.toggle('dark');
            setSelectedTheme(getCurrentTheme('dark'));
            localStorage.setItem('selected-theme',getCurrentTheme('dark'));
            e.target.classList.toggle('bxs-moon');
            setIconTheme(getCurrentIcon(e.target.classList));
            localStorage.setItem('icon-theme',getCurrentIcon(e.target.classList));
        }

        // END THEME SELECTED CONFIGURATION

        // FILE INPUT HANDLER

        const handleFileInput = e =>{

            if ( /\.(jpe?g|png|gif)$/i.test(e.target.files[0].name) === false ) 
            { 
              return alert("Solo acepta archivos de imagén (.jpg,.png,.gif)"); 
            }
            let reader = new FileReader();
        
            reader.onload = function() {
        
                document.querySelector('#image-upload');
                document.querySelector('.leftImgUpload').setAttribute('src',reader.result);
                setImgFile(reader.result);
                localStorage.setItem('img-file',reader.result);
            
            }
              reader.readAsDataURL(e.target.files[0]);
        }

        // RE ASIGN TO USESTATE AND LOCAL STORAGE REFRESH
        
        const refreshLocal = _ =>{
          localStorage.setItem('info',JSON.stringify(localInfo));
          setLocalInfo(JSON.parse(localStorage.getItem('info')));
        }

        // ADD INFO BLOCK HANDLER

        const handleAddBlock = (name,body) =>{

          if(!localInfo[name]){
            localInfo[name] = [body];
            }else{
              localInfo[name].push(body);
            }
            
            refreshLocal();
        }

        // UPDATE INFO HANDLER

        const handleChangeFill = (name,id,{field,value}) =>{

            if(name === 'single'){

              localInfo[field] = value;
            }else{
                
              const find = localInfo[name].find(item=>item.id === id);
              find[field] = value;
            }
            
            localStorage.setItem('info',JSON.stringify(localInfo));
          }
    
          //REMOVE INFO HANDLER

        const handleRemoveBlock = (name,id) =>{
        
          localInfo[name].filter((item,i)=>{
            if(item.id===id){
              return localInfo[name].splice(i,1);
            }else{
              return '';
            }
          })
      
          refreshLocal();

        }

        //SET ALL CONST AND FUNCTIONS FOR USE IN ANOTHER COMPONENTS
        const data = {handleTheme,iconTheme,imgFile,handleFileInput,localInfo,handleChangeFill,handleAddBlock,handleRemoveBlock};

            return <MainContext.Provider value={data}>
                    {children}
                    </MainContext.Provider>
        }

   export {MainProvider};

export default MainContext;