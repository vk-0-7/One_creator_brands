
import {useState,useEffect} from'react';
import Navbar1 from "../components/navbar1"
import Footer from "../components/footer"
import Image from "next/image"
import styles from "../styles/userDetails.module.css"
import img from "../Images/img.jpg";
import star from "../icons/star.svg"
import music from "../icons/musicnote.svg"
import redinsta from "../icons/redinsta.svg"
import redfb from "../icons/redfb.svg"
import cloud from "../icons/cloud.svg"
import performance from "../icons/performance.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";


 export  async function getStaticPaths  () {
  const res= await axios.get('https://backend.discoverinfluencer.in/user/all');
  const datas=res.data.users;

  //  console.log(datas);
     


        const paths=datas.map((elem)=>(
          {
            params:{
              username:elem._id,
            },
          }
        ))
       


            return {
              paths,
              fallback:false,
            }
}




// export const getStaticProps =async (context)=>{
//   const id=context.params.username;
//   const res =await fetch(`https://backend.discoverinfluencer.in/home/get_influencer/${id}`);
//   const data= res.json();

//   return{
//     props:{
//       data:data || null
//     },
//   };
// };



// export const getStaticPaths =() =>{

//    return{
//     paths:[

//       {
//         params:{
//           username:'63b809bc5c4828c3871ad849'
//         }
//       },
//       {
//         params:{
//           username:'63c051099390b34609e62e58'
//         }
//       }
     
//     ],
//     fallback :true
//    }

// }

export const getStaticProps =async({params}) =>{

  const data =await fetch(`https://backend.discoverinfluencer.in/home/get_influencer/${params.username}`)
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

    var today= new Date();
     const arr=dob.split("-");
     console.log(arr)




  return (
    <>
    
  
  {/* {console.log(datas.name)} */}
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
      <div className={styles.name}><p>{datas.name} , Age </p> <br /> Business Name/Aias </div>     
      <div className={styles.city}><p>{datas.currentCity}</p>  </div> 
  <div className={styles.icons}>
        <button>
              <Image  src={redfb} id={styles.ic}/>
                    </button>
        <button>
             {" "} <Image  src={redinsta} id={styles.ic}/>
                    </button>
        <button>
            <Image  src={cloud} id={styles.ic}/>
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

    <div className={styles.experience}>

            <h3> Experience : {datas.yearOfExperience}</h3> 
            <h3> {datas.prevBrands[0]}  </h3>

    </div>
  
      </div>
       <div className={styles.footer} >  <Footer/>  </div> 
    
    </>
  )
}

export default userDetails