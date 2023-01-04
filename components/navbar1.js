import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import SignIn from "../components/signin"
import di from "../Images/di.png"
import login from "../icons/login.svg"
import styles from "../styles/navbar1.module.css"
import {IoLogIn} from "react-icons/io5"
const navbar1 = ({show,set}) => {

  

  return (
    <>
    <div className={styles.nav}>
    <Link href="/"> <Image className={styles.logo}
    
     src={di} ></Image>
</Link>
     <button className={styles.btn} onClick={()=>set(true)}> <Image className={styles.usericon} src={login}></Image><p>Influencer</p> </button>
     </div>
    </>
  )
}

export default navbar1