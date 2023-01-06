import React from 'react'
import Navbar3 from "../components/navbar3"
import Link from "next/link"

const activated = () => {
  return (
    <>
      <Navbar3></Navbar3>
        <div style={{color:"black",position:'absolute',top:"200px",width:"100vw",textAlign:"center" ,fontSize:"1.4rem"}}> 
        
       <p >Your Account is now Activated.</p> 
       <Link href="/registration" style={{textDecoration:"none"}} > <p  style={{fontSize:"1.4rem",marginTop:"20px",color:" rgb(190, 52, 85)"}}>Continue with Profile registration</p> </Link>
       </div>
    
    
    </>
  )
}

export default activated;