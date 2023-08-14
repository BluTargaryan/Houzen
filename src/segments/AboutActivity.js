
//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";


import phones from '../media/Group 593.png'

const AboutActivity = () =>{
return(
   <StyledActivity>
   <div className="main">
<div className="hero">
<img src={phones} alt="phones showing app" />
<div className="text">
<h2>Buy and Rent Houses on <span>Houzen</span></h2>
<p>With our large network of houses in our inventory, we have the perfect  house that can suit your budget and taste. From a simple self contained apartment to a fully furnised duplex, Houzen has the perfect house for you with the best prices.</p>
</div>
</div>
   </div>
   </StyledActivity>
) 
}

const StyledActivity= styled(motion.div)`
height: 850px;
width:100% ;
overflow:none ;
position:relative ;

.main{
   width:80% ;
   height:70% ;
   position:absolute ;
   left: 50%;
   top:40% ;
    transform: translate(-50%, -50%);
   z-index:1;
  display:flex ;
  flex-direction:column ;
  align-items:center ;


   .hero{
      margin-top:60px ;
      width:100% ;
      height:80% ;
      display:flex ;
      justify-content:space-between ;
      align-items:center ;

      .text{
         width:40% ;
         height:50% ;
         display:flex ;
         flex-direction:column ;
         justify-content:space-between ;
         color: #111115;


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

@media only screen and (max-width: 480px) {
height:800px ;

.main{
   margin-top:50px ;
   width:95% ;
   justify-content:center ;
   h1{
      font-size:24px ;
   }
   .hero{
      flex-direction:column ;
      width:100% ;
      img{
         height: 60%;
      }
      .text{
         width:100% ;
         height:auto ;
         align-items:center ;
         text-align:center ;
         margin-top:15% ;
       h2{
         font-size:24px ;
       }
       p{
         font-size:16px ;
         margin-top:16px ;
       }
      }  
   }
}
}

@media only screen and (min-width: 481px) and (max-width: 768px){
   height:877px ;

.main{
   width:95% ;
   h1{
      font-size:24px ;
   }
   .hero{
      margin-top:40px ;
      flex-direction:column ;
      width:100% ;
      .text{
         margin-top:8% ;
         width:100% ;
         height:auto ;
         align-items:center ;
         text-align:center ;
       h2{
         font-size:24px ;
       }
       p{
         font-size:16px ;
         margin-top:16px ;
       }
      }

      img{
         height: 90%;
         
      }
   }
}
}

@media only screen and (min-width: 769px) and (max-width: 1024px){
   .main{
      .hero{
      .text{
         h2{
            font-size:32px ;
         }
         p{
            font-size:16px ;
         }
      }
      img{
         height: 80%;
      }
   }
   }
}
`

export default AboutActivity;