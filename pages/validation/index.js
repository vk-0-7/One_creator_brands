
 export  const validateEmail=(email)=>{

 if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return true;
      }
    else{
       return  false;
    }

}
 export default function isValidUrl(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
  }



// export  {validateEmail, isValidUrl}

// export default isValidUrl