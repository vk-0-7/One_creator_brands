import { useState } from "react"
import Image from "next/image"
import SignIn from "../components/signin"
import di from "../Images/di.png"
import styles from "../styles/navbar1.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
   import { faUser } from '@fortawesome/free-solid-svg-icons'
const navbar1 = ({show,set}) => {

  

  return (
    <>
     <Image className={styles.logo}
    
     src={di} ></Image>

     <button className={styles.btn} onClick={()=>set(true)}> <FontAwesomeIcon icon={faUser} className={styles.usericon} />Influencer</button>
    
    </>
  )
}

export default navbar1