import { useState, useEffect } from "react";
import Image from "next/image"
import searchn from "../icons/searchn.svg"
import styles from "../styles/jobs.module.css"
import Navbar from "../components/navbar1"
import { Coursesdata } from "../Data/data";
import {InfluencerCategory} from "../Data/data"
import {Industry} from "../Data/data"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faSnapchat } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";



const searchInfluencer = () => {

    const [industry,setIndustry] =useState(6)
    const [influencer,setInfluencer] =useState(6)
    const [count,setCount]=useState(6)

   const handleclick=()=>{
        setCount(count+3)
    }
    const handleInfluencer=()=>{
         setInfluencer(influencer+6)
    }
    const handleIndustry=()=>{
         setIndustry(industry+6)
    }
 
    // useEffect(() =>{
           
    //   }, [c0unt]);
    
  return (
    <>
    <Head>
        <title> SearchInfluencer-Filter</title>
        
    </Head>
    
   
   
    {/* <Script src="/script.js"></Script> */}
    
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
      {InfluencerCategory.slice(0,influencer).map((elem) =>(
       <div> 
       <input type="checkbox" id={styles.checkbox} name="national_indian" value="national_indian"/>
        <label for="influencer"> {elem}</label><br/>

        </div>

))}
      <div className={styles.seemore}>
          <p onClick={handleInfluencer}> see more</p>
      </div>
      </div>
      <div className={styles.filter_category3} id={styles.filters}>
      <h3>Industry</h3>
      {Industry.slice(0,industry).map((elem) =>(
       <div> 
       <input type="checkbox" id={styles.checkbox} name="national_indian" value="national_indian"/>
        <label for="influencer"> {elem}</label><br/>

        </div>

))}
        <div className={styles.seemore2}>
          <p onClick={handleIndustry}> see more</p>
      </div>

      </div>
      <div className={styles.filter_category4} id={styles.filters}>
        <h3>City</h3>
      <Image src={searchn} id={styles.searchimg}></Image>
       <input type="search" className={styles.citySearch} />

     
      </div>

     <div className={styles.gender} id={styles.filters}>
         <h3>Gender</h3>
         <input type="checkbox" id={styles.checkbox}  value="a"/>
        <label for="influencer"> Male</label><br/>

        <input type="checkbox" id={styles.checkbox}  value="a"/>
        <label for="influencer"> Female</label><br/>

        <input type="checkbox" id={styles.checkbox}  value="a"/>
        <label for="influencer"> nonbinary</label><br/>

     </div>



      {/* <div className={styles.filter_category5} id={styles.filters}>

        <h3>Budget</h3>
        <div className={styles.price_range}>
        <input type="number"  placeholder="$1" className={styles.starting_price}/>
        <input type="number"  placeholder="$1,000,000" className={styles.starting_price}/>

        </div>
        <button className={styles.apply_price}>Apply Price</button>
        
      </div>
       */}
      </div>
      <form className={styles.form}>
          <input
            type="text"
            className={styles.search}
            placeholder="Enter name,username,city 
          or category"
          />
          <button className={styles.search_icon}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>

    
    <div className={styles.all_profiles_div}>
     
    {Coursesdata.slice(0,count).map((item) => (
              <div className={styles.card}>
                <div className={styles.card_top}>
                  <Image src={item.Imglink} alt={item.title} width="400" height="300"></Image>
                  <h1>First and Last Name</h1>
                </div>
                <div className={styles.card_bottom}>
                  <h4>Categories</h4>
                  <div className={styles.icon_btn_all}>
                    <button>
                      {" "}
                      <FontAwesomeIcon
                        icon={faInstagram}
                        classname={styles.insta}
                      />
                    </button>
                    <button>
                      {" "}
                      <FontAwesomeIcon
                        icon={faYoutube}
                        classname={styles.insta}
                      />
                    </button>
                    <button>
                      {" "}
                      <FontAwesomeIcon
                        icon={faFacebook}
                        classname={styles.insta}
                      />
                    </button>
                    <button>
                      {" "}
                      <FontAwesomeIcon
                        icon={faSnapchat}
                        classname={styles.insta}
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
    

    <div className={styles.load_more}>
  <button className={styles.load_more_btn} onClick={handleclick} > <p>See More</p>  <FontAwesomeIcon icon={faAngleDown} /> </button>

    </div>




    </div>
    
    </>
  )
}

export default searchInfluencer