import Image from "next/image"
import di from "../Images/di.png"
import Link from "next/link"
import styles from "../styles/navbar1.module.css"

const navbar1 = () => {
  return (
    <>
    <div className={styles.nav}>
    <Link href="/"> <Image className={styles.logo}
    
    src={di}  alt='logo.png'/>
</Link>

    </div>
    </>
  )
}

export default navbar1