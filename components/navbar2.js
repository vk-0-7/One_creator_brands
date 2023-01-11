import Image from "next/image"
import di from "../Images/di.png"
import logout from "../icons/logout.svg"
import Link from "next/link"
import styles from "../styles/navbar1.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import { faUser } from '@fortawesome/free-solid-svg-icons'
const navbar1 = () => {
  return (
    <>
    <Link href="/"> <Image className={styles.logo}
    
    src={di} alt='logo.png'/>
</Link>

     <button className={styles.btn}> <Image className={styles.usericon} src={logout}  alt='logo.png'/><p>Sign out</p> </button>
    
    </>
  )
}

export default navbar1

