import { useState,useEffect } from "react";
import search from "../icons/searchn.svg"
import arrowleft from "../icons/arrow-left.svg"
import Navbar1 from "../components/navbar1";
import SignIn from "../components/signin"
import Signup from "../components/signup"
import Head from  "next/head"
import Footer from "../components/footer";
import styles from "../styles/index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Script from "next/script"
import { faChevronRight ,faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faSnapchat } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

import axios from 'axios';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Coursesdata } from "../Data/data";
import { ImagesDivThree } from "../Data/data";
import Link from "next/link";
import Image from "next/image"


function SampleNextArrow(props) {

  const { className, style, onClick } = props;
  return (
    <div 
      className={className} id={styles.arrow_body}
      
      onClick={onClick}
      > <FontAwesomeIcon icon={faChevronRight} id={styles.arrow}/> </div>
  );
}
function SecondNextArrow(props) {

  const { className, style, onClick } = props;
  return (
    <div 
      className={className} id={styles.arrow_body}
      
      onClick={onClick}
      > <FontAwesomeIcon icon={faChevronRight} id={styles.thirdarrow}/> </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className} id={styles.arrow_body}
      onClick={onClick}  style={{zIndex:"5"}}
    ><Image src={arrowleft}  id={styles.arrw} alt="arrow"/></div>
  );
}
function SecondPrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className} id={styles.arrow_body}
      onClick={onClick}  style={{zIndex:"5"}}
    ><FontAwesomeIcon icon={faChevronLeft}  id={styles.thirdarrw}/></div>
  );
}


const index = () => {

  const [topdata,setTopdata] =useState([]);
  const [newdata,setNewdata] =useState([]);

 const [showsignup,setShowSignup] =useState(false)
  const [showModal,setShowModal]= useState(false);

 useEffect(() => {
   if (showModal) {
    document.body.style.backgroundColor= 'rgba(0,0,0,0.3)'
   
   }
   else{
   document.body.style.backgroundColor= 'rgba(0,0,0,0)';
  }

 }, [showModal])


   const   getInfluencerTop= async()=>{
         try {
            const res= await axios.get('https://backend.discoverinfluencer.in/user/top');
            const data=res.data.topUsers;
            setTopdata(data)
            const response= await axios.get('https://backend.discoverinfluencer.in/user/all');
            const datas=response.data.users;
            setNewdata(datas)
            
         } catch (error) {
            console.log('error fetching all top data',error.message)
         }
   }




   useEffect(()=>{
    getInfluencerTop();
   

 },[])



 
 
 
  

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow  />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const setting = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SecondNextArrow />,
    prevArrow: <SecondPrevArrow  />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
    {console.log(topdata)}
    {console.log(newdata)}
      <Head>
       <meta name="description" content="Discover Influencer"/>
       </Head>
      <Head>
       <meta name="author" content="CFT labs"/>
       </Head>
       <Head>
       <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
       </Head>

       <Head>
       <title>
         Discover Influencers | Search by Name, Username, Category, City | Top Creators in India
       </title>
       <link rel="icon" href="/favicon.ico"  sizes="16x16 32x32 64x64"/>
       </Head>

       
        
       

         <div className={styles.navbar} ><Navbar1 show={showModal} set={setShowModal}/>  </div> 
        <div> <SignIn show={showModal} set={setShowModal} showsignup={showsignup} setsignup={setShowSignup}/> </div>
       { showsignup ? <div> <Signup show={showModal} set={setShowModal} showsignup={showsignup} setsignup={setShowSignup}/> </div> :null}
      <div className={styles.main_div}>
         
           <div className={styles.inside_main_box}>
        <p className={styles.main_text}>
          {" "}
          Discover Right Influencer <br /> for Your Campaign
        </p>
        <form className={styles.form}>
          <input
            type="text"
            className={styles.search}
            placeholder="Enter name,username,city 
          or category"
          />
          <button className={styles.search_icon}>
            <Image src={search} alt="search" id={styles.search} priority></Image>
          </button>
        </form>
        <p className={styles.main_text2}>
          Finally, a solution that lets you Discover Influencer for what you
          need, when you need.
        </p>
        </div>
      </div>

      {/* div for top influencer carousel */}

      <div className={styles.second_div}>
        <p className={styles.top_influencer}>Top Influencers</p>
       <Link href='/searchInfluencer'> <button className={styles.see_all_btn}>
         <p>see all influencers</p>  <FontAwesomeIcon id={styles.greater_icon} icon={faChevronRight} />
        </button> </Link>
        <p className={styles.txt}>Discover Top Influencers from the Country</p>
        <div className={styles.box2_carousel}>
          <Slider dots={true} {...settings}>
            {topdata.map((item,key) => (
              <div className={styles.card}>
                <div className={styles.card_top} key={key}>
                  <Image src={item.profilePic} alt={item.title} width="300" height="400" priority></Image>
                  <h1>{item.name}</h1>
                </div>
                <div className={styles.card_bottom}>
                  <h4>{item.category[0]}</h4>
                  <div className={styles.icon_btn_all}>
                    <button>
                      {" "}
                      <FontAwesomeIcon
                        icon={faInstagram}
                      className={styles.insta}
                      />
                    </button>
                    <button>
                      {" "}
                      <FontAwesomeIcon
                        icon={faYoutube}
                      className={styles.insta}
                      />
                    </button>
                    <button>
                      {" "}
                      <FontAwesomeIcon
                        icon={faFacebook}
                      className={styles.insta}
                      />
                    </button>
                    <button>
                      {" "}
                      <FontAwesomeIcon
                        icon={faSnapchat}
                      className={styles.insta}
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* div for new influencer carousel */}

      
      <div className={styles.second_div} id={styles.sec_div}>
        <p className={styles.top_influencer}>Discover New Influencers Faster</p>
       
        <p className={styles.txt}>Discover the Newest Influencers from the Country</p>
        <div className={styles.box2_carousel}>
          <Slider dots={true} {...settings}>
            {newdata.map((item,key) => (
              <div className={styles.card}>
                <div className={styles.card_top} key={key}>
                  <Image src={item.profilePic} alt={item.title} width="300" height="400" priority></Image>
                  <h1>{item.name}</h1>
                </div>
                <div className={styles.card_bottom}>
                  <h4>{item.category[0]}</h4>
                  <div className={styles.icon_btn_all}>
                    <button>
                      {" "}
                      <FontAwesomeIcon
                        icon={faInstagram}
                      className={styles.insta}
                      />
                    </button>
                    <button>
                      {" "}
                      <FontAwesomeIcon
                        icon={faYoutube}
                      className={styles.insta}
                      />
                    </button>
                    <button>
                      {" "}
                      <FontAwesomeIcon
                        icon={faFacebook}
                      className={styles.insta}
                      />
                    </button>
                    <button>
                      {" "}
                      <FontAwesomeIcon
                        icon={faSnapchat}
                      className={styles.insta}
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* div for categories carousel */}

      <div className={styles.third_div}>
        <p className={styles.top_influencer}>Categories</p>
       <Link href='/searchInfluencer'> <button className={styles.see_all_btn2}>
        <p> see all categories</p>  <FontAwesomeIcon id={styles.greater_icon} icon={faChevronRight} />
        </button> </Link>

        <div className={styles.box3_carousel}>
          <Slider dots={true} {...setting  }>
            {ImagesDivThree.map((item,key) => (
              <div className={styles.card2} key={key}>
                <div className={styles.card_top2} >
                  <Image src={item.Img} alt={item.title} width="300" height="400" priority ></Image>
                  <p className={styles.category_name}>{item.category}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
     <div className={styles.footer}> <Footer/></div>

    



    
     
    </>
  );
};

export default index;
