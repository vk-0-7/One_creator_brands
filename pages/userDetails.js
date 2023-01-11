import Navbar1 from "../components/navbar1"
import Image from "next/image"
import styles from "../styles/userDetails.module.css"
import img from "../Images/img.jpg";
import star from "../icons/star.svg"
import music from "../icons/musicnote.svg"
import redinsta from "../icons/redinsta.svg"
import redfb from "../icons/redfb.svg"
import cloud from "../icons/cloud.svg"
import category from "../icons/category.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const userDetails = () => { 
  return (
    <>
    <Navbar1/>
      <div className={styles.leftBox}>
      <div className={styles.username}>
          <p>@username</p>
          <div id={styles.category}>
            <Image src={star} id={styles.vector} alt="category"></Image>
            <p>Influencer Category</p>
          </div>

      </div>

         <div className={styles.userImage}>
          <Image className={styles.Image} src={img}></Image>
         </div>
         <div className={styles.details}>
        <p className={styles.name}>First & last name <br /> Business Name/Alias</p>
        <p className={styles.city}>city </p>
       

    
      <div className={styles.talents}>
        <div id={styles.talent}> 
              <Image src={music} id={styles.music} alt='music note'/> <p> Hindi</p>
             
                   </div>
        <div id={styles.talent}> 
              <Image  src={music} id={styles.music}/><p>English</p> 
                    </div>
        <div id={styles.talent}><Image  src={music} id={styles.music}/><p>Marathi</p> </div>
      </div>
      <div className={styles.industries}>
        
        <div id={styles.industry}> 
              <Image  src={category} id={styles.categories}/><p>English</p> 
                    </div>
        <div id={styles.industry}><Image  src={category} id={styles.categories}/><p>Marathi</p> </div>
      </div>
      <p className={styles.oneliner}>
      One Liner Comes Here
     </p>
   <div className={styles.description}>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam ab eum cum quas consequuntur? Odio, vel dignissimos quam voluptate mollitia reprehenderit sequi aut dolorum eum, tempore obcaecati velit minima aliquid! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis totam temporibus adipisci eius? Iusto optio natus sequi similique ullam perspiciatis?
   </div>
         </div>


      </div>
      <div className={styles.rightBox}>
     <div className={styles.videobox}>
      
  </div>

  <div className={styles.icons}>
        <button>
             {" "} <Image  src={redinsta} id={styles.ic}/>
                    </button>
        <button>
              <Image  src={redfb} id={styles.ic}/>
                    </button>
        <button>
            <Image  src={cloud} id={styles.ic}/>
                    </button>
       
        </div>

  <div className={styles.price_and_contact}>
     
      <div className={styles.contact_btn}>
        <button><FontAwesomeIcon  icon={faEnvelope} className={styles.envelope}/> conatct Me</button>
      </div>

  </div>
    <div className={styles.performances}>
      <div id={styles.performance}> <div><Image src={category} id={styles.categoryimg}/><h5>Youtube Videos</h5></div><h5>Starting price: $300</h5></div>

      <div id={styles.performance}><div><Image src={category} id={styles.categoryimg}/><h5>Reels</h5></div><h5>Starting price: $250</h5></div>

      <div id={styles.performance}> <div><Image src={category} id={styles.categoryimg}/><h5>Story</h5> </div> <h5>Starting price: $500</h5></div>
    </div>
  
      </div>
    
    
    </>
  )
}

export default userDetails