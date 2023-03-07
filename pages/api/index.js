import axios from "axios";



const baseUrl = 'https://backend.discoverinfluencer.in/';

const callApi = (method, url, data) => {
  return axios({
    method:method,
    url: baseUrl + url,
    data: data
  })
}

export default callApi;


