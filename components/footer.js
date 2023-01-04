import styles from "../styles/footer.module.css"
import Image from "next/image"
import facebook from "../icons/facebook.svg"
import insta from "../icons/insta.svg"
import twitter from "../icons/twitter.svg"

import footr from "../Images/footer.png"

const footer = () => {
  return (
    <>
    
    <div id={styles.footer}>
        <div className={styles.copyright}>
            <p>©discoverinfluencer 2022</p>
        </div>
     <div className={styles.policies}>
          <div className={styles.first_column}>
                <p>Privacy Policy</p>
                <p>Term of Use</p>
           

          </div>
          <div className={styles.second_column}>
           <p>Refund Policy</p>
           <p>Cookie Policy</p>
          </div>

     </div>
<div className={styles.media_icons}>
     <div id={styles.icon_box}> <Image id={styles.icon} src={facebook}></Image> </div>
     <div id={styles.icon_box}> <Image id={styles.icon} src={insta}></Image> </div>
     <div id={styles.icon_box}> <Image id={styles.icon} src={twitter}></Image> </div>
      

</div>

  <div className={styles.footerIm}>
     <Image className={styles.ftr} src={footr} />
  </div>
    </div>
    
    </>
  )
}

export default footer