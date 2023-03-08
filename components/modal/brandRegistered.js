import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import styles from "../../styles/brandRegistered.module.css"
import {useRouter} from 'next/router'


const brandRegistered = ({setShowRegisteredModel}) => {
 const router=useRouter();

const handlecross=()=>{
    setShowRegisteredModel(false)
}

const handleHome=()=>{
  router.push('/')
}

  return (
    <div style={{position:"fixed", height:"100vh",width:"100vw", top:"0" ,left:"0", zIndex:"100", backgroundColor:"rgba(0,0,0,0.1)"}}>

    <div className='main_page' style={{display:"flex",alignItems:"center",justifyContent:"center"}}>

{/* <FontAwesomeIcon  icon={faXmark} style={{
          color:"white",
          height:"20px",
          width:"20px",
          position:"absolute",
          top:"20px",
          right:"30px",
          cursor:"pointer"


    }} onClick={handlecross}/>  */}
        
       <div className='main_body'>  <h2 >
       we have received your request for brand partnership. <br />
our team shall connect with you in next 24 hrs. 
          </h2>  
      <br /> <br />
         
         
           <button className='btn'  onClick={handleHome}
           
           > go back to homescreen</button> </div> 
        
        </div> 

<style jsx>{`
  .main_page{
    height:26rem;
    width:47vw;
    padding:3rem 3rem;
    position:absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
    background-color:#201315;
    border-radius:30px;
  }

   h2{
    text-align:center;
    line-height:35px;
    font-size:1.23rem;
    color:white;
   }
  .btn{
              height:48px;
              width:87%;
              margin:25px 0px 0px 30px;
              
              font-size:1.1rem;
              border:none;
              border-radius:15px;
              background-color: #AF2D3E;
              color:white;
              cursor: pointer;
   }
   @media (max-width:500px) {
       
    .main_page{
 
           height:26rem;
           width:90vw;
           padding:3rem 1rem;
          
          
           border-radius:20px;
        }
      }

`}
</style>

    </div>
  )
}

export default brandRegistered