import {useState,useEffect} from 'react';
import Navbar from "../components/navbar3"
import styles from "../styles/registration.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import Script from "next/script"







const registration = () => {
  return (
    <>

    <Navbar/>
     <div className={styles.main_div}>
       <h3 className={styles.main_heading}>Influencer Registration</h3>
      <div className={styles.info_profileimg}>

       <h4>Personal Info</h4>
        <h6>Let people get to know you better through your influencer profile. Be clear, detailed, <br /> and authentic!</h6>
        <form className={styles.form}>
           <div className={styles.icn}><FontAwesomeIcon icon={faUser} className={styles.usericon} /></div>
           <div className={styles.file_upload}>
           <input type="file" id={styles.file} />
           <label for="file"> Upload Photo </label> 
           </div>
            </form>
            </div>

         <div className={styles.other_info}>
            <div className={styles.name}>
           <label for="name"><b id={styles.mark} >Full name</b></label><br />
           <input type="text" id={styles.inpt} placeholder="Enter Full name" name="name" required/>
          </div>
          <div className={styles.username}>
           <label for="uname"><b id={styles.mark}>Username</b></label><br />
          <input type="text"   id={styles.inpt} placeholder="Enter Username" name="uname"  required/>
          </div>
          <div className={styles.number}>
           <label for="uname"><b id={styles.mark}>Whatsapp Number(Personal Only) </b></label><br />
          <input type="text"  id={styles.inpt}  placeholder="+91-4726482345" name="number" required/>
          </div>

           <div className={styles.state_city}>
            <div className={styles.city}>
           <label for="uname"><b id={styles.mark}>City</b></label><br />
           <input type="text"  placeholder="Enter Username" name="uname"  required/>
             </div>
             <div className={styles.city}>
          <label for="uname"><b id={styles.mark}>State</b></label><br />
          <input type="text"  placeholder="Enter Username" name="uname"  required/>

            </div>
          </div>
            <div className={styles.description}>
            <label for="description"><b id={styles.mark}>Description</b></label><br />
            <input type="text" placeholder="I would like to know all the things about the vacancy."      name="description"  required/>
            </div>
          </div>
      
      
  <div className={styles.other_info}>
     
  </div>



     </div>
    
    
    </>
  )
}

export default registration