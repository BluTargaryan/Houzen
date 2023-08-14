
//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";
import bg from '../media/emmanuel-ikwuegbu-A93M4hSp12s-unsplash.jpg'
import app from "../media/App Store.png"
import play from "../media/Play Store.png"


const Devices = () =>{
return(
   <StyledDevices>
 <h2>Houzen is available for all devices</h2>
 <p>
 Houzen is available in all stores and it is compatible with all devices. Download and start Exploring.
 </p>
 <div className="links">
 <img src={app} alt="App Store" />
<img src={play} alt="Play Store" />
 </div>
   </StyledDevices>
) 
}

const StyledDevices= styled(motion.div)`
width:100% ;
height: 400px;
display:flex ;
flex-direction:column ;
align-items:center ;
background: linear-gradient(0deg, rgba(153, 102, 204, 0.95), rgba(153, 102, 204, 0.95)), url(${bg});
background-size:cover ;
background-position:center ;
color:white ;

h2{
    margin-top:102px ;
    font-weight: 600;
font-size: 32px;
line-height: 58px;
text-align: center;
}

p{
    width:50% ;
    margin-top:13px ;
    font-weight: 400;
font-size: 16px;
line-height: 140%;
/* or 22px */

text-align: center;
letter-spacing: 0.1px;

/* wHITE */

color: #FFFFFF;

opacity: 0.6;
}

.links{
    margin-top:32px ;
    width: 25%;
    display:flex ;
    justify-content:space-between ;

    img{
        width:45% ;
        height:auto ;
        cursor: pointer;
      &:hover{
         filter:drop-shadow(1px 0px 5px rgba(0, 0, 0, 0.685)) ;
      }
    }
}


@media only screen and (max-width: 480px) {
height: 240px;

h2{
    font-size:16px ;
    margin-top:30px ;
    line-height:30px ;
}
p{
    margin-top:7px ;
    width: 70%;
    font-size:16px ;
}
.links{
    width:70% ;
    margin-top:20px ;
}
}

@media only screen and (min-width: 481px) and (max-width: 768px){
    height: 250px;

h2{
    font-size:20px ;
    margin-top:50px ;
    line-height:30px ;
}
p{
    margin-top:7px ;
    width: 70%;
    font-size:16px ;
}
.links{
    width:40% ;
    margin-top:20px ;
}  
}

@media only screen and (min-width: 769px) and (max-width: 1200px){
    .links{
        width: 35%;
    }
}
`

export default Devices;