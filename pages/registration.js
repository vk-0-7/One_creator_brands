import {useState,useEffect} from 'react';
import Navbar from "../components/navbar3"
import styles from "../styles/registration.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import Script from "next/script"
import {states} from "../Data/data"



 



const registration = () => {
  return (
    <>

    <Navbar/> 
     <div className={styles.main_div}>
       <h3 className={styles.main_heading}>Influencer Registration</h3>
      <div className={styles.info_profileimg}>

       <h4>Personal Info</h4>
        <h6>Let people get to know you better through your influencer profile. Be clear, detailed, and authentic!</h6>
        <form className={styles.form}>
           <div className={styles.icn}><FontAwesomeIcon icon={faUser} className={styles.usericon} /></div>
           <div className={styles.file_upload}>
           <input type="file" id={styles.file} accept="image/*"/>
           <p className={styles.file_btn}> Upload Photo </p> 
           </div>
            </form>
            </div>

         <div className={styles.other_info}>

                          {/* Name */}
            <div className={styles.name} id={styles.register}>
           <label for="name"><b id={styles.mark} >Full name</b></label><br />
           <input type="text" id={styles.inpt} placeholder="Enter Full name" name="name" required/>
          </div>

                                {/* username */}
          <div className={styles.username} id={styles.register}>
           <label for="uname"><b id={styles.mark}>Username</b></label><br />
          <input type="text"   id={styles.inpt} placeholder="Enter Username" name="uname"  required/>
          </div>

                                            {/* Business */}

            <div className={styles.business} id={styles.register}>
           <label for="name"><b id={styles.mark} >Business Name/Alias</b></label><br />
           <input type="text" id={styles.inpt} placeholder="Enter Business name" name="business" required/>
          </div>

                              {/* DOB */}
            <div className={styles.dob} id={styles.register}>
           <label for="name"><b id={styles.mark} >Date of Birth</b></label><br />
           <input type="date" id={styles.inpt} placeholder="dd/mm/yyyy" name="dob" required/>
          </div>

                              {/* language  */}
            <div className={styles.language} id={styles.register}>
           <label for="name"><b id={styles.mark} >Language</b></label><br />
                <select name="language" id={styles.select_language}>
             <option value="">Select</option>
             <option value="dog">English</option>
             <option value="cat">Hindi</option>
          </select>
          </div>
          <div id={styles.add_another} >
            <h5>+ Add another Language</h5>
          </div>
          <div className={styles.state_city}>
                          {/* city */}

            <div className={styles.city}>
           <label for="uname"><b id={styles.mark}>City</b></label><br />
           <select name="language" id={styles.select_city}>
             <option value="">Select</option>
             <option value="dog">jalandhar</option>
             <option value="cat">Ludhiana</option>
          </select>
             </div>    
                          {/* states */}
             <div className={styles.state}>
          <label for="state"><b id={styles.mark}>State</b></label><br />
          <select name="states" id={styles.select_state}>

             <option value="">Select</option>
             {states.map((elem)=>(<>
             <option value="dog">{elem}</option>
             </>
             ))}
             <option value="dog">Maharashtra</option>
             <option value="cat">punjab</option>
          </select>

            </div>
          </div>
                                 {/* number */}

          <div className={styles.number} id={styles.register}>
           <label for="uname"><b id={styles.mark}>Whatsapp Number(Personal Only) </b></label><br />
          <input type="text"  id={styles.inpt}  placeholder="+91-4726482345" name="number" required/>
          </div>
                           {/* email */}

          <div className={styles.email} id={styles.register}>
           <label for="email"><b id={styles.mark}>Email</b></label><br />
          <input type="text"   id={styles.inpt} placeholder="Enter Email" name="emzil"  required/>
          </div>
                              {/* Gender */}
          
          <div className={styles.gender} id={styles.register}>
           <label for="gender"><b id={styles.mark} >Gender</b></label><br />
                <select name="gender" id={styles.inpt}>
             <option value="">Select</option>
             <option value="male">Male</option>
             <option value="female">Female</option>
             <option value="nonbinary">Nonbinary</option>
          </select>
          </div>
    
                            {/* category */}

          <div className={styles.category} id={styles.register}>
           <label for="category"><b id={styles.mark} >Category</b></label><br />
                <select name="category" id={styles.inpt}>
             <option value="">Select</option>
             <option value="male">Male</option>
             <option value="female">Female</option>
             <option value="nonbinary">Nonbinary</option>
          </select>
          </div>
          <div id={styles.add_another} >
            <h5>+ Add another Category</h5>
          </div>

                                {/* Industry */}

          <div className={styles.industry} id={styles.register}>
           <label for="industry"><b id={styles.mark} >Industry</b></label><br />
                <select name="category" id={styles.inpt}>
             <option value="">Select</option>
             <option value="male">Male</option>
             <option value="female">Female</option>
             <option value="nonbinary">Nonbinary</option>
          </select>
          </div>
          <div id={styles.add_another} >
            <h5>+ Add another Industry</h5>
          </div> 

                   {/* brands */}

          <div className={styles.brands} id={styles.register}>
           <label for="brands"><b id={styles.mark} >Brands you've previously worked with</b></label><br />
           <input type="text" id={styles.inpt} placeholder="Name of the Brand/Company" name="brands" required/>
          </div>

                   {/* Agency */}

         
                          

            <div className={styles.agency} id={styles.register}>
           <label for="uname"><b id={styles.mark}>Are you represented by an Agency</b></label><br />
             <div className={styles.agency_btn}>
              <button>Yes</button>
              <button>No</button>
             </div>    
             
             </div>

             <div className={styles.social_media}>
                          {/* social media */}

            <div className={styles.media}>
           <label for="uname"><b id={styles.mark}>Social Media</b></label><br />
           <select name="language" id={styles.select_city}>
             <option value="">Select</option>
             <option value="instagram">Instagram</option>
             <option value="snapchat">Snapchat</option>
          </select>
             </div>    
                          {/* media links */}
             <div className={styles.medialink}>
          <label for="uname"><b id={styles.mark}>Social Media Link</b></label><br />
          <input type="text"    placeholder="https://www.instagram.com" name="emzil"  required/>
          

            </div>
          </div>
            <div id={styles.add_another} >
            <h5>+ Add another social media</h5>
          </div> 

   <div className={styles.services_body}>

      <div className={styles.socialm} id={styles.last}>
      <label for="social_media"><b id={styles.mark}>Social Media</b></label><br />
      <select name="social_media" id={styles.select_media}>
             <option value="">Select</option>
             <option value="instagram">Instagram</option>
             <option value="snapchat">Snapchat</option>
          </select>
         </div>

         <div className={styles.services} id={styles.last}>
         <label for="social_media"><b id={styles.mark}>Social Media</b></label><br />
      <select name="social_media" id={styles.select_media}>
             <option value="">Select</option>
             <option value="instagram">Instagram</option>
             <option value="snapchat">Snapchat</option>
          </select>

         </div>

         <div className={styles.services_price} id={styles.last}>
         <label for="social_media"><b id={styles.mark}>Service starting price</b></label><br />
         <input type="text" placeholder='₹ 1500' />

         </div>

   </div>
   <div id={styles.add_another} >
            <h5>+ Add another category</h5>
          </div> 
       
         
          
          </div>
       <div className={styles.terms_and_condition}>
       <input type="checkbox" id={styles.checkbox} name="terms" value=""/>
       <p>By checking the box, you are agreeing to our terms of service</p>
       </div>
       <div className={styles.create_profile}>
           <button>Create Profile</button>
       </div>
      
      
  


     </div>
    
    
    </>
  )
}

export default registration