import React from 'react'
import logo from '../public/assets/Images/newlogo.png'
import Image from 'next/image'
import styles from '../styles/navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
       <nav className={styles.nav}>    <Link href='/'><Image src={logo}/>   </Link> </nav> 
    </div>
  )
}

export default Navbar