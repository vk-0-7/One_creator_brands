
import {useState,useEffect} from'react';
import Navbar1 from "../components/navbar1"
import Image from "next/image"
import styles from "../styles/userDetails.module.css"
import img from "../Images/img.jpg";
import star from "../icons/star.svg"
import music from "../icons/musicnote.svg"
import redinsta from "../icons/redinsta.svg"
import redfb from "../icons/redfb.svg"
import cloud from "../icons/cloud.svg"
import category from "../icons/category.svg"
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
    const language=datas.language


  return (
    <>
    
  
  {/* {console.log(datas.name)} */}
    <Navbar1/>
      <div className={styles.leftBox}>
      <div className={styles.username}>
          <p>{datas.username}</p>
          <div id={styles.category}>
            <Image src={star} id={styles.vector} alt="category"></Image>
            <p>Influencer Category</p>
          </div>

      </div>

         <div className={styles.userImage}>
          <Image className={styles.Image} src={datas.profilePic} width='400' height='400'></Image>
         </div>
         <div className={styles.details}>
      <p className={styles.name}>{datas.name} <br /> Business Name/Alias</p>
        <p className={styles.city}>{datas.currentCity} </p>
       

    
      <div className={styles.talents}>
          
         { language.map((elem,index)=>{ return(

<>
<div id={styles.talent} >
<Image src={music} id={styles.music} alt='music note'/> <p> {elem}</p> 
</div>  </>
         )
          
          })}
          
  
      </div>
      <div className={styles.industries}>
        
        <div id={styles.industry}> 
              <Image  src={category} id={styles.categories}/><p>English</p> 
                    </div>
        <div id={styles.industry}><Image  src={category} id={styles.categories}/><p>Marathi</p> </div>
      </div>
      <p className={styles.oneliner}>
      One Liner Comes Here
     </p>
   <div className={styles.description}>
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam ab eum cum quas consequuntur? Odio, vel dignissimos quam voluptate mollitia reprehenderit sequi aut dolorum eum, tempore obcaecati velit minima aliquid! Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis totam temporibus adipisci eius? Iusto optio natus sequi similique ullam perspiciatis?
   </div>
         </div>


      </div>
      <div className={styles.rightBox}>
     <div className={styles.videobox}>
      
  </div>

  <div className={styles.icons}>
        <button>
             {" "} <Image  src={redinsta} id={styles.ic}/>
                    </button>
        <button>
              <Image  src={redfb} id={styles.ic}/>
                    </button>
        <button>
            <Image  src={cloud} id={styles.ic}/>
                    </button>
       
        </div>

  <div className={styles.price_and_contact}>
     
      <div className={styles.contact_btn}>
        <button><FontAwesomeIcon  icon={faEnvelope} className={styles.envelope}/><p> conatct Me </p></button>
      </div>

  </div>
    <div className={styles.performances}>
      <div id={styles.performance}> <div><Image src={category} id={styles.categoryimg}/><h5>Youtube Videos</h5></div><h5>Starting price: $300</h5></div>

      <div id={styles.performance}><div><Image src={category} id={styles.categoryimg}/><h5>Reels</h5></div><h5>Starting price: $250</h5></div>

      <div id={styles.performance}> <div><Image src={category} id={styles.categoryimg}/><h5>Story</h5> </div> <h5>Starting price: $500</h5></div>
    </div>
  
      </div>
    
    
    </>
  )
}

export default userDetails