   import styles from "../styles/signin.module.css";
   import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
   import { faXmark } from '@fortawesome/free-solid-svg-icons'
   import Link from "next/link"
   import Head from "next/head";
  
const signin = ({show,set}) => {
  return (
    <>
    <Head> 
    <title>SignIn Page</title>
   </Head>
      { show ? <div className={styles.signin_box} id={styles.center}>
        <p className={styles.mainText}>Sign in</p>
        <FontAwesomeIcon className={styles.crossIcon} icon={faXmark} onClick={()=>set(false)} /> 
        <div className={styles.container} id={styles.center}>
        <div className={styles.firstInput} >
        <p>Username or email address</p>
        <input type="text" name="username" placeholder="nikusha.tetruashvili.gmail.com" />
        </div> 
        <div className={styles.secondInput}>
        <p>Password</p>
        <input type="password" name="password" placeholder="*********" /> </div>
        <Link href="/" className={styles.forgetPassword} > Forget password? </Link>
            
         
           <button className={styles.login_btn}  onClick={()=>{}}>Login</button>
           <p className={styles.or}>Or</p>
         <Link href="/registration" > <button className={styles.signup_btn}  >Sign up</button></Link> 
           </div>
         
      </div> : null}
    </>
  );
};

export default signin;
