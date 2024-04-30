import "swiper/css";
import { Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Pagination } from 'swiper/modules';
import "swiper/css/navigation";
import "swiper/css/navigation";

import imageOne from "../Images/land.jpg";
import imageTwo from "../Images/creative.jpg";
import imageTree from "../Images/more creative.jfif";

import {  useTypewriter, Cursor } from 'react-simple-typewriter'


import { Bounce, Fade, Zoom } from "react-awesome-reveal";

 
 

const Slider = () => {
  const [text] = useTypewriter({
    words: ['LandScape Painting', 'Potraite Painting', 'WaterColor PainTing', 'CarToon PainTing'],
    loop: {},

  })

  return (
    <div>
      <Swiper
              pagination={{
                clickable: true,
              }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}

        navigation={true}
        modules={[Navigation, Autoplay, Pagination]}
        className="mySwiper w-full lg:w-9/12 h-[500px] mx-auto my-5 "
      >
        {/* <SwiperSlide className="relative  ">
          <div className="flex flex-col h-full justify-center items-center space-y-3">
            <p className=" font-bold text-3xl z-30 text-white ">
              Professional <span className="text-red-500">{text}</span> <Cursor cursorColor="red" cursorBlinking={true} cur cursorStyle={'|'}></Cursor>
            </p>
 
            <p className="font-robotocon text-md text-center w-5/12 z-30 text-white ">
              <Bounce duration={1000} >
              Step into a world where creativity knows no bounds, where
              imagination takes flight, and where every brushstroke, every
              stitch, every bead is a manifestation of boundless inspiration.
              Welcome to our art and craft store, where the vibrant colors of
              possibility dance on every canvas and where every aisle holds a
              treasure trove of artistic potential.
              </Bounce>

            </p>
           
              <button className="z-40 bg-green-600 text-white px-3 py-2">
          
                <Fade cascade delay={300}>
                Bye Now
                </Fade>
            
            </button>
          
 

 

  

          </div>
          <div className="absolute top-0  z-0 left-0 w-full h-full">
            <img src={imageOne} alt="" />
          </div>
          <div className="w-full h-full top-0 left-0 bg-black absolute opacity-50"></div>
        </SwiperSlide> */}
        <SwiperSlide className="relative  ">
          <div className="flex flex-col h-full justify-center items-center space-y-3">
          <p className=" font-bold text-md md:text-xl lg:text-3xl z-30 text-white ">
              Professional <span className="text-red-500">{text}</span><Cursor cursorColor="red" cursorBlinking={true} cur cursorStyle={'|'}></Cursor>
            </p>
            <p className="font-robotocon text-md text-center w-5/12 z-30 text-white ">
              <Bounce duration={1000} >
              Step into a world where creativity knows no bounds, where
              imagination takes flight, and where every brushstroke, every
              stitch, every bead is a manifestation of boundless inspiration.
              Welcome to our art and craft store, where the vibrant colors of
              possibility dance on every canvas and where every aisle holds a
              treasure trove of artistic potential.
              </Bounce>

            </p>
            <button className="z-40 bg-green-600 text-white px-3 py-2">
            <Fade cascade delay={300}>
                Bye Now
                </Fade>
                </button>
          </div>
          <div className="absolute top-0  z-0 left-0 w-full h-full">
            <img className="w-full h-full" src={imageOne} alt="" />
          </div>
          <div className="w-full h-full top-0 left-0 bg-black absolute opacity-50"></div>
        </SwiperSlide>
        <SwiperSlide className="relative  ">
          <div className="flex flex-col h-full justify-center items-center space-y-3">
          <p className=" font-bold text-md md:text-xl lg:text-3xl z-30 text-white ">
              Professional <span className="text-red-500">{text}</span><Cursor cursorColor="red" cursorBlinking={true} cur cursorStyle={'|'}></Cursor>
            </p>
            <p className="font-robotocon text-md text-center w-5/12 z-30 text-white ">
              <Bounce duration={1000} >
              Step into a world where creativity knows no bounds, where
              imagination takes flight, and where every brushstroke, every
              stitch, every bead is a manifestation of boundless inspiration.
              Welcome to our art and craft store, where the vibrant colors of
              possibility dance on every canvas and where every aisle holds a
              treasure trove of artistic potential.
              </Bounce>

            </p>
            <button className="z-40 bg-green-600 text-white px-3 py-2">
            <Fade cascade delay={300}>
                Bye Now
                </Fade>
                </button>
          </div>
          <div className="absolute top-0  z-0 left-0 w-full h-full">
            <img className="w-full h-full" src={imageTwo} alt="" />
          </div>
          <div className="w-full h-full top-0 left-0 bg-black absolute opacity-50"></div>
        </SwiperSlide>
        <SwiperSlide className="relative   ">
          <div className="flex flex-col h-full justify-center items-center space-y-3">
          <p className=" font-bold text-md md:text-xl lg:text-3xl z-30 text-white ">
              Professional <span className="text-red-500">{text}</span><Cursor cursorColor="red" cursorBlinking={true} cur cursorStyle={'|'}></Cursor>
            </p>
          <p className="font-robotocon text-md text-center w-5/12 z-30 text-white ">
              <Bounce duration={1000} >
              Step into a world where creativity knows no bounds, where
              imagination takes flight, and where every brushstroke, every
              stitch, every bead is a manifestation of boundless inspiration.
              Welcome to our art and craft store, where the vibrant colors of
              possibility dance on every canvas and where every aisle holds a
              treasure trove of artistic potential.
              </Bounce>

            </p>
 
            <button className="z-40 bg-green-600 text-white px-3 py-2">
            <Fade cascade delay={300}>
                Bye Now
                </Fade>
            </button>
          </div>
          <div className="absolute top-0  z-0 left-0 w-full h-full">
            <img className="w-full h-full" src={imageTree} alt="" />
          </div>
          <div className="w-full h-full top-0 left-0 bg-black absolute opacity-50"></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
