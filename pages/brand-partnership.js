import React,{useState,useEffect} from 'react'
import styles from '../styles/brand-partnership.module.css'
import {category} from "../database/data"
import {industry} from "../database/data"
import Image from 'next/image'
import Navbar from '../components/Navbar'
import arrow_down from '../public/assets/icons/arrow-down.svg'
import { brandRequest } from './api/index'

const brandpartnership = () => {

  const [user,setUser]=useState({
    partnerOn:"",
    fullName:"",
    email:"",
    mobileNumber:"",
    brandName:"",
    leaglName:"",
    dateOfRegistration:"",
    industry:"",
    website:""
  })

  const hndlechange=(e)=>{
    const {name,value}=e.target
    setUser({
    ...user,
    [name]:value
    })
  }



  return (<>
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
                  name="category"
                 
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
             
              id={styles.inpt}
              placeholder="enter name"
              name="name" 
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
                name="number"
               
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
               
                
                required
              />
            </div>

   <h3>lets get to know your brand a little better shall we?</h3> <br />

   <div className={styles.email}>
              <label for="email">
                <b id={styles.mark}>brand name</b>
              </label>
              <br />
              <input
                type="text"
                id={styles.inpt}
                placeholder="enter your brand name here"
                name="email"
               
                
                required
              />
            </div>

   <div className={styles.email}>
              <label for="email">
                <b id={styles.mark}>legal name</b>
              </label>
              <br />
              <input
                type="text"
                id={styles.inpt}
                placeholder="enter your company's legal name here"
                name="email"
               
                
                required
              />
            </div>

            <div className={styles.dob} >
            <label for="date">
              <b id={styles.mark}>date of incorporation/registration</b>
            </label>
            <br />
            <input
              // style={{ paddingRight: "10px" }}
              type="number"
              // id={styles.inpt}
              placeholder="dd/mm/yyyy"
              name="dob"
              
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
                name="email"
               
                
                required
              />
            </div>
            <div className={styles.terms_and_condition}>
            <input type="checkbox" id={styles.checkbox} name="terms" value="true"  />
            <p>By checking the box, you are agreeing to our terms of service</p>
          </div>
          <div className={styles.create_profile}>
            <button id="createprofile_btn" >submit form</button>
          </div>



          </div>
         

</div>
    </div>

    </>
  )
}

export default brandpartnership