import { useState, useEffect ,useContext} from "react";
import { MyContext } from './_app.js'
import { useRouter } from "next/router";
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
import axios from "axios";

 




const searchInfluencer = () => {
  // const { globalState, setGlobalState } = useContext(MyContext)
    const [cat,setCat]=useState('');
  // console.log(globalState);
  // const router = useRouter()
 
    useEffect(() => {
      let tokken=window.location.href;
     setCat(tokken.slice(44));
    
     
    }, [])

   console.log(cat);
  

  

  const [socialMedia,setSocialMedia] =useState([])
  const [category,setCategory] =useState([]);
  const [interest,setInterest] =useState([])
  const [city,setCity] =useState({city:""})
  const [gender,setGender] =useState()
  
  const [userData,setUserData]=useState([]);

   const [searchInf,setSearchInf] =useState("")
   const [searchIndustry,setSearchIndustry] =useState("")
    const [count,setCount]=useState(9)

   const handleclick=()=>{
        setCount(count+3)
    }
   
 const changeSocialMedia=(e)=>{
      const {value,checked}=e.target;
      // console.log(`${value} is ${checked}`)

      if(checked){
        setSocialMedia([...socialMedia,value])
      }
        else{
         setSocialMedia(socialMedia.filter((e)=>e!==value))
        }
        

 }
 console.log(socialMedia)
 const changeCategory=(e)=>{

      const {value,checked} =e.target;
      if(checked)
      setCategory([...category,value])
      else{
        setCategory(category.filter((e)=>e!==value))
      }
 }
 const changeInterest=(e)=>{

      const {value,checked} =e.target;
      if(checked)
      setInterest([...interest,value])
      else{
        setInterest(interest.filter((e)=>e!==value))
      }
 }

 const changeCity=(e)=>{
      const {name,value}=e.target;
    setCity({
      ...city,
      [name]:value
    })

   }
   const changeGender=(e)=>{

    const {value,checked} =e.target;
    if(checked)
    setGender(value)
    
}


  const getallData = async ()=>{


    try {

      const response= await axios.get('https://backend.discoverinfluencer.in/user/all');
      const datas=response.data.users;
      console.log(datas);
      setUserData(datas);
      
    } catch (error) {
       console.log("error is ", error.message)
    }    
  
  }
  
 const getFilteredData = ()=>{
  

  axios.post('https://backend.discoverinfluencer.in/home/influencer_filters', {
    socialmedia:socialMedia,
    category:category,
    interest:interest,
    gender:gender,
    city:city.city
   }
    


  ).then(response =>{
    console.log(response.data.message);
    let abc=response.data.message;
    setUserData(abc)
   
    // console.log(response.data.message)

  }).catch(error=>{ console.log("Error during fetching data",error.message) })
  
 }
 
 

    

 
 useEffect(  () => {


  if(socialMedia.length==0 && category.length==0 && interest.length==0 ){
                  getallData()
  
  }
   
    else{
     getFilteredData()

  }
 }, [socialMedia,category,interest,gender])

 
 
 
   
  return (
    <>
      
    <Head>
        <title> SearchInfluencer-Filter</title>
        
    </Head>
    
   {/* {console.log(data)} */}
   
    
    
    <Navbar/>
   <div className={styles.main_heading}> <h2>Discover Influencer</h2></div>
    <div className={styles.main_filter_div}>
        
      <div className={styles.filter_category1} id={styles.filters}>
            <h3>Social media</h3>
            <input type="checkbox" id={styles.instagram} name="instagram" value="Instagram" onChange={(e)=>changeSocialMedia(e)}/>
             <label for="instagram"> Instagram</label><br/>

            <input type="checkbox" id={styles.facebook} name="facebook" value="Facebook"  onChange={(e)=>changeSocialMedia(e)}/>
             <label for="facebook"> facebook</label><br/>

            <input type="checkbox" id={styles.linkdin} name="Linkdin" value="Linkdin"  onChange={(e)=>changeSocialMedia(e)}/>
             <label for="instagram"> Linkdin</label><br/>

            <input type="checkbox" id={styles.snapchat} name="Snapchat" value="Snapchat"  onChange={(e)=>changeSocialMedia(e)}/>
             <label for="Snapchat"> Snapchat</label><br/>

            <input type="checkbox" id={styles.pinterest} name="Pinterest" value="Pinterest"  onChange={(e)=>changeSocialMedia(e)}/>
             <label for="Pinterest"> Pinterest</label><br/>

            <input type="checkbox" id={styles.youtube} name="Youtube" value="Youtube"  onChange={(e)=>changeSocialMedia(e)}/>
             <label for="Youtube"> Youtube</label><br/>

            <input type="checkbox" id={styles.twitter} name="Twitter" value="Twitter"  onChange={(e)=>changeSocialMedia(e)}/>
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
      
      ).map((elem,key) =>(
         <>
       <input type="checkbox" id={styles.checkbox} name="Influencer" value={elem} onChange={(e)=>changeCategory(e)}/>
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
       <input type="checkbox" id={styles.checkbox} classname='ckbox' name={elem} value={elem} onChange={(e)=>changeInterest(e)}
       />
        <label for="influencer"> {elem}</label><br/>
        </>
       

))} </div>
        

      </div>
      <div className={styles.filter_category4} id={styles.filters}>
        <h3>City</h3>
        <div id={styles.search}>
      <Image src={searchn} id={styles.searchimg}></Image>
       <input type="search" name="city" className={styles.citySearch} value={city.city} onChange={(e)=>changeCity(e)}/>
       </div>
     
      </div>

     <div className={styles.gender} id={styles.filters}>
         <h3>Gender</h3>
         <input type="checkbox" id={styles.checkbox}  value="male" onChange={(e)=>changeGender(e)}/>
        <label for="influencer"> Male</label><br/>

        <input type="checkbox" id={styles.checkbox}  value="female"  onChange={(e)=>changeGender(e)}/>
        <label for="influencer"> Female</label><br/>

        <input type="checkbox" id={styles.checkbox}  value="nonbinary"  onChange={(e)=>changeGender(e)}/>
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
     
    {userData.slice(0,count).map((item,key) => (
            <Link href={`/${item.username}`}> <div className={styles.card}>
                <div className={styles.card_top}>
                  <Image src={item.profilePic} alt={item.title} width="400" height="300"></Image>
                  <h1>{item.username}</h1>
                </div>
                <div className={styles.card_bottom}>
                  <h4>{item.category[0]}</h4>
                  <div className={styles.icon_btn_all}>
                   
                    <button>
                      {" "}
                      <Image
                        src={tube} style={{height:"15px",width:"15px"}}
                        className={styles.insta}
                      />
                    </button>
                    <button>
                      {" "}
                      <Image
                        src={redbgfb} style={{height:"15px",width:"15px"}}
                        className={styles.insta}
                      />
                    </button>
                    <button>
                      {" "}
                      <Image
                        src={snap} style={{height:"15px",width:"15px"}}
                        className={styles.insta}
                      />
                    </button>
                    <button>
                      {" "}
                      <Image
                        src={redinsta} style={{height:"15px",width:"15px"}}
                        className={styles.insta}
                      />
                    </button>
                  </div>
                </div>
              </div> </Link> 
            ))}
    

    <div className={styles.load_more}>
  <button className={styles.load_more_btn} onClick={handleclick} > <p>See More</p>  <Image src={arrow} 
  style={{height:"15px",width:'15px'}} /> </button>

    </div>




    </div>
    
    </>
  )
}

export default searchInfluencer