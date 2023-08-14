
//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";

import shape from '../media/Ellipse 84.png'
import dots from '../media/dots2.png'
import app from "../media/App Store.png"
import play from "../media/Play Store.png"
import cuate from  "../media/cuate.png"
import cuate2 from  "../media/cuate2.png"
import cuate3 from  "../media/cuate3.png"
import city1 from '../media/alice-RBfacFpqDXc-unsplash.jpg'
import city2 from '../media/dennis-savenko-us8qgV5jhks-unsplash.jpg'
import city3 from '../media/maayan-nemanov-rZgqDdxiOAk-unsplash.jpg'
import city4 from '../media/pat-whelen-r5iYkdeear0-unsplash.jpg'

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
<div className="unit" >
<img src={cuate} alt="illus" />
<h2>Download and Register</h2>
<p>Click on the download button to take you to your store. Download & Register to continue.</p>
</div>
<div className="unit" >
<img src={cuate2} alt="illus" />
<h2>Explore and Choose</h2>
<p>Search through our showcase to select whats suitable to you.</p>
</div>
<div className="unit" id="last-unit">
<img src={cuate3} alt="illus" />
<h2>Contact Agent</h2>
<p>Click on the CTA button to contact our AGENT.</p>
</div>
</div>
</div>
<div className="finder">
    <h1>Find Top Houses & Properties in <span>All Cities</span></h1>

    <div className="locations">
<div className="container"><div style={{background: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),url(${city1})`}}><span>Enugu</span></div></div>
<div className="container"><div style={{background: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),url(${city2})`}}><span>Abuja</span></div></div>
<div className="container"><div style={{background: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),url(${city3})`}}><span>Lagos</span></div></div>
<div className="container"><div style={{background: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),url(${city4})`}}><span>Port Harcourt</span></div></div>


    </div>
</div>
   </StyledStarting>
) 
}

const StyledStarting= styled(motion.div)`
width:100% ;
height:1486px ;
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
    display:flex ;
    align-items:center ;
    flex-direction:column ;

    .heading{
        width:50% ;
        height: 265px;
        display:flex ;
            flex-direction:column ;
            justify-content:space-between ;
            align-items:center ;
            text-align:center ;

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
            width:50% ;
            height:auto ;
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
    }
    
    .path{
        height:450px ;
        width: 90%;

        margin-top:80px ;
        display:flex ;
        justify-content:space-between ;

        .unit{
            height: 100%;
            width:30% ;
            display: flex;
flex-direction: column;
align-items:center ;
/* white */

background: #FFFFFF;
/* Shadow 2 */

box-shadow: 0px 4px 42px rgba(9, 15, 45, 0.11);
border-radius: 16px;
text-align:center ;
transition:.2s ease-in ;

&:hover{
    background:#111115;

    h2,p{
        color:white ;
    }
    p{
        opacity:1 ;
    }
}

img{
    height:140px ;
    width:auto ;
    margin-top:32px ;
}

h2{
    transition:.2s ease-in ;
    font-weight: 500;
font-size: 18px;
line-height: 26px;
margin-top:20px ;
}
p{
    transition:.2s ease-in ;
    font-weight: 400;
font-size: 15px;
line-height: 24px;
width:90% ;
margin-top:8px ;
opacity:.5 ;
}
        }

        #last-unit{
            img{
                height:110px ;
            }
        }
    }
}

.finder{
    width:85% ;
    height:526px ;
    margin-top:120px ;
    display:flex ;
    flex-direction:column ;
    align-items:center ;
    justify-content:space-between ;

    h1{
        font-weight: 600;
font-size: 40px;
line-height: 150%;
        span{
        color: #9966CC;
    }
    }
    
.locations{
    height: 394px;
    width:100% ;
    display:flex ;
    justify-content:space-between ;

    .container{
        width:23% ;
        height:100% ;
        border-radius:24px ;
        overflow:hidden ;
        div{
        width:100% ;
        height:100% ;
        background-size:cover !important;
        background-position:center !important;
        position:relative ;
        transition:.1s ease-in ;
        
        
        &:hover{
            transform:scale(1.2) ;
            

            span{
                display:none ;
            }
        }
       
        span{
        position:absolute ;
        left:24px ;
        bottom:20px ;
        color:white ;
        font-weight: 400;
font-size: 22px;
line-height: 150%;
transition:.1s ease-in ;
        }
    }
    }

    
}


}

/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 480px) {
height: 2200px;

#dots{
    display:none ;
}

#shape{
    height: 30%;
    top:25% ;
    
}

.works{
    height: auto;
    width:90% ;
    display:flex ;
    flex-direction:column ;
    align-items:center ;
    
    

    .heading{
        height: 120px;
        width:100% ;
        align-items:center ;

        .header{
            justify-content:space-between ;
            align-items:center ;
            height: 300px;
            h3{
                font-size:12px ;
                text-align:center ;
            }
            h1{
                font-size:20px ;
                line-height: 17px;
                padding-top:12px ;
                text-align:center ;
            }
            p{
                padding-top:8px ;
                font-size:14px ;
                text-align:center ;
            }
        }

        .links{
            width:70% ;
            margin-top:20px ;
        }
    }

    .path{
        flex-direction:column ;
        width:90% ;
        height:800px ;

        .unit{
            width:100% ;
            height:250px ;

            img{
                height: 100px;
                margin-top:15px ;
            }
            h2{
                font-size:14px ;
                margin-top:10px ;
            }
            p{
                font-size:12px ;
            }
        }

        #last-unit{
            img{
                height: 100px;
            }
            
        }
    }
}

.finder{
    height:auto ;

    h1{
        font-size:28px ;
        text-align:center ;
    }
    .locations{
        margin-top:20px ;
        height: 800px;
        flex-direction:column ;
        justify-content:space-around ;

        .container{
            width: 100%;
            height: 22%;

            div{
            
            background-position:center center !important ;

            span{
                font-size: 20px;
            }
        }
        }
        
    }
}
}

@media only screen and (min-width: 481px) and (max-width: 768px){
    height: 2500px;

#dots{
    display:none ;
}

#shape{
    height: 30%;
    top:25% ;
    
}

.works{
    margin-top:50px ;
    height: auto;
    width:90% ;
    display:flex ;
    flex-direction:column ;
    align-items:center ;
    
    

    .heading{
        height: 120px;
        width:100% ;
        align-items:center ;

        .header{
            justify-content:space-between ;
            align-items:center ;
            height: 400px;
            h3{
                font-size:16px ;
                text-align:center ;
            }
            h1{
                font-size:24px ;
                line-height: 17px;
                padding-top:12px ;
                text-align:center ;
            }
            p{
                padding-top:8px ;
                font-size:16px ;
                text-align:center ;
            }
        }

        .links{
            width:45% ;
            margin-top:20px ;
        }
    }

    .path{
        flex-direction:column ;
        width:60% ;
        height:800px ;

        .unit{
            width:100% ;
            height:250px ;

            img{
                height: 120px;
                margin-top:15px ;
            }
            h2{
                font-size:14px ;
                margin-top:10px ;
            }
            p{
                font-size:12px ;
            }
        }

        #last-unit{
            img{
                height: 110px;
            }
            
        }
    }
}

.finder{
    height:auto ;

    h1{
        font-size:28px ;
        text-align:center ;
    }
    .locations{
        margin-top:20px ;
        height: 1100px;
        flex-direction:column ;
        justify-content:space-around ;

        .container{
            width: 100%;
            height: 22%;

            div{
            
            background-position:center center !important ;

            span{
                font-size: 20px;
            }
        }
        }

        
    }
}
}

@media only screen and (min-width: 769px) and (max-width: 1200px){
    .works{
        .heading{
            width:90% ;
            .header{
                .links{
                    width: 100%;
                }
            }
        }
        .path{
width:100% ;
        .unit{
            width:32% ;
            height:270px ;

            img{
                height: 100px;
                margin-top:15px ;
            }
            h2{
                font-size:14px ;
                margin-top:10px ;
            }
            p{
                font-size:12px ;
            }
        }

        #last-unit{
            img{
                height: 90px;
            }
            
        }
    }
    }
    .finder{
        width: 90%;
        h1{
            text-align:center ;
        }
        .locations{
            .container{
                width:24% ;
            }
        }
    }
}
`

export default Starting;