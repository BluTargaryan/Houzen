
//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";

//media
import shape from '../media/Ellipse 82.png'
import shape2 from '../media/Ellipse 84.png'
import home from '../media/building-header.png'
import homemob from '../media/building-mobile.png'
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
<p>
Get access to the perfect house or property that fits your style and  budget.
   </p>    
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
height: 260px;
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
      cursor: pointer;
      &:hover{
         filter:drop-shadow(1px 0px 5px rgba(0, 0, 0, 0.685)) ;
      }
   }
}
}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 480px) {
height:600px ;
width:100vw ;
#shape{
   top:50% ;
transform:translateY(-50%) ;
content:url(${shape2}) ;
}

#home{
   width:100% ;
   height:auto ;
   bottom:0 ;
   /**Done to set img url from css */
content:url(${homemob}) ;
margin-bottom:-80px ;
}

.hero{
   top:100px ;
   width:90% ;
   margin:0 auto ;
   text-align:center ;
   left:50% ;
   transform:translateX(-50%) ;
   align-items: center;
   justify-content:flex-start ;
   height:auto ;

h1{
   font-size:24px ;
}
p{
   margin-top:8px ;
}

.links{
   margin-top:18px ;
   width: 70%;
}
}
}

@media only screen and (min-width: 481px) and (max-width: 768px){
   height:600px ;
width:100vw ;
#shape{
   top:80% ;
transform:translateY(-50%) ;
}

#home{
   width:100% ;
   height:auto ;
   bottom:0 ;
   /**Done to set img url from css */
content:url(${homemob}) ;
margin-bottom:-100px ;
}

.hero{
   top:100px ;
   width:90% ;
   margin:0 auto ;
   text-align:center ;
   left:50% ;
   transform:translateX(-50%) ;
   align-items: center;
   justify-content:flex-start ;
   height:auto ;

h1{
   font-size:24px ;
}
p{
   margin-top:8px ;
}

.links{
   margin-top:18px ;
   width: 40%;
}
}  
}
@media only screen and (min-width: 769px) and (max-width: 1200px){
   .hero{
      left:50px ;
      h1{
         line-height:100% ;
      }
      p{
         margin-top:20px ;
         font-size:20px ;
      }
      .links{
         width: 80%;
         margin-top:20px ;
      }
   }
}



`

export default Landing;