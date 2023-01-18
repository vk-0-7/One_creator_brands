import styles from "../styles/footer.module.css"
import Image from "next/image"
import facebook from "../icons/facebook.svg"
import insta from "../icons/insta.svg"
import twitter from "../icons/twitter.svg"
import Link from 'next/link'
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
     {/* <div id={styles.icon_box}> <Image id={styles.icon} src={facebook} alt="icon.png"></Image> </div> */}
  <div id={styles.icon_box}><Link href='https://www.instagram.com/discoverinfluencer.in'> <Image id={styles.icon} src={insta} alt="icon.png"></Image> </Link></div>
     {/* <div id={styles.icon_box}> <Image id={styles.icon} src={twitter} alt="icon.png"></Image> </div> */}
      

</div>

  <div className={styles.footerIm}>
    <Link href='https://cftlabs.org/?utm_source=discoverinfluencer.in&utm_medium=platform_icon&utm_campaign=partner' target='_blank'> <Image className={styles.ftr} src={footr} alt="logo.png"/> </Link>
  </div>
    </div>
    
    </>
  )
}

export default footer