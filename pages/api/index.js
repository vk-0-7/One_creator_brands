import axios from "axios";

const brandRequest=async(data)=>{

    try {
      const res=await axios.post('https://backend.discoverinfluencer.in/user/partner-brand-request',data)
        
    } catch (error) {
        
    }
}