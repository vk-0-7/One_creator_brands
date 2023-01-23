import Link from 'next/link'
import styles from '../styles/approval.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const approval =({approval,setapproval})=>{


    const handlecross=()=>{
        setapproval(false)
    }

 return(
    <>
          <div  style={{position:"fixed", height:"100vh",width:"100vw", top:"0" ,left:"0", zIndex:"100", backgroundColor:"rgba(0,0,0,0.1)" ,display:"flex",alignItems:"center",justifyContent:"center"}}><div className={styles.main_box} >

      <FontAwesomeIcon className={styles.crossIcon} icon={faXmark} onClick={()=>handlecross()} /> 
     <div className={styles.main_content} >
          
        <div className={styles.congrats}>
            <h2>Congratulations!!</h2>
        </div>
         <div className={styles.content}>

      <p>  We are thrilled to have you on DI.
      Our team will connect with you shortly
       to complete the verification process. </p> 
         </div>
    
     <div className={styles.btn}>
      <Link  href='/'>  <button> Go back to Homescreen</button></Link>  
     </div>


    </div>
    </div>
    </div> 
    </>
 )


}

export default approval;