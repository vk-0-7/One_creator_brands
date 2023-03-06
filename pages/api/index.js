import axios from "axios";

export const brandRequest=async(data)=>{
     const baseUrl = 'https://backend.discoverinfluencer.in/';

    try {
      const res=await axios.post('https://backend.discoverinfluencer.in/user/partner-brand-request',data)
        
    } catch (error) {
        console.log("error while making brand request",error.message)
        
    }
}

const baseUrl = 'https://backend.discoverinfluencer.in/';

const callApi = (method, url, data) => {
  return axios({
    method:method,
    url: baseUrl + url,
    data: data
  })
}

export default callApi;


