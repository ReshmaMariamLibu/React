
import axios from 'axios';


   export const fetchDogImage =  () => {

        return(   
            axios.get('https://dog.ceo/api/breeds/image/random').then(
                (res)=>{ 
                    return res;
                },
                (error)=>{
                    console.log(error,"Error")
                }
        ))
        
    };   
    
