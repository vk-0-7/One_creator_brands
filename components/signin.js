   import styles from "../styles/signin.module.css";
   import {useState,useEffect} from "react";
   import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
   import { faXmark } from '@fortawesome/free-solid-svg-icons'
   import Link from "next/link"
   import Script from "next/script";
   import Head from "next/head";
   
import axios from "axios";
import React from "react";
  
const signin = ({show,set,showsignup,setsignup}) => { 

const [user, setUser] = useState({
  email:"",
  password:""
});




const handlechange=(e)=>{
     const {name,value} =e.target
     setUser({
      ...user,
      [name]:value
     })
}

    const LOGIN_API='https://backend.discoverinfluencer.in/user/login'

    const login= async ()=>{

       

        const {email,password}=user;

        if(email && password){
          try {
             await axios.post(LOGIN_API,user)

          } catch (error) {
            console.log("Error during Login",error.message)
          }
        }
    }





  return (
    <>
   
     
      { show ? <div className={styles.signin_box} id={styles.center}>
        <p className={styles.mainText}>Sign in</p>
        <FontAwesomeIcon className={styles.crossIcon} icon={faXmark} onClick={()=>set(false)} /> 
        <div className={styles.container} id={styles.center}>
        <div className={styles.firstInput} >
        <p>Username or email address</p>
        <input type="text" name="email" placeholder="nikusha.tetruashvili.gmail.com" value={user.email} onChange={(e)=>handlechange(e)}/>     
        </div> 
        <div className={styles.secondInput}>
        <p>Password</p>
        <input type="password" name="password" placeholder="*********" value={user.password} onChange={(e)=>handlechange(e)}/> </div>
        <Link href="/" className={styles.forgetPassword} > Forget password? </Link>
            
         
           <button className={styles.login_btn}  onClick={login}>Login</button>
           <p className={styles.or}>Or</p>
          <button className={styles.signup_btn} onClick={()=>{setsignup(true)}} >Sign up</button>
           </div>
         
      </div> : null}
    </>
  );
};

export default signin;
