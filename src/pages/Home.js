
//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";
import Nav from "../comps/Nav";

import Landing from "../segments/Landing";
import Activity from "../segments/Activity";
import Starting from "../segments/Starting";
import Features from "../segments/Features";
import Testimonials from "../segments/Testimonials";
import Devices from "../segments/Devices";
import Footer from "../segments/Footer";

import { leftPageTransition } from "../comps/anim";

import { useEffect } from "react";

const Home = () =>{

   //for scroll to top on load
   useEffect(() => {
      window.scrollTo(0, 0)
    }, []);
return(
   <StyledHome variants={leftPageTransition} initial="hidden" animate="show" exit="exit">
    <Nav />
   <Landing/>
   <Activity/>
   <Starting/>
   <Features/>
   <Testimonials/>
   <Devices/>
   <Footer/>
   </StyledHome>
) 
}

const StyledHome= styled(motion.div)`
width: 100%;
height:auto ;
`

export default Home;