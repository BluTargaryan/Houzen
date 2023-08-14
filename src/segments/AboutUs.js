
//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";
import Abstract from "../comps/abstract";



const AboutUs = () =>{
return(
   <StyledAboutUs>
<Abstract/>
<h1>About Us</h1>
<p>
There is a huge deficit in the real estate market in Nigeria from accessibilty of houses, overpriced apartments to rise in agency , caution , lawyer fees and other levies. 	Our goal at Houzen is to minimize such bottlenecks in the housing markets by sourcing for houses, and putting them in our inventory making them easily accessible putting  making our commission fee at a very reasonable price to ensure users have a seamless experience in renting or buying the suitable apartments that fits thier style and budgets.
</p>
   </StyledAboutUs>
) 
}

const StyledAboutUs= styled(motion.div)`
width: 100%;
height:801px ;
background: #111115;
display:flex ;
flex-direction:column ;
align-items:center ;
justify-content:center ;
position:relative ;

h1{
    font-weight: 600;
font-size: 44px;
line-height: 150%;
color: #9966CC;
}

p{
    word-wrap:break-word ;
    width: 80%;
    margin-top:40px ;
    font-weight: 400;
font-size: 20px;
line-height: 140%;
/* or 34px */

text-align: center;
letter-spacing: 0.1px;

/* wHITE */

color: #FFFFFF;

opacity: 0.4;
}

@media only screen and (max-width: 480px){
    h1{
        font-size:24px ;
    }
    p{
        font-size:16px ;
       width: 95%;
    }
}

@media only screen and (min-width: 481px) and (max-width: 768px){
    height: 700px;
    h1{
        font-size:24px ;
    }
    p{
        font-size:16px ;
        margin-top:27px ;
    }
}

@media only screen and (min-width: 769px) and (max-width: 1024px){
    height: 550px;
    h1{
        font-size:24px ;
    }
    p{
        font-size:16px ;
        margin-top:27px ;
    }
}

@media only screen and (min-width: 1025px) and (max-width: 1200px){
    height: 550px;
    h1{
        font-size:28px ;
    }
    p{
        font-size:20px ;
        margin-top:27px ;
    }

}
`

export default AboutUs;