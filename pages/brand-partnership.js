import React,{useState,useEffect} from 'react'
import styles from '../styles/brand-partnership.module.css'
import {category} from "../database/data"
import {industry} from "../database/data"
import Image from 'next/image'
import axios from "axios";
import Navbar from '../components/Navbar'
import arrow_down from '../public/assets/icons/arrow-down.svg'
// import  brandRequest  from './api/index'
import callApi from './api/index'
import {validateEmail} from './validation/index'
import {isValidUrl} from './validation/index'
import ClipLoader from "react-spinners/ClipLoader";
import BrandRegistered from '../components/modal/brandRegistered'
import { useRouter } from 'next/router'


const brandpartnership = () => {
  const router = useRouter()
  
  
  

  const[showRegisteredModal,setShowRegisteredModal]=useState(false)

  const [btnLoader,setBtnLoader]=useState(false);
  const [color,setColor] =useState("#ffffff")

  const [user,setUser]=useState({
    
      partnerOn:"",
      fullName:"",
      email:"",
      mobileNumber:"",
      brandName:"",
      leaglName:"",
      dateOfRegistration:"",
      industry:"",
      socialLinks:{
          facebook:"",
          twitter:"",
          linkedIn:"",
          instagram:"",
          youtube:""
      },
      website:"",
      services:[]
  })
 
 

  useEffect(() => {
    // let checkbox= document.getElementById('checkbox') 
   

    if (user.fullName && user.email &&user.brandName && user.dateOfRegistration && user.industry && user.mobileNumber && user.leaglName && validateEmail(user.email) && isValidUrl(user.socialLinks.instagram)){
      
      document.getElementById('createprofile_btn').style.backgroundColor='rgba(175, 45, 62,1)'
    }
    else{
      document.getElementById('createprofile_btn').style.backgroundColor='rgba(175, 45, 62,0.5)'
    }
    
   

  }, [user])



  // ******************
  const handlechange = (e)=>{
   
    setUser((old)=>{
      if(e.target.name ==='instagram'||e.target.name ==='facebook'||e.target.name ==='youtube'||e.target.name ==='linkedIn'){
        return { ...old, socialLinks:{...old.socialLinks, [e.target.name] : e.target.value}}
      } else{
        return { ...old, [e.target.name] : e.target.value}
      }
    })
  }

  const handleCall = ()=>{
    if(user.fullName && user.email &&user.brandName && user.dateOfRegistration && user.industry && user.mobileNumber && user.leaglName && validateEmail(user.email) && isValidUrl(user.socialLinks.instagram)){
      setBtnLoader(true);
      callApi('post','user/partner-brand-request', user)
      .then((res)=>{
        console.log('response : ', res)
        setBtnLoader(false)
        setShowRegisteredModal(true)
      })
      .catch((error)=>{
        console.log('error : ', error)
        setBtnLoader(false)
        alert("failed")
      })
    }
  }
  // ******************
  
  
  
 


  return (<>
{showRegisteredModal ? <BrandRegistered setShowRegisteredModal={setShowRegisteredModal}/> :null }

    <div style={{backgroundColor:"var(--primary-facecolor)" ,paddingBottom:"3rem"}} >
  <Navbar/>
     
       <div className={styles.main_div} id='main_div'>
        <h2 className={styles.main_heading}>become a partner</h2>
          <div className={styles.inputSection}>
          <div id={styles.dropdown} >
           <h3>thank you for showcasing your interest in becoming a partner on,</h3>
            
           
              <div className={styles.categories} id={styles.select} >
                <select 
                  id={styles.selection}
                  name="partnerOn"
                 onChange={handlechange}
                 value={router.query.$value}
                >
                  <option value="" disabled hidden selected>
                    Select
                  </option>
                  {category.map((elem,key) => (
                    <>
                      <option key={key} >{elem}</option>
                    </>
                  ))}
                 
                </select>
                <Image src={arrow_down}/>
                </div>
               
          </div>


          <h3 id={styles.content}>to make this process easier, we have created this short form that will help us choose the best way forward for our partnership</h3>

          <div className={styles.name} id={styles.register}>
            <label for="name">
              <b id={styles.mark}>full name</b>
            </label>
            <br />
            <input
              type="text"
              onChange={handlechange}
              id={styles.inpt}
              placeholder="enter name"
              name="fullName" 
              required
            />
          </div>

          <div className={styles.number}>
              <label for="uname">
                <b id={styles.mark}>mobile number </b>
              </label>
              <br />
              <input
                type="number"
                id={styles.inpt}
                placeholder="enter mobile number(+91-4726482345)"
                name="mobileNumber"
                onChange={handlechange}
                required
              />
            </div>

            <div className={styles.email}>
              <label for="email">
                <b id={styles.mark}>email</b>
              </label>
              <br />
              <input
                type="text"
                id={styles.inpt}
                placeholder="enter email"
                name="email"
                onChange={handlechange}
                
                required
              />
            </div>

   <h3>lets get to know your brand a little better shall we?</h3> <br />

   <div className={styles.brand}>
              <label for="brand name">
                <b id={styles.mark}>brand name</b>
              </label>
              <br />
              <input
                type="text"
                id={styles.inpt}
                placeholder="enter your brand name here"
                name="brandName"
                onChange={handlechange}
                
                required
              />
            </div>

   <div className={styles.companyName}>
              <label for="company name">
                <b id={styles.mark}>legal name</b>
              </label>
              <br />
              <input
                type="text"
                id={styles.inpt}
                placeholder="enter your company's legal name here"
                name="leaglName"
                onChange={handlechange}
                
                required
              />
            </div>

            <div className={styles.dob} >
            <label for="date">
              <b id={styles.mark}>date of incorporation/registration</b>
            </label>
            <br />
            <input
               style={{paddingRight:"10px"}}
              type="date"
              // id={styles.inpt}
              // placeholder="dd/mm/yyyy"
              name="dateOfRegistration"
              onChange={handlechange}
              required
            />
          </div>

          <div id={styles.dropdown} >
           
              <div className={styles.industry} id={styles.select}  >
              <label for="name">
              <b id={styles.mark}>industry</b>
            </label>
            <br />
                <select 
                  id={styles.selection}
                  name="industry"
                  onChange={handlechange}
                  
                >
                  <option value="" disabled hidden selected>
                    Select
                  </option>
                  {industry.map((elem,key) => (
                    <>
                      <option key={key} >{elem}</option>
                    </>
                  ))}
                 
                </select>
                <Image src={arrow_down}/>
                </div>
                
          </div>
 <br />
            <div className={styles.email}>
              <label for="email">
                <b id={styles.mark}>add your brand instagram page</b>
              </label>
              <br />
              <input
                type="text"
                id={styles.inpt}
                placeholder="https://www.instagram.com/"
                name="instagram"
                onChange={handlechange}
               
                
                required
              />
            </div>
            {/* <div className={styles.terms_and_condition}>
            <input type="checkbox" id='checkbox'name="terms" value="true" onClick={(e)=>{setisConfirm(!isConfirm)}} />
            <p>By checking the box, you are agreeing to our terms of service</p>
          </div> */}
          <div className={styles.create_profile}>
            <button id="createprofile_btn" onClick={
              handleCall
            } >{ btnLoader ?  <ClipLoader
              color={color}
              loading={btnLoader}
              // cssOverride={override}
              size={25}
              aria-label="Loading Spinner"
              data-testid="loader"
            /> : <span> submit</span>}</button>
          </div>



          </div>
         

</div>
    </div>

    </>
  )
}

export default brandpartnership