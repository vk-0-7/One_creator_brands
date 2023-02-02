import { useState,useEffect } from "react"
import styles from '../styles/Homeskeleton.module.css'
import Navbar from './navbar1'

const homeskeleton = () => {




  return (<>

     <div className={styles.nav}>  <Navbar/>  </div>
    <div class={styles.container}>
     <div className={styles.first_div}>

        </div>
    <div className={styles.second_div}>
        <div className={styles.main_heading}></div>
        <div className={styles.description}></div>
        <div className={styles.cards}>
          <div id={styles.card}></div>
          <div id={styles.card}></div>
          <div id={styles.card}></div>
          <div id={styles.card}></div>
        </div>

    </div>
    <div className={styles.second_div}>
        <div className={styles.main_heading}></div>
        <div className={styles.description}></div>
        <div className={styles.cards}>
          <div id={styles.card}></div>
          <div id={styles.card}></div>
          <div id={styles.card}></div>
          <div id={styles.card}></div>
        </div>

    </div>
    <div className={styles.second_div}>
        <div className={styles.main_heading}></div>
        
        <div className={styles.cards}>
          <div id={styles.card}></div>
          <div id={styles.card}></div>
          <div id={styles.card}></div>
          <div id={styles.card}></div>
        </div>

    </div>



   
</div>
</>
  )
}

export default homeskeleton