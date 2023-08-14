
//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";

import dots from '../media/dots3.png'
import profile from '../media/prince-akachi-J1OScm_uHUQ-unsplash.jpg'


const Testimonials = () =>{
return(
   <StyledTestimonials>
  <img src={dots} alt="dots" id="dots-img" />
  <div className="main">
<h5>Testimonials</h5>
<h3>Look at what people are saying about us</h3>
<div className="comms">
   <div className="unit">
      <span>
      <div id="user-img"/>
      <div className="deets">
<h6>Angel Rose</h6>
<p>Creative Manager</p>
      </div>
      </span>
<p id="testimony">
There are many variations passages of Lorem Ipsum majority some by words which don't look . 
</p>
       </div>
       <div className="unit">
      <span>
      <div id="user-img"/>
      <div className="deets">
<h6>Angel Rose</h6>
<p>Creative Manager</p>
      </div>
      </span>
<p id="testimony">
There are many variations passages of Lorem Ipsum majority some by words which don't look . 
</p>
       </div>
       <div className="unit">
      <span>
      <div id="user-img"/>
      <div className="deets">
<h6>Angel Rose</h6>
<p>Creative Manager</p>
      </div>
      </span>
<p id="testimony">
There are many variations passages of Lorem Ipsum majority some by words which don't look . 
</p>
       </div>
</div>
  </div>
   </StyledTestimonials>
) 
}

const StyledTestimonials= styled(motion.div)`
height: 701px;
width:100% ;
position:relative ;
display:flex ;
justify-content:center ;


#dots-img{
   position:absolute ;
   z-index:0;
   top:0 ;
   left:0 ;
   height: 20%;
   width:auto ;
}

.main{
   width: 80%;
   height: 404px;
   margin-top:177px ;
   display:flex ;
   flex-direction:column ;
   align-items:center ;
  
   

   h5{
      font-weight: 600;
font-size: 14px;
line-height: 21px;
text-transform:uppercase ;
color: #9966CC;
   }
   h3{
      font-family: 'Manrope';
font-style: normal;
font-weight: 800;
font-size: 35px;
line-height: 48px;
margin-top:8px ;
   }

   .comms{
      width: 100%;
      height:70% ;
      margin-top:60px ;
      display:flex ;
      justify-content:space-between ;

      .unit{
         width: 32%;
         height:100% ;
         box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.05);
         border-radius: 20px;
         background: #FFFFFF;
         color:black ;
         transition:.2s ease-in ;
         &:hover{
   background: #111115;
   color:white ;
   cursor:default ;
   
   span{
      .deets{
         p{
            opacity:1 ;
         }
      }
   }
   #testimony{
         opacity:1 ;
      }
}

         span{
            display:inline-block ;
            
            margin-top:50px ;
            height: 70px;
            width:auto ;
            display:flex ;

            #user-img{
               height:70px ;
               width:70px ;
               background:url(${profile}) ;
               background-size:cover ;
               border-radius:50px ;
               margin-left:40px ;
            }
            .deets{
               height: 100%;
               width:auto;
               display:flex ;
               flex-direction:column ;
               align-items:flex-start ;
               justify-content:center ;
               margin-left:20px ;

               h6{
                  font-weight: 500;
                  font-size: 20px;
                  line-height: 26px;
                  color: #9966CC;
               }
               p{
                  font-weight: 400;
font-size: 16px;
line-height: 34px;
letter-spacing: 0.01em;
opacity: 0.4;
width:auto ;
               }
            }
         }

         #testimony{
            margin:0 40px ;
            margin-top:25px ;
            font-weight: 400;
font-size: 14px;
line-height: 140%;
opacity: 0.4;
         }
      }
   }
}

@media only screen and (max-width: 480px) {
height: 1200px;

#dots-img{
   display:none ;
}

.main{
   height:auto ;
   margin-top:100px ;



   h5{
      font-size: 14px;
      text-align:center ;
   }
   h3{
      text-align:center ;
      font-size: 28px;
      margin-top:24px ;
      line-height: 42px;
   }

   .comms{
      width:90% ;
      flex-direction:column ;
      height: 850px;

      .unit{
         width: 100%;
         height: 270px;

         span #user-img{
            margin-left:30px ;
         }

         span .deets{
            p{
               line-height:initial ;
            }
         }

         #testimony{
           text-align:center ;
           margin-left:20px ;
           margin-right:20px ;
         }
      }
   }
}
}

@media only screen and (min-width: 481px) and (max-width: 768px){
   height: 1200px;

#dots-img{
   display:none ;
}

.main{
   height:auto ;
   margin-top:100px ;
   h5{
      font-size: 14px;
      text-align:center ;
   }
   h3{
      text-align:center ;
      font-size: 28px;
      margin-top:24px ;
      line-height: 42px;
   }

   .comms{
      width:90% ;
      flex-direction:column ;
      height: 850px;

      .unit{
         width: 100%;
         height: 270px;

         #testimony{
font-size:16px ;
         }
      }
   }
}
}

@media only screen and (min-width: 769px) and (max-width: 1200px){
   .main{
      width: 90%;
      h5{
         font-size:20px ;
      }
      .comms .unit span .deets{
         h6{
            font-size:16px ;
         }
         p{
            line-height:initial ;
         }
      }
      .comms .unit #testimony{
         margin-top:10px ;
      }
   }
}
`


export default Testimonials;