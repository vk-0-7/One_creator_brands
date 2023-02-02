import React, { useState ,useEffect } from "react";
import axios from'axios';
import { v4 as uuid } from 'uuid';
import { useHistory } from "react-router-dom";
import styles from "../styles/signup.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
 
import Link from "next/link" 
import Head from "next/head";

const signup = ({show,set,showsignup,setsignup}) => {
     

       const [user,setUser] =useState({
        id:uuid(),
        name:"",
        email:"",
        password:"",
       });

       const handlechange=(e) =>{
        const {name,value} = e.target;
        setUser({
          ...user,
          [name]:value,   
          });
       }

       function containsNumbers(str) {
        return /\d/.test(str);
      }
      function isValid(str){
        var regex = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/g;
      return regex.test(str);
    }

    function containsLetter(string) {
      const
          upper = /[A-Z]/.test(string),
          lower = /[a-z]/.test(string);
  
      return upper && lower;
  }

       useEffect(() => {
         if(user.password.length>7){
          document.getElementById('firstvalidation').style.color='green'
         }
         else{
          document.getElementById('firstvalidation').style.color=' rgb(231, 91, 91)'
         }
         if (containsNumbers(user.password) && isValid(user.password)) {
          document.getElementById('thirdvalidation').style.color='green'
         }
         else{
          document.getElementById('thirdvalidation').style.color=' rgb(231, 91, 91)'
         }
         if (containsLetter(user.password) ) {
          document.getElementById('secondvalidation').style.color='green'
         }
         else{
          document.getElementById('secondvalidation').style.color=' rgb(231, 91, 91)'
         }
         
       }, [user.password])
       
  
       const API_URL ='https://backend.discoverinfluencer.in/user/activation';

       const signup= async ()=>{
         
     
        const {name,email,password}=user;
        if(name && email && password){
         
          try {
           await axios.post(API_URL,user)
          } catch (error) {
            console.log('Error while calling api',error.message);
          }
         
      }
     

       }
      //  const [validate,setValidate] =useState(false)

       useEffect(() => {


        if(user.name && user.email && user.password && user.email.includes('@') && containsLetter(user.password) && containsNumbers(user.password) && isValid(user.password) && user.password.length>7 ){
        
        document.getElementById('signupbtn').style.backgroundColor=' rgb(190, 52, 85)'
        document.getElementById('signupbtn').disabled=false;
        document.getElementById('signupbtn').style.cursor='pointer';
      }
      else{
        document.getElementById('signupbtn').style.backgroundColor=' rgba(190, 52, 85,0.2)'
        document.getElementById('signupbtn').disabled=true;
      }

       
       
       
      }, [user])

    //  useEffect(() => {
    //   document.getElementById('sent').addEventListener('click',(e)=>{
    //     if(!user.name) {
    //       // console.log(user.name,user.email,user.password)
         
    //       e.preventDefault()
    //     }
       
    //   })

    //  }, [])
     



return (
 <>
 <Head> 
 <title>SignIn Page</title>
</Head>
   { show ? <div className={styles.signin_box} id={styles.center}  style={{position:"fixed"}}>
     <p className={styles.mainText}>Sign Up</p>
     <FontAwesomeIcon className={styles.crossIcon} icon={faXmark} onClick={()=>setsignup(false)} /> 
     <div className={styles.container} id={styles.center}>
     <div className={styles.firstInput} >
     <p>Enter your name</p>
     <input type="text" name="name" placeholder="Your name" value={user.name} onChange={(e)=>handlechange(e)} required/>
     </div> 
     <div className={styles.secondInput} >
     <p>Enter your Email</p>
     <input type="email" name="email" placeholder="Your Email" value={user.email} onChange={(e)=>handlechange(e)} required/>
      <p id='validemail' style={{marginTop:"3px",display:"none"}}>Please Enter valid email address</p>
     </div> 
     <div className={styles.thirdInput}>
     <p>Password</p>
<input type="password" name="password" placeholder="*********" value={user.password} onChange={(e)=>handlechange(e)} required/> </div>
      <div className={styles.password_validation}>
        <p>Password should contain:</p>
    <ul>
      <li id='firstvalidation'>contains at least 8 characters</li>
      <li id='secondvalidation'>contains both lower (a-z) and upper case letters (A-Z)</li>
      <li id='thirdvalidation'>contains at least one number (0-9) or a symbol</li>
    </ul>

        </div> 
         
      
      <Link href='/emailsent' id='sent'>  <button className={styles.signup_btn} id='signupbtn' onClick={signup} disabled>Sign up</button> </Link>
       
        </div>
      
   </div> : null}
 </>
);
};

export default signup;
