import { useState, useEffect } from "react";
import Image from "next/image"
import Link from "next/link"
import searchn from "../icons/searchn.svg"
import redbgfb from "../icons/redbgfb.svg"
import snap from "../icons/snap.svg"
import tube from "../icons/tube.svg"
import redinsta from "../icons/redinsta.svg"
import arrow from "../icons/arrow-left.svg"
import styles from "../styles/jobs.module.css"
import Navbar from "../components/navbar1"
import { Coursesdata } from "../Data/data";
import {influencerCategory} from "../Data/data"
import {Interest} from "../Data/data"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Head from "next/head";




const searchInfluencer = () => {

   const [searchInf,setSearchInf] =useState("")
   const [searchIndustry,setSearchIndustry] =useState("")
    const [count,setCount]=useState(9)

   const handleclick=()=>{
        setCount(count+3)
    }
   
 
   
  return (
    <>
    <Head>
        <title> SearchInfluencer-Filter</title>
        
    </Head>
    
   
   
    
    
    <Navbar/>
   <div className={styles.main_heading}> <h2>Discover Influencer</h2></div>
    <div className={styles.main_filter_div}>
        
      <div className={styles.filter_category1} id={styles.filters}>
            <h3>Social media</h3>
            <input type="checkbox" id={styles.instagram} name="instagram" value="insta"/>
             <label for="instagram"> Instagram</label><br/>

            <input type="checkbox" id={styles.facebook} name="facebook" value="facebook"/>
             <label for="facebook"> facebook</label><br/>

            <input type="checkbox" id={styles.linkdin} name="Linkdin" value="linkdin"/>
             <label for="instagram"> Linkdin</label><br/>

            <input type="checkbox" id={styles.snapchat} name="Snapchat" value="snapchat"/>
             <label for="Snapchat"> Snapchat</label><br/>

            <input type="checkbox" id={styles.pinterest} name="Pinterest" value="pinterest"/>
             <label for="Pinterest"> Pinterest</label><br/>

            <input type="checkbox" id={styles.youtube} name="Youtube" value="youtube"/>
             <label for="Youtube"> Youtube</label><br/>

            <input type="checkbox" id={styles.twitter} name="Twitter" value="Twitter"/>
             <label for="Twitter"> Twitter</label><br/>

      </div>


      <div className={styles.filter_category2} id={styles.filters}>
      <h3>Influencer Category</h3>
      <div id={styles.search}>
      <Image src={searchn} id={styles.searchimg}></Image>
       <input type="text" className={styles.citySearch} onChange={(event)=>{setSearchInf(event.target.value)}}/>
       </div>
       <div className={styles.influencer_checkbox}>
      {influencerCategory.filter((val)=>{
             if (searchInf=="") {
                  return val
             }
             else if(val.toLowerCase().includes(searchInf.toLowerCase()))
             return val
      }
      
      ).map((elem) =>(
         <>
       <input type="checkbox" id={styles.checkbox} name="national_indian" value="national_indian"/>
        <label for="influencer"> {elem}</label><br/>
        </>
       

))}  </div> 
      
      </div>
      <div className={styles.filter_category3} id={styles.filters}>
      <h3>Interest</h3>
      <div id={styles.search}>
      <Image src={searchn} id={styles.searchimg}></Image>
       <input type="text" className={styles.citySearch} onChange={(event)=>{setSearchIndustry(event.target.value)}}/>
       </div>

       <div className={styles.industry_checkbox}> 
      {Interest.filter((val)=>{
           if (searchIndustry=="") {
                 return val
           }
           else if(val.toLowerCase().includes(searchIndustry.toLowerCase()))
               return val;


      }).map((elem) =>(
       <>
       <input type="checkbox" id={styles.checkbox} name="national_indian" value="national_indian"/>
        <label for="influencer"> {elem}</label><br/>
        </>
       

))} </div>
        

      </div>
      <div className={styles.filter_category4} id={styles.filters}>
        <h3>City</h3>
        <div id={styles.search}>
      <Image src={searchn} id={styles.searchimg}></Image>
       <input type="search" className={styles.citySearch} />
       </div>
     
      </div>

     <div className={styles.gender} id={styles.filters}>
         <h3>Gender</h3>
         <input type="checkbox" id={styles.checkbox}  value=""/>
        <label for="influencer"> Male</label><br/>

        <input type="checkbox" id={styles.checkbox}  value=""/>
        <label for="influencer"> Female</label><br/>

        <input type="checkbox" id={styles.checkbox}  value=""/>
        <label for="influencer"> nonbinary</label><br/>

     </div>


       
      </div>
      <form className={styles.form}>
          <input
            type="text"
            className={styles.search}
            placeholder="Enter name,username,city 
          or category"
          />
          <button className={styles.search_icon}>
            <Image src={searchn} id={styles.search_Icon} />
          </button>
        </form>

    
    <div className={styles.all_profiles_div}>
     
    {Coursesdata.slice(0,count).map((item) => (
            <Link href='/userDetails'> <div className={styles.card}>
                <div className={styles.card_top}>
                  <Image src={item.Imglink} alt={item.title} width="400" height="300"></Image>
                  <h1>First and Last Name</h1>
                </div>
                <div className={styles.card_bottom}>
                  <h4>Categories</h4>
                  <div className={styles.icon_btn_all}>
                   
                    <button>
                      {" "}
                      <Image
                        src={tube}
                        className={styles.insta}
                      />
                    </button>
                    <button>
                      {" "}
                      <Image
                        src={redbgfb}
                        className={styles.insta}
                      />
                    </button>
                    <button>
                      {" "}
                      <Image
                        src={snap}
                        className={styles.insta}
                      />
                    </button>
                    <button>
                      {" "}
                      <Image
                        src={redinsta}
                        className={styles.insta}
                      />
                    </button>
                  </div>
                </div>
              </div> </Link> 
            ))}
    

    <div className={styles.load_more}>
  <button className={styles.load_more_btn} onClick={handleclick} > <p>See More</p>  <Image src={arrow} /> </button>

    </div>




    </div>
    
    </>
  )
}

export default searchInfluencer