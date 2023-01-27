import styles from '../../../styles/changepassword.module.css'
import Link from 'next/link'
import {useState,useEffect} from 'react'
import axios from 'axios';

const changepassword = () => {

    const [token,setToken] = useState();
    const [password,setPassword] = useState();
    const [confirmPassword,setConfirmPassword] = useState();

    useEffect(() => {
      let tokken=window.location.href;
     setToken(tokken.slice(45));
    
     
    }, [])
    
    console.log(token)

    const passwordchange=(e)=>{
         setPassword(e.target.value)
    }
    const confirmPasswordChange=(e)=>{
      setConfirmPassword(e.target.value)
    }
  

    const submit =async()=>{

      if(password==confirmPassword){
          try {
            await axios.post('https://backend.discoverinfluencer.in/user/reset',{password:password},{
              headers:{"Authorization":token}
            })
            
          } catch (error) {
            console.log("error reseting password",error.message)
          }
       


      }

    }



  return (
    <div>
        <div className={styles.main_box}>
         <p className={styles.mainText}>Reset Password</p>

         <div className={styles.password}>
     <p>New Password</p>
<input type="password" name="password" placeholder="*********" onChange={passwordchange} required/> </div>

<div className={styles.confirmpassword}>
     <p> Confirm Password</p>
<input type="password" name="password" placeholder="*********" onChange={confirmPasswordChange} required/> </div>

<div className={styles.password_validation}>
        <p>Password should contain:</p>
    <ul>
      <li id='firstvalidation'>contains at least 8 characters</li>
      <li id='secondvalidation'>contains both lower (a-z) and upper case letters (A-Z)</li>
      <li id='thirdvalidation'>contains at least one number (0-9) or a symbol</li>
    </ul>

        </div> 

        <Link href='/' id='sent'>  <button className={styles.signup_btn} id='signupbtn' onClick={submit} >Submit</button> </Link>
       
    </div> 
    </div>
  )
}

export default changepassword