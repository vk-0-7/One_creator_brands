import { useState ,useEffect} from "react"
import Image from "next/image"
import Link from "next/link"
import SignIn from "../components/signin"
import di from "../Images/di.png"
import login from "../icons/login.svg"
import loginHover from "../icons/loginHover.svg"
import styles from "../styles/navbar1.module.css"
import {IoLogIn} from "react-icons/io5"
const navbar1 = ({show,set}) => {


  

  return (
    <>
    <div className={styles.nav}>
    <Link href="/"> <Image className={styles.logo}
    
     src={di} alt='logo.png'></Image>
</Link>
     <button className={styles.btn} onClick={()=>set(true)}> <Image className={styles.usericon} id={styles.nonhovericon} src={login} alt="icon.png"/> <Image className={styles.usericon} src={loginHover} id={styles.hovericon} alt="icon.png"/><p>Influencer</p> </button>
     </div>
    </>
  )
}

export default navbar1