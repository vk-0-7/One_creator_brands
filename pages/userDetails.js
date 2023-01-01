import Navbar1 from "../components/navbar1"
import Image from "next/image"
import styles from "../styles/userDetails.module.css"
import img from "../Images/img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const userDetails = () => {
  return (
    <>
    <Navbar1/>
      <div className={styles.leftBox}>
         <div className={styles.userImage}>
          <Image className={styles.Image} src={img}></Image>
         </div>
         <div className={styles.details}>
        <p className={styles.name}>First & last name</p>
        <p className={styles.city}>city </p>
        <div className={styles.icons}>
        <button>
             {" "} <FontAwesomeIcon  icon={faInstagram} id={styles.ic}/>
                    </button>
        <button>
              <FontAwesomeIcon  icon={faFacebook} id={styles.ic}/>
                    </button>
        <button>
            <FontAwesomeIcon  icon={faCloud} id={styles.ic}/>
                    </button>
       
        </div>

     <p className={styles.oneliner}>
      One Liner Comes Here
     </p>
      <div className={styles.talents}>
        <div id={styles.talent}> 
              <FontAwesomeIcon  icon={faMusic} id={styles.music}/> <p> Hindustani classical</p>
             
                   </div>
        <div id={styles.talent}> 
              <FontAwesomeIcon  icon={faMusic} id={styles.music}/><p>International</p> 
                    </div>
        <div id={styles.talent}><FontAwesomeIcon  icon={faMusic} id={styles.music}/><p>Classical</p> </div>
      </div>
   <div className={styles.description}>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam ab eum cum quas consequuntur? Odio, vel dignissimos quam voluptate mollitia reprehenderit sequi aut dolorum eum, tempore obcaecati velit minima aliquid! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis totam temporibus adipisci eius? Iusto optio natus sequi similique ullam perspiciatis?
   </div>
         </div>


      </div>
      <div className={styles.rightBox}>
     <div className={styles.videobox}>
       <Image></Image>
  </div>
  <div className={styles.price_and_contact}>
      <div className={styles.price}>
    <p>Starting Price:</p>
    <h5>$ 250</h5>
      </div>
      <div className={styles.contact_btn}>
        <button><FontAwesomeIcon  icon={faEnvelope} className={styles.envelope}/> conatct Me</button>
      </div>

  </div>
    <div className={styles.performances}>
      <div id={styles.performance}> <div><p>::</p> <h6>Songwriter Music and melody </h6></div><h5>Starting price: $300</h5></div>
      <div id={styles.performance}><div><p>::</p> <h6>Full Instrument production </h6></div><h5>Starting price: $250</h5></div>
      <div id={styles.performance}> <div><p>::</p> <h6>Female Vocalist or singer</h6> </div> <h5>Starting price: $500</h5></div>
    </div>
   <div className={styles.terms}>
    Terms of Services
    <p>1. 20 revisions 2. Would need complete information before providing first scratch</p>
   </div>
      </div>
    
    
    </>
  )
}

export default userDetails