import axios from "axios";

 export const brandRequest=async(data)=>{

    try {
      const res=await axios.post('https://backend.discoverinfluencer.in/user/partner-brand-request',data)
        
    } catch (error) {
        console.log("error while making brand request",error.message)
        
    }
}