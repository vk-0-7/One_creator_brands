import { useState, useEffect } from "react";
import Navbar from "../../../components/navbar3";
import styles from "../../../styles/registration.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Script from "next/script";

import { states } from "../../../Data/places";
import { Service } from "../../../Data/data";
import { SocialMedia } from "../../../Data/data";
import { influencerCategory } from "../../../Data/data";
import { Interest } from "../../../Data/data";
import { s_a } from "../../../Data/places";
import languages from "../../../Data/language";

const registration = () => {
  const [state, setState] = useState(1);

  const [city, setCity] = useState([]);

  const [languagecount, setLanguageCount] = useState([0]);
  const [categorycount, setCategoryCount] = useState([0]);
  const [interestcount, setInterestCount] = useState([0]);
  const [statecount, setStateCount] = useState([0]);
  const [mediacount, setMediaCount] = useState([0]);
  const [servicecount, setServiceCount] = useState([0]);

  const addLanguage = () => {
    setLanguageCount([1, ...languagecount]);
  };
  const addCategory = () => {
    setCategoryCount([1, ...categorycount]);
  };
  const addInterest = () => {
    setInterestCount([1, ...interestcount]);
  };
  const addState = () => {
    setStateCount([1, ...statecount]);
  };
  const addMedia = () => {
    setMediaCount([1, ...mediacount]);
  };
  const addService = () => {
    setServiceCount([1, ...servicecount]);
  };

  useEffect(() => {
    console.log(state);
    setCity(s_a[state].split("|"));
  }, [state]);

  useEffect(() => {
    console.log(city);
  }, [city]);

  return (
    <>
      <Navbar />
      <div className={styles.main_div}>
        <h3 className={styles.main_heading}>Influencer Registration</h3>
        <div className={styles.info_profileimg}>
          <h4>Personal Info</h4>
          <h6>
            Let people get to know you better through your influencer profile.
            Be clear, detailed, and authentic!
          </h6>
          <form className={styles.form}>
            <div className={styles.icn}>
              <FontAwesomeIcon icon={faUser} className={styles.usericon} />
            </div>
            <div className={styles.file_upload}>
              <input type="file" id={styles.file} accept="image/*" />
              <p className={styles.file_btn}> Upload Photo </p>
            </div>
          </form>
        </div>

        <div className={styles.other_info}>
          {/* Name */}
          <div className={styles.name} id={styles.register}>
            <label for="name">
              <b id={styles.mark}>Full name</b>
            </label>
            <br />
            <input
              type="text"
              id={styles.inpt}
              placeholder="Enter Full name"
              name="name"
              required
            />
          </div>

          {/* username */}
          <div className={styles.username} id={styles.register}>
            <label for="uname">
              <b id={styles.mark}>Username</b>
            </label>
            <br />
            <input
              type="text"
              id={styles.inpt}
              placeholder="Enter Username"
              name="uname"
              required
            />
          </div>

          {/* Business */}

          <div className={styles.business} id={styles.register}>
            <label for="name">
              <b>Business Name/Alias</b>
            </label>
            <br />
            <input
              type="text"
              id={styles.inpt}
              placeholder="Enter Business name"
              name="business"
              required
            />
          </div>

          {/* DOB */}
          <div className={styles.dob} id={styles.register}>
            <label for="name">
              <b id={styles.mark}>Date of Birth</b>
            </label>
            <br />
            <input
              type="date"
              id={styles.inpt}
              placeholder="dd/mm/yyyy"
              name="dob"
              required
            />
          </div>

          {/* language  */}
          <div id={styles.dropdown}>
            <label for="name">
              <b id={styles.mark}>Language</b>
            </label>
            <br />
            {languagecount.map((elem) => (
              <div className={styles.language} id={styles.select}>
                <select name="language">
                  <option value="" disabled hidden selected>
                    Select
                  </option>
                  {languages.map((elem) => (
                    <>
                      <option>{elem.name}</option>
                    </>
                  ))}
                </select>
              </div>
            ))}{" "}
          </div>

          <div id={styles.add_another}>
            <h5 onClick={addLanguage}>+ Add another Language</h5>
          </div>

          <div className={styles.state_city}>
            {/* states */}
            <div className={styles.state}>
              <label for="state">
                <b id={styles.mark}>State</b>
              </label>
              <br />
              {statecount.map((elem) => (
                <div className={styles.allstates}>
                <select
                  name="states"
                  id={styles.select_state}
                  onChange={(e) => setState(e.target.value)}
                >
                  {states.map((elem, key) => (
                    <>
                      <option value="" disabled selected hidden>
                        Select
                      </option>

                      <option value={key}>{elem}</option>
                    </>
                  ))}
                </select>
                </div>
              ))}
            </div>

            {/* city */}

            <div className={styles.city}>
              <label for="uname">
                <b id={styles.mark}>City</b>
              </label>
              <br />
              {statecount.map((elem,key)=>( 
                <div className={styles.allcities}>
              <select name="city" id={styles.select_city}>
                <option value="" disabled selected hidden>
                  Select
                </option>
                {city.map((elem) => (
                  <>
                    <option value="key">{elem}</option>
                  </>
                ))}
              </select> </div>))}
            </div>
          </div>
          <div id={styles.add_another}>
            <h5 onClick={addState}>+ Add another Place</h5>
          </div>

          {/* number */}
           <div className={styles.number_main}>
          <div className={styles.number} >
            <label for="uname">
              <b id={styles.mark}>Mobile Number(Personal Only) </b>
            </label>
            <br />
            <input
              type="number"
              id={styles.inpt}
              placeholder="+91-4726482345"
              name="number"
              required
            />
          </div>
            <div className={styles.mobile_checkbox}>
            <div id={styles.ckbx}> <input type="checkbox" name="shownumber"  />
              <p>Show my Mobile Numbers only to Premium users</p><br /> </div>
              <h6>If Unchecked,Your mobile number will be visible to everyone</h6>

            </div>
          </div>
          {/* email */}
             <div className={styles.email_main}>
          <div className={styles.email} id={styles.register}>
            <label for="email">
              <b id={styles.mark}>Email</b>
            </label>
            <br />
            <input
              type="text"
              id={styles.inpt}
              placeholder="Enter Email"
              name="emzil"
              required
            />
          </div>
          <div className={styles.email_checkbox}>
            <div id={styles.ckbx}>
              <input type="checkbox" name="showemail"  />
              <p>Show my Email address only to Premium users</p><br /> </div>
              <h6>If Unchecked,Your Email address will be visible to everyone</h6>

            </div>
            </div>
          {/* Gender */}
            <div id={styles.dropdown}>
          <label for="gender">
            <b id={styles.mark}>Gender</b>
          </label>
          <br />
          <div  id={styles.select}>
            <select name="gender" >
              <option value="" disabled hidden selected>
                Select
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="nonbinary">Nonbinary</option>
            </select>
          </div> </div>

          {/* category */}
          <div id={styles.dropdown}>
          <label for="category">
            <b id={styles.mark}>Category</b>
          </label>
          <br />
          {categorycount.map((element) => (
            <div id={styles.select}>
              <select name="category">
                {influencerCategory.map((elem) => (
                  <>
                    <option value="" disabled hidden selected>
                      Select
                    </option>
                    <option>{elem}</option>
                  </>
                ))}
              </select>
            </div>
          ))}
       </div>
          <div id={styles.add_another}>
            <h5 onClick={addCategory}>+ Add another Category</h5>
          </div>

          {/* Interest */}
          <div id={styles.dropdown}>
          <label for="industry">
            <b id={styles.mark}>Interest</b>
          </label>
          <br />
          {interestcount.map((elem) => (
            <div id={styles.select}>
              <select name="category">
                <option value="" selected hidden disabled>
                  Select
                </option>
                {Interest.map((elem) => (
                  <option value="">{elem}</option>
                ))}
              </select>
            </div>
          ))}
          </div>
          <div id={styles.add_another}>
            <h5 onClick={addInterest}>+ Add another interest</h5>
          </div>

          {/* brands */}

          <div className={styles.brands} id={styles.register}>
            <label for="brands">
              <b>Brands you've previously worked with</b>
            </label>
            <br />
            <input
              type="text"
              id={styles.inpt}
              placeholder="Name of the Brand/Company"
              name="brands"
              required
            />
          </div>

          {/* Agency */}

          <div className={styles.agency} >
            <label for="uname">
              <b id={styles.mark}>Are you represented by an Agency</b>
            </label>
            <br />
            <div className={styles.agency_btn}>
              <button id={styles.butn}>Yes</button>
              <button id={styles.butn}>No</button>
            </div>
          </div>

          <div className={styles.social_media}>


            {/* social media */}

            <div className={styles.media}>
              <label for="media">
                <b id={styles.mark}>Social Media</b>
              </label>
              <br />
              {mediacount.map((val,key)=>(<div className={styles.all_media}>
               <select name="language" id={styles.select_city}>
                <option value="" disabled hidden selected>Select</option>
                 {SocialMedia.map((val,key) =>(
                  <option value={key}>{val}</option>
                 ))}
              </select> </div>)) }
            </div>
            {/* media links */}
            <div className={styles.medialink}>
              <label for="uname">
                <b id={styles.mark}>Social Media Link</b>
              </label>
              <br />
             {mediacount.map((val)=>(
               <div className={styles.all_links}><input
                type="text"
                placeholder="https://www.instagram.com"
                name="emzil"
                required
              /> </div> )) }
            </div>
          </div>
          <div id={styles.add_another}>
            <h5 onClick={addMedia}>+ Add another social media</h5>
          </div>

          <div className={styles.services_body}>
            <div className={styles.socialm} id={styles.last}>
              <label for="social_media">
                <b id={styles.mark}>Social Media</b>
              </label>
              <br />
             {servicecount.map((key)=>(<div>
              <select name="social_media" id={styles.select_media}>
                <option hidden selected disabled >Select</option>
                {SocialMedia.map((val,key)=>(
                  <option value={key}>{val}</option>
                ))}
              </select> </div>)) }
            </div>

            <div className={styles.services} id={styles.last}>
              <label for="social_media">
                <b id={styles.mark}>Service</b>
              </label>
              <br />
               {servicecount.map((key)=>(<div><select name="social_media" id={styles.select_media}>
                <option selected disabled hidden>Select</option>
                {Service.map((val,key)=>(
                  <option value={key}>{val}</option>
                ))}
              </select> </div>)) }
            </div>

            <div className={styles.services_price} id={styles.last}>
              <label for="social_media">
                <b id={styles.mark}>Service starting price</b>
              </label>
              <br />
             {servicecount.map((key)=>( <div><input type="number" placeholder="₹ 1500" /> </div>))}
            </div>
          </div>
          <div id={styles.add_another}>
            <h5 onClick={addService}>+ Add another category</h5>
          </div>
          
        <div className={styles.terms_and_condition}>
          <input type="checkbox" id={styles.checkbox} name="terms" value="" />
          <p>By checking the box, you are agreeing to our terms of service</p>
        </div>
        <div className={styles.create_profile}>
          <button>Create Profile</button>
        </div>
        </div>
      </div>
    </>
  );
};

export default registration;
