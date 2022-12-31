import styles from "../styles/footer.module.css"
import Image from "next/image"
import di from "../Images/di.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const footer = () => {
  return (
    <>
    
    <div id={styles.footer}>
      <div className={styles.columns}>
          <div className={styles.col_1} id={styles.col}>
          <Image src={di} className={styles.footer_img}></Image>
          <h5>about one line comes here</h5>
          <h5><FontAwesomeIcon icon={faLocationDot} style={{color:"grey"}}/> Address line 1</h5>
          <h5>Address line 2</h5>
          <h5> <FontAwesomeIcon icon={faEnvelope} style={{color:"grey"}}/> email address</h5>
          
          </div>
          <div className={styles.col_2} id={styles.col}>
              <h2>About</h2> 
               <h5> About us</h5>
               <h5> For travel agents </h5>
               <h5> for brands</h5>
               <h5> Blog</h5>
               <h5> Careers</h5>
          </div>
          <div className={styles.col_3} id={styles.col}>
              <h2>Support</h2>
              <h5>	FAQs </h5>
              <h5>	Privacy Policy</h5>
              
              <h5>Cancellation and refund policy</h5>
              <h5>Terms and conditions</h5>
              <h5>Contact Us</h5>
          </div> 
          


      </div>
         <div className={styles.copyright}>
            <h6><FontAwesomeIcon icon={faCopyright} /> discoverinfluencer 2022</h6> 
         </div>
    </div>
    
    </>
  )
}

export default footer