
//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";
import Abstract from "../comps/abstract";

import phones from '../media/Group 594.png'

const Features = () =>{
return(
   <StyledFeatures>
   <Abstract/>
   <div className="main">
<h1>Special Features</h1>
<div className="hero">
<img src={phones} alt="phones showing app" />
<div className="text">
<h2>Realtor Feature</h2>
<p>Users or realtors have the opportunity to upload properties or houses for lease or for rent. Terms and conditions apply before users can access this feature.
</p>
</div>
</div>
   </div>
   </StyledFeatures>
) 
}

const StyledFeatures= styled(motion.div)`
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
         height:25% ;
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

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 480px) {
height: 800px;

.main{
   height: 80%;
   h1{
      font-size:28px ;
      text-align:center ;
   }
   .hero{
      height:100%;
      flex-direction:column ;
      justify-content:space-between ;
margin-top:20px ;
      .text{
         order:0 ;
         width:100% ;
         h2,p{
            text-align:center ;
         }
         h2{
            font-size:24px ;
         }
         p{
            font-size:16px ;
         }
      }
      img{
         order:1 ;
         height:60% ;
      }
   }
}
}

@media only screen and (min-width: 481px) and (max-width: 768px){
   height: 870px;

.main{
   h1{
      font-size:24px ;
   }
   .hero{
      height:500px;
      flex-direction:column ;
margin-top:20px ;
      .text{
         order:0 ;
         width:90% ;
         h2,p{
            text-align:center ;
         }
         h2{
            font-size:24px ;
         }
         p{
            font-size:16px ;
         }
      }
      img{
         order:1 ;
         height:90% ;
         margin-top:50px ;
      }
   }
} 
}

@media only screen and (min-width: 769px) and (max-width: 1024px){
   .main{
      .hero{
         .text{
            p{
               font-size:16px ;
            }
            h2{
               font-size:32px ;
            }
         }
         img{
            height: 80%;
         }
      }
   }
}

`

export default Features;