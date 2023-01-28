
import {useState,useEffect} from'react';

import Navbar1 from "../components/navbar1"
import Footer from "../components/footer"
import Image from "next/image"
import styles from "../styles/userDetails.module.css"
import img from "../Images/img.jpg";
import star from "../icons/star.svg"
import music from "../icons/musicnote.svg"
import instagram from "../icons/redinsta.svg"
import facebook from "../icons/redfb.svg"
import snapchat from "../icons/Snapchatred.svg"
import tiktok from "../icons/TikTokred.svg"
import twitter from "../icons/Twitterred.svg"
import youtube from "../icons/YouTubered.svg"
import pinterest from "../icons/Pinterestred.svg"
import linkdin from "../icons/LinkedInred.svg"
import koo from "../icons/Koo.svg"
import moj from "../icons/Moj.svg"
import performance from "../icons/performance.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";


//  export  async function getStaticPaths  () {
//   const res= await axios.get('https://backend.discoverinfluencer.in/user/all');
//   const datas=res.data.users;

//   //  console.log(datas);
     


//         const paths=datas.map((elem)=>(
//           {
//             params:{
//               username:elem._id,
//             },
//           }
//         ))
       


//             return {
//               paths,
//               fallback:false,
//             }
// }






// export const getStaticProps =async({params}) =>{

//   const data =await fetch(`https://backend.discoverinfluencer.in/home/get_influencer/${params.username}`)
//   const alldata=await data.json();

//   return{
//     props:{
//       data:alldata ||null
//     }
//   }
// }


export const getServerSideProps =async(params) =>{
  const {query} =params
  console.log({query})
  const data =await fetch(`https://backend.discoverinfluencer.in/home/get_influencer_username/${query.username}`)
  const alldata=await data.json();

  return{
    props:{
      data:alldata ||null
    }
  }
}



const userDetails = ({data}) => { 

  

    const datas=data.user[0];
    console.log(datas)

    const language=datas.language
    const category=datas.category
    const intrests=datas.intrests
    const dob=datas.dateofBirth
    const brands=datas.prevBrands;


    var today= new Date();
    const year=today.getFullYear();
     const arr=dob.split("-");
     const age=year-arr[0];



  return (
    <>
    
    
     <Navbar1/>
      <div className={styles.leftBox}>
      <div className={styles.username}>
          <p>{datas.username}</p>
         

      </div>

         <div className={styles.userImage}>
          <Image className={styles.Image} src={datas.profilePic} width='400' height='400'></Image>
         </div>
       
       <div className={styles.contact_btn}>
         <button><FontAwesomeIcon  icon={faEnvelope} className={styles.envelope}/><p> conatct Me </p></button>
       </div>
       
     </div>



      <div className={styles.rightBox}>
      <div className={styles.name}><p>{datas.name} , {age} </p> </div>     
      <div className={styles.city}><p>{datas.currentCity}</p>  </div> 
  <div className={styles.icons}>
        <button>
              <Image  src={facebook} id={styles.ic}/>
                    </button>
        <button>
             {" "} <Image  src={instagram} id={styles.ic}/>
                    </button>
           <button>
            <Image  src={snapchat} id={styles.ic}/>
                    </button>
           <button>
            <Image  src={youtube} id={styles.ic}/>
                    </button>
           <button>
            <Image  src={twitter} id={styles.ic}/>
                    </button>
           <button>
            <Image  src={linkdin} id={styles.ic}/>
                    </button>
           <button>
            <Image  src={tiktok} id={styles.ic}/>
                    </button>
           <button>
            <Image  src={pinterest} id={styles.ic}/>
                    </button>
           <button>
            <Image  src={moj} id={styles.ic}/>
                    </button>
           <button>
            <Image  src={koo} id={styles.ic}/>
                    </button>
       
        </div>
      <div className={styles.category_section}>

      
        
       {category.map((val,key)=>{return(   <div id={styles.category} key={key}>
            <Image src={star} id={styles.vector} alt="category"></Image>
            <p>{val}</p>
          </div>) }) }

          </div>

      <div className={styles.interest_section}>

      
        
       { intrests
.map((val,key)=>{return(   <div id={styles.interest} key={key}>
            <Image src={performance} id={styles.vector} alt="interest"></Image>
            <p>{val}</p>
          </div>) }) }

          </div>

          <div className={styles.language_section}>
          
          { language.map((elem,index)=>{ return(
 
 <>
 <div id={styles.language} >
 <Image src={music} id={styles.music} alt='music note'/> <p> {elem}</p> 
 </div>  </>
          )
           
           })}
           
   
       </div>

  
    <div className={styles.performances}>
      <div id={styles.performance}> <div><Image src={performance} id={styles.performancesvg}/><h5>Youtube Videos</h5></div><h4>Starting price: $300</h4></div>

      <div id={styles.performance}><div><Image src={performance} id={styles.performancesvg}/><h5>Reels</h5></div><h4>Starting price: $250</h4></div>

      <div id={styles.performance}> <div><Image src={performance} id={styles.performancesvg}/><h5>Story</h5> </div> <h4>Starting price: $500</h4></div>
    </div>

     { (brands==undefined) && 
             <div className={styles.experience}>  <h3> Experience</h3> 
             { brands.map((val,ind)=>{
                   <h3 key={ind}> {val}  </h3>
             })
           
            }

    </div>}
  
      </div>
       <div className={styles.footer} >  <Footer/>  </div> 
    
    </>
  )
}

export default userDetails