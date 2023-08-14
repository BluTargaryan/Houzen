
//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";

import AboutActivity from "../segments/AboutActivity";
import Testimonials from "../segments/Testimonials";
import Devices from "../segments/Devices";
import Footer from "../segments/Footer";
import Nav2 from "../comps/Nav2";
import AboutUs from "../segments/AboutUs";
import OurMission from "../segments/OurMission";
import Team from "../segments/Team";
import { rightPageTransition } from "../comps/anim";

import { useEffect } from "react";

const About = () =>{

    //for scroll to top on load
    useEffect(() => {
      window.scrollTo(0, 0)
    }, []);
return(
   <StyledAbout variants={rightPageTransition} initial="hidden" animate="show" exit="exit">
    <Nav2 />
<AboutActivity/>
<AboutUs/>
<OurMission/>
<Team/>
   <Testimonials/>
   <Devices/>
   <Footer/>
   </StyledAbout>
) 
}

const StyledAbout= styled(motion.div)`
width: 100%;
height:auto ;
`

export default About;