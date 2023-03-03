import React from 'react'
import Link from "next/link"
import Image from "next/image"
import styles from '../styles/footer.module.css'
import logo from '../public/assets/Images/newlogo.png'
import insta from "../public/assets/icons/instawhite.svg"
import gmail from "../public/assets/icons/sms.svg"

const footer = () => {
  return (
    <div>

<footer className={`${styles.footer} ${styles.centreDiv}`}>

  <div className={styles.leftfooter}>
        <Image src={logo}/>
  </div>
  <div className={styles.rightfooter}>
  <div className={`${styles.icons} ${styles.centreDiv}`}>
        <span id={styles.icon}> <Link href='https://www.instagram.com/onecreator.club/' target="_blank" > <Image id={styles.inst} src={insta} alt="no image found" /> 
         </Link> </span>

        <span id={styles.icon}> <Link href='mailto: talk@oneceator.club' target="_blank" id={styles.icon}> <Image id={styles.sms}  src={gmail} alt="no image found" /> </Link> </span>
        </div>
  </div>


 </footer>


    </div>
  )
}

export default footer