
const validateEmail=(email)=>{


    if (email.trim() === '') {
        return false;
      }
     
    
      else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return true;
      }
    else{
       return  false;
    }

}

export default validateEmail