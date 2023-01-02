import { useState, useEffect } from "react";
import Image from "next/image"
import styles from "../styles/jobs.module.css"
import Navbar from "../components/navbar1"
import { Coursesdata } from "../Data/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Head from "next/head";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faSnapchat } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";



const jobs = () => {

    const [count,setCount]=useState(3)

   const handleclick=()=>{
        setCount(count+3)
    }
 
    // useEffect(() =>{
           
    //   }, [c0unt]);
    
  return (
    <>
    <Head>
        <title> Jobs Page</title>
        
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
      <input type="checkbox" id={styles.actor} name="Actor" value="actor"/>
             <label for="Actor"> Actor</label><br/>

      <input type="checkbox" id={styles.artist} name="Artist" value="Artist"/>
             <label for="Artist"> Artist</label><br/>

      <input type="checkbox" id={styles.author} name="Author" value="Author"/>
             <label for="Author"> Author</label><br/>

      <input type="checkbox" id={styles.automobile} name="Automobile Reviewer" value="Automobile Reviewer"/>
             <label for="Automobile"> Automobile Reviewer</label><br/>

      <input type="checkbox" id={styles.Band} name="Band" value="Band"/>
             <label for="Band"> Band</label><br/>

      <input type="checkbox" id={styles.Blogger} name="Blogger" value="Blogger"/>
             <label for="Blogger"> Blogger</label><br/>

      </div>
      <div className={styles.filter_category3} id={styles.filters}>
      <h3>Fields</h3>
      <input type="checkbox" id={styles.national_indian} name="national_indian" value="national_indian"/>
             <label for="national_indian"> Accessories-Man</label><br/>

      <input type="checkbox" id={styles.AccessoriesW} name="AccessoriesW" value="AccessoriesW"/>
             <label for="AccessoriesW"> Accessories-Women</label><br/>

      <input type="checkbox" id={styles.Accessories} name="Accessories" value="Accessories"/>
             <label for="Accessories"> Accessories</label><br/>

      <input type="checkbox" id={styles.twenty_to_thirty} name="twenty_to_thirty " value="twenty_to_thirty "/>
             <label for="twenty_to_thirty"> 20-30 Days </label><br/>

      <input type="checkbox" id={styles.thirtyone_to_forty} name="thirtyone_to_forty" value="thirtyone_to_forty"/>
             <label for="thirtyone_to_forty"> 31-40 Days</label><br/>

      <input type="checkbox" id={styles.fortyone_to_sixty} name="fortyone_to_sixty" value="fortyone_to_sixty"/>
             <label for="fortyone_to_sixty"> 41-60 Days</label><br/>

      <input type="checkbox" id={styles.morethan_sixty} name="morethan_sixty" value="morethan_sixty"/>
             <label for="morethan_sixty"> more than 60 Days</label><br/>
      </div>
      <div className={styles.filter_category4} id={styles.filters}>
      <h3>City</h3>

      <input type="checkbox" id={styles.national_indian} name="national" value="national"/>
             <label for="national"> National/Indian</label><br/>

      <input type="checkbox" id={styles.regional} name="regional" value="regional"/>
             <label for="regional"> Regional</label><br/>

      <input type="checkbox" id={styles.international} name="international" value="international"/>
             <label for="international"> International</label><br/>


     
      </div>
      <div className={styles.filter_category5} id={styles.filters}>

        <h3>Budget</h3>
        <div className={styles.price_range}>
        <input type="number"  placeholder="$1" className={styles.starting_price}/>
        <input type="number"  placeholder="$1,000,000" className={styles.starting_price}/>

        </div>
        <button className={styles.apply_price}>Apply Price</button>
        
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

export default jobs