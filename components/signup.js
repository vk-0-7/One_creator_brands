import styles from "../styles/signup.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import Link from "next/link"
import Head from "next/head";

const signup = ({show,set,showsignup,setsignup}) => {
return (
 <>
 <Head> 
 <title>SignIn Page</title>
</Head>
   { show ? <div className={styles.signin_box} id={styles.center}>
     <p className={styles.mainText}>Sign Up</p>
     <FontAwesomeIcon className={styles.crossIcon} icon={faXmark} onClick={()=>setsignup(false)} /> 
     <div className={styles.container} id={styles.center}>
     <div className={styles.firstInput} >
     <p>Enter your name</p>
     <input type="text" name="username" placeholder="vivek kumar" />
     </div> 
     <div className={styles.secondInput} >
     <p>Enter your Email</p>
     <input type="text" name="username" placeholder="vivekr4400@gmail.com" />
     </div> 
     <div className={styles.thirdInput}>
     <p>Password</p>
     <input type="password" name="password" placeholder="*********" /> </div>
     
         
      
        <button className={styles.signup_btn}  onClick={()=>{}}>Sign up</button>
       
        </div>
      
   </div> : null}
 </>
);
};

export default signup;
