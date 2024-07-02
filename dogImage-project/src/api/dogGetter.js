
import axios from 'axios';

const url = import.meta.env.VITE_API_URL

   export const fetchDogImage =  () => {

        return(   
            axios.get(url).then(
                (res)=>{ 
                    return res;
                },
                (error)=>{
                    console.log(error,"Error")
                }
        ))
        
    };   
    
