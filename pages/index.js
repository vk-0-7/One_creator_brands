import React ,{useState} from 'react'
import styles from "../styles/index.module.css"
import Image from 'next/image'
import Head from 'next/head'
import axios from 'axios'
import Link from 'next/link'
import banner from "../public/assets/Images/topimage.webp"
import bannersm from '../public/assets/Images/partner_banner_mobile.webp'
import Footer from '../components/footer'


import shop from "../public/assets/Images/shopnew.png"
import collab from "../public/assets/Images/collab.png"
import rewards from "../public/assets/Images/rewards.png"
import logo from "../public/assets/Images/newlogo.png"


const index = () => {
  return(

<>

<div className={styles.first_box}>
     

             <div className={`${styles.banner} ${styles.centreDiv}`}>
            
             <div className={styles.logo}>
            <Image   src={logo}    />
        </div>
                 <div className={styles.inside_banner} >
                 <h1>partner with us. <br /> <b> experience new frontiers </b></h1>
    <h3>get direct access to the top 1% creators  <br />
by partnering with us</h3>
                    <div className={styles.access_btn}>
                    
          <Link href="/brand-partnership">  <button className={styles.getaccess}>
                <p> get started</p>
            </button> </Link>
           
        </div>
                 
                    </div> 
             <Image src={banner}className={styles.banner_img} /> 
                     <Image src={bannersm} className={styles.banner_imgsm}/> 
                    
             </div>
           
       </div>

       <section className={`${styles.section1} ${styles.centreDiv}`}>
        
        <div className={styles.split}>
  <div className={styles.split1}>
    <div className={styles.innerdiv}> <h1>where <br />
   <b>  the 1% </b>  <br />
shop</h1>
     <p>list your products on the ONE store,  <br />
a shopping experience exclusive to members</p>
  <Link href='/brand-partnership'> <button className={styles.partner_btn}>become a partner</button> </Link>
 </div> 
  </div>
  <div  className={styles.split2}>
    <Image src={shop}/>
  </div>

        </div>
       
       
       
       </section>  
 

  <section className={`${styles.section2} ${styles.centreDiv}`}>
       
       <div className={` ${styles.bodySection3} ${styles.split} `}>
 <div className={`${styles.split1} `}>
   <div className={styles.content}> <h1>  <b> collaborations</b>  <br />
made easy</h1>
    <p>partner with ONE to get direct access of <br />
the top 1% creators</p> 
<Link href='/brand-partnership'> <button className={styles.partner_btn}>become a partner</button> </Link>
</div> 
 </div>
 <div  className={styles.split2}>
   <Image src={collab}/>
 </div>

       </div>
      
      
      
      </section> 
  <section className={`${styles.section3} ${styles.centreDiv}`}>
       
       <div className={` ${styles.bodySection3} ${styles.split} `}>
 <div className={`${styles.split1} `}>
   <div className={styles.content}> <h1>redefine <br /> <b> rewards </b> for <br /> creative ones</h1>
    <p>give out your products as rewards to ONE members</p>
    <Link href='/brand-partnership'> <button className={styles.partner_btn}>become a partner</button> </Link> </div> 
 </div>
 <div  className={styles.split2}>
   <Image src={rewards}/>
 </div>

       </div>
      
      
      
      </section> 
  <section className={`${styles.section4} ${styles.centreDiv}`}>
 <div className={styles.part1}>  
   <h1>
   turn into a
brand that <br />
 <b> creators 
follow. </b>
   </h1>  
     <p>get India’s top 1% creators to discover your brand on a platform that makes shopping entertaining, rewarding and exclusive.
</p>  </div>  
      
      </section> 


    

     
      <div className={styles.footer}> <Footer /></div>


</>



  )
   
    
}

export default index