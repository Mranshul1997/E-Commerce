import React from "react";
import Hero from "../Hero/Hero";
import NavBar from "../NavBar/NavBar.jsx";
import Category3 from "../category/Category3";
import Category2 from "../category/Category2";
import Services from "../services/Services.jsx";
import Banner from "../Banner/Banner";
import headphone from "../../assets/hero/headphone.png";
import smartwatch2 from "../../assets/category/smartwatch2-removebg-preview.png";
import Products from "../products/Products";
import Blogs from "../blogs/Blogs";
import Partners from "../partners/Partners";
import Footer from "../Footer/Footer";
import Popup from "../popup/Popup";
// import Thank from "../cart/Thank.jsx";

import AOS from "aos";
import "aos/dist/aos.css";

const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "10 Jan to 28 Jan",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor: "#f42c37",
};
const BannerData2 = {
  discount: "30% OFF",
  title: "Happy Hours",
  date: "10 Jan to 28 Jan",
  image: smartwatch2,
  title2: "Smart Solo",
  title3: "Winter Sale",
  title4:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  bgColor: "#2dcc6f",
};

const Home = ({ handleOrderPopup, orderPopup, setOrderPopup }) => {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>

      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
        {/* <NavBar handleOrderPopup={handleOrderPopup}
            orderPopup={orderPopup}
            setOrderPopup={setOrderPopup}/>
        <Thank/> */}
        <Hero handleOrderPopup={handleOrderPopup} />
        <Category3 />
        <Category2 />
        <Services />
        <Banner data={BannerData} />
        <Products />
        <Banner data={BannerData2} />
        <Blogs />
        <Partners />
        <Footer />
        <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
    </>
  );
};

export default Home;
