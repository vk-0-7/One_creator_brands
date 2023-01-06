import React from 'react'
import Navbar3 from "../components/navbar3"
import Link from "next/link"

const emailsent = () => {
  return (
    <>
      <Navbar3></Navbar3>
        <div style={{color:"black",position:'absolute',top:"200px",width:"100vw",textAlign:"center" ,fontSize:"1.4rem"}}> 
        
       <p >We have sent an Activation link on your email address.</p> 
       <Link href="/" style={{textDecoration:"none"}} > <p  style={{fontSize:"1.4rem",marginTop:"20px",color:" rgb(190, 52, 85)"}}>Go to Homepage</p> </Link>
       </div>
    
    
    </>
  )
}

export default emailsent