import React from 'react'
import logo from '../public/assets/Images/newlogo.png'
import Image from 'next/image'
import styles from '../styles/navbar.module.css'

const Navbar = () => {
  return (
    <div>
        <nav className={styles.nav}><Image src={logo}/></nav>
    </div>
  )
}

export default Navbar