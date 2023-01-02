
import Navbar1 from "../components/navbar1";
import Footer from "../components/footer";
import styles from "../styles/index.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faSnapchat } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Coursesdata } from "../Data/data";
import Link from "next/link";
import Image from "next/image"

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "red",
        borderRadius: "10px",
        Color: "black",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "red",
        borderRadius: "10px",
        Color: "black",
      }}
      onClick={onClick}
    />
  );
}

const index = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
      <Navbar1 />
      <div className={styles.main_div}>
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
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
        <p className={styles.main_text2}>
          Finally, a solution that lets you Discover Influencer for what you
          need, when you need.
        </p>
      </div>

      <div className={styles.second_div}>
        <p className={styles.top_influencer}>Top Influencers</p>
       <Link href='/jobs'> <button className={styles.see_all_btn}>
         <p>see all influencers</p>  <FontAwesomeIcon id={styles.greater_icon} icon={faGreaterThan} />
        </button> </Link>
        <p className={styles.txt}>Discover your ideal Experience</p>
        <div className={styles.box2_carousel}>
          <Slider dots={true} {...settings}>
            {Coursesdata.map((item) => (
              <div className={styles.card}>
                <div className={styles.card_top}>
                  <Image src={item.Imglink} alt={item.title} width="300" height="400"></Image>
                  <h1>First and Last Name</h1>
                </div>
                <div className={styles.card_bottom}>
                  <h4>Categories</h4>
                  <div className={styles.icon_btn_all}>
                    <button>
                      {" "}
                      <FontAwesomeIcon
                        icon={faInstagram}
                        classname={styles.insta}
                      />
                    </button>
                    <button>
                      {" "}
                      <FontAwesomeIcon
                        icon={faYoutube}
                        classname={styles.insta}
                      />
                    </button>
                    <button>
                      {" "}
                      <FontAwesomeIcon
                        icon={faFacebook}
                        classname={styles.insta}
                      />
                    </button>
                    <button>
                      {" "}
                      <FontAwesomeIcon
                        icon={faSnapchat}
                        classname={styles.insta}
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <div className={styles.third_div}>
        <p className={styles.top_influencer}>Categories</p>
       <Link href='/jobs'> <button className={styles.see_all_btn2}>
        <p> see all categories</p>  <FontAwesomeIcon id={styles.greater_icon} icon={faGreaterThan} />
        </button> </Link>

        <div className={styles.box3_carousel}>
          <Slider dots={true} {...settings}>
            {Coursesdata.map((item) => (
              <div className={styles.card2}>
                <div className={styles.card_top2}>
                  <Image src={item.Imglink} alt={item.title} width="300" height="400" ></Image>
                  <p className={styles.category_name}>Fashion</p>
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
