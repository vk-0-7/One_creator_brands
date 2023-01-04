import Image from "next/image"
import di from "../Images/di.png"

import styles from "../styles/navbar1.module.css"

const navbar1 = () => {
  return (
    <>
    <Link href="/"> <Image className={styles.logo}
    
    src={di} ></Image>
</Link>

    
    </>
  )
}

export default navbar1