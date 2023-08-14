
//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";
import Nav from "../comps/Nav";

//media
import shape from '../media/Ellipse 82.png'
import home from '../media/building-header.png'
import app from "../media/App Store.png"
import play from "../media/Play Store.png"

const Landing = () =>{
return(
   <StyledLanding>
    <img src={shape} alt="C Shape" id="shape"/>
    <img src={home} alt="Home" id="home"/>
    <div className="hero">
<h1>Find a House or
Property that Suits you.</h1>
<p>An enim nullam tempor sapien gravida donec enim ipsum porta justo integer at integer congue magna at pretium purus pretium ligula rutrum. </p>
    <div className="links">
    <img src={app} alt="App Store" />
<img src={play} alt="Play Store" />
    </div>
    </div>
   </StyledLanding>
) 
}

const StyledLanding= styled(motion.div)`
width:100% ;
height:870px ;
background: #F2ECF9;
position:relative ;

#shape{
   position: absolute;
width: auto;
height: 60%;
left:0 ;
bottom:0 ;
}
#home{
   position: absolute;
width: auto;
height: 70%;
right:0 ;
bottom:0 ;
}
.hero{
position:absolute ;
top:200px ;
left: 150px;
width: 40%;
height: 280px;
padding:0 ;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content:space-between ;
h1{
   font-weight: 600;
font-size: 45px;
line-height: 150%;

}
p{
   font-weight: 400;
font-size: 16px;
line-height: 140%;
/* or 22px */
letter-spacing: 0.1px;
/* Web grey */
color: rgba(17, 17, 21, 0.4);
}
.links{
   width:50% ;
   height:auto ;
   display:flex ;
   justify-content:space-between ;
   img{
      width:48%;
   }
}
}
`

export default Landing;