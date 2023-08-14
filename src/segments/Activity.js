
//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";
import Abstract from "../comps/abstract";

import phones from '../media/Group 593.png'

const Activity = () =>{
return(
   <StyledActivity>
   <Abstract/>
   <div className="main">
<h1>What we do</h1>
<div className="hero">
<div className="text">
<h2>Buy and Rent Houses on <span>Homely</span></h2>
<p>You can also check your account balance through the net banking facility. To use this facility need to login to the official website of the concerned bank from your phone.
You can also check your account balance through the net banking facility. To use this facility need to login to the official website of the concerned bank from your phone.</p>
</div>
<img src={phones} alt="phones showing app" />
</div>
   </div>
   </StyledActivity>
) 
}

const StyledActivity= styled(motion.div)`
height: 960px;
width:100% ;
overflow:none ;
background: #111115;
position:relative ;

.main{
   width:80% ;
   height:70% ;
   position:absolute ;
   left: 50%;
   top:50% ;
    transform: translate(-50%, -50%);
   z-index:1;
  display:flex ;
  flex-direction:column ;
  align-items:center ;

   h1{
      font-weight: 600;
font-size: 48px;
line-height: 150%;
color: #9966CC;
   }

   .hero{
      margin-top:60px ;
      width:100% ;
      height:80% ;
      display:flex ;
      justify-content:space-between ;
      align-items:center ;

      .text{
         width:40% ;
         height:55% ;
         display:flex ;
         flex-direction:column ;
         justify-content:space-between ;
         color:white ;

         h2{
            width:95% ;
            font-weight: 600;
font-size: 40px;
line-height: 150%;
span{
   color:#9966CC
}
         }
         p{
            width:95% ;
            font-weight: 400;
font-size: 15px;
line-height: 150%;
letter-spacing: 0.1px;
opacity: 0.4;
         }
      }
img{
   height:100% ;
   width:auto ;
}

   }
}
`

export default Activity;