   import styles from "../styles/signin.module.css";
   import {useState,useEffect} from "react";
   import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
   import { faXmark } from '@fortawesome/free-solid-svg-icons'
   import Forgetpassword from "./forgetpassword";
   import Link from "next/link"
   import Script from "next/script";
   import Head from "next/head";
   
import axios from "axios";
import React from "react";
  
const signin = ({show,set,showsignup,setsignup,showForgotPassword,setShowForgotPassword}) => { 


  

const [user, setUser] = useState({
  email:"",
  password:""
});


const handlecross= ()=>{
    set(false);
    user.email=""
    user.password=""

}



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


    useEffect(() => {
      if(user.email && user.password)
      document.getElementById('loginbtn').style.backgroundColor=' rgb(190, 52, 85)'
    }, [user])
    




  return (
    <>
       
     
      { show ? <div  style={{position:"fixed", height:"100vh",width:"100vw", top:"0" ,left:"0", zIndex:"100", backgroundColor:"rgba(0,0,0,0.1)"}}>   <div className={styles.signin_box} id={styles.center}>
        <p className={styles.mainText}>Sign in</p>
        <FontAwesomeIcon className={styles.crossIcon} icon={faXmark} onClick={()=>handlecross()} /> 
        <div className={styles.container} id={styles.center}>
        <div className={styles.firstInput} >
        <p>Username or email address</p>
        <input type="email" name="email" placeholder="nikusha.tetruashvili.gmail.com" value={user.email} onChange={(e)=>handlechange(e)} required/>     
        </div> 
        <div className={styles.secondInput}>
        <p>Password</p>
        <input type="password" name="password" placeholder="*********" value={user.password} onChange={(e)=>handlechange(e)} required/> </div>
        <p onClick={()=>{handlecross() ;setShowForgotPassword(true)}} className={styles.forgetPassword} > Forgot password? </p>
            
         
           <button className={styles.login_btn} id='loginbtn' onClick={login} >Login</button>
           <p className={styles.or}>Or</p>
          <button className={styles.signup_btn} onClick={()=>{setsignup(true)}} >Sign up</button>
           </div>
         
      </div> 
     
      
        </div> : null }
       

    </>
  );
};

export default signin;
