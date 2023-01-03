import Image from "next/image"
import di from "../Images/di.png"
import styles from "../styles/navbar1.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
   import { faUser } from '@fortawesome/free-solid-svg-icons'
const navbar1 = () => {
  return (
    <>
     <Image className={styles.logo}
    
     src={di} ></Image>

     <button className={styles.btn}>Sign out</button>
    
    </>
  )
}

export default navbar1

