
//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";

import shape from '../media/Ellipse 84.png'
import dots from '../media/dots2.png'
import app from "../media/App Store.png"
import play from "../media/Play Store.png"
import vector from '../media/Vector 335.png'
import stepdot from '../media/stepdot.png'

const Starting = () =>{
return(
   <StyledStarting>
<img src={dots} alt="dots" id="dots"/>
<img src={shape} alt="shape" id="shape"/>
<div className="works">
<div className="heading">
<div className="header">
<h3>How it works</h3>
<h1>Don’t Know How
To Get Started?</h1>
<p>Follow the steps shown below to proceed to the mobile application.</p>
</div>
<div className="links">
<img src={app} alt="App Store" />
<img src={play} alt="Play Store" />
</div>
</div>
<div className="path">
<img src={vector} alt="spine" />
<div className="step">
<div className="holder">
<img src={stepdot} alt="Step dot" id="stepdot"/>
<h1>1</h1>
<div className="step-txt">
<h4>Download & Register</h4>
<p>Click on the download button to take you to your store. Download the app and register to continue.</p>
</div>
</div>
</div>
<div className="step" id="Step-2">
<div className="holder">
<img src={stepdot} alt="Step dot" id="stepdot"/>
<h1>2</h1>
<div className="step-txt">
<h4>Explore & Make your Choice</h4>
<p>Search through our showcase to pick whats suitable to your taste.</p>
</div>
</div>
</div>
<div className="step" id="Step-3">
<div className="holder">
<img src={stepdot} alt="Step dot" id="stepdot"/>
<h1></h1>
<div className="step-txt">
<h4>Contact Agent</h4>
<p>Once you’ve seen the house or property you like, all you have to do is click the contact agent button.</p>
</div>
</div>
</div>
</div>
</div>
   </StyledStarting>
) 
}

const StyledStarting= styled(motion.div)`
width:100% ;
height:1486px ;
background: #F2ECF9;
position:relative ;
display:flex ;
flex-direction:column ;
align-items:center ;

#dots{
    position:absolute ;
    right:0 ;
    top:0 ;
    height:15% ;
    width:auto ;
}
#shape{
    position:absolute ;
    transform: translate(0, -50%);
    top:50%;
    left:0 ;
}

.works{
    width:80% ;
    height:600px ;
    margin-top:120px ;
    position:relative ;

    .heading{
        width:30% ;
        height: 265px;
        display:flex ;
            flex-direction:column ;
            justify-content:space-between ;

        .header{
            height:70% ;
            width: 100%;
            display:flex ;
            flex-direction:column ;
            justify-content:space-between ;

            h3{
                font-weight: 600;
font-size: 14px;
line-height: 21px;
/* identical to box height */

text-transform: uppercase;

/* Extra */

color: #9966CC;
            }

            h1{
                font-family: 'Manrope', sans-serif;
                font-weight: 800;
font-size: 40px;
line-height: 48px;
color: #000000;
            }

            p{
                font-weight: 400;
font-size: 16px;
line-height: 140%;
letter-spacing: 0.1px;
color: rgba(17, 17, 21, 0.4);
            }
        }

        .links{
            width:90% ;
            height:auto ;
            display:flex ;
            justify-content:space-between ;

            img{
               width:45% ;
               height:auto ;
            }
        }
    }
    .path{
        width:100% ;
        height: 584px;
        position:absolute ;
top: 3%;

img{
    width:80% ;
    position:absolute ;
    left:0 ;
    top:20% ;
}

.step{
    width:25% ;
    height: 204px;
    position:absolute ;
    bottom:0 ;
    left:10%;

.holder{
    position:relative ;
    width:100% ;
    height: 100%;

    #stepdot{
    position:absolute ;
    top:5% ;
    left:0 ;
    width:20% ;
}
h1{
    position:absolute ;
    right:5% ;  
    top:0 ;
    font-weight:900 ;
    font-size: 204px;
line-height: 204px;
color: #000000;
opacity: 0.05;
}
.step-txt{
    position:absolute ;
    bottom:0 ;
    height:50% ;
    width:100% ;
    display:flex ;
    flex-direction:column ;

    h4{
        font-weight: 600;
font-size: 16px;
line-height: 30px;
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
}
}


}

#Step-2{
    position:absolute ;
    left:40% ;
    top:50% ;
}

#Step-3{
    position:absolute ;
    top:15% ;
    left:70% ;
}

    }
}
`

export default Starting;