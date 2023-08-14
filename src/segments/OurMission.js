//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";

import city1 from '../media/alice-RBfacFpqDXc-unsplash.jpg'
import city2 from '../media/dennis-savenko-us8qgV5jhks-unsplash.jpg'
import city3 from '../media/maayan-nemanov-rZgqDdxiOAk-unsplash.jpg'
import city4 from '../media/pat-whelen-r5iYkdeear0-unsplash.jpg'
import internal from '../media/internalhome.png'

const OurMission = () => {
    return (
        <StyledMission>
            <div className="mission">
                <div className="text-side">
                    <div className="text">
                        <h2>Our Mission</h2>
                        <p>
                            Our mission is to create a seamless experience for prospective house renters or buyers to have access to our inventory of apartments from the comfort of their homes. Users can see in detail the kind of apartments they want and also make special requests for a specific kind of apartment.
                            On another end house landlords or agents can also upload houses in specific detail to our platform for prospective renters thus creating earning opportunity for the user or agent.

                        </p>
                    </div>

                </div>
                <div className="view" />
            </div>
            <div className="finder">
                <h1>Find Top Houses & Properties in <span>All Cities</span></h1>

                <div className="locations">
                    <div className="container"><div style={{ background: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),url(${city1})` }}><span>Enugu</span></div></div>
                    <div className="container"><div style={{ background: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),url(${city2})` }}><span>Abuja</span></div></div>
                    <div className="container"><div style={{ background: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),url(${city3})` }}><span>Lagos</span></div></div>
                    <div className="container"><div style={{ background: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)),url(${city4})` }}><span>Port Harcourt</span></div></div>


                </div>
            </div>
        </StyledMission>
    )
}

const StyledMission = styled(motion.div)`
    width:100% ;
height:1586px ;
position:relative ;
display:flex ;
flex-direction:column ;
align-items:center ;

.mission{
    display:flex ;
    justify-content:space-between ;
    align-items:center ;
    height:50% ;
    width:80% ;
    margin-top:100px ;
    

    .text-side{
        width:45% ;
        height:80% ;
        display:flex ;
        flex-direction:column ;
        justify-content:center ;

        .text{
            height: 40%;
            width:100% ;
            h2{
                font-weight: 600;
font-size: 44px;
line-height: 150%;
color: #161621;
            }
            p{
                font-weight: 400;
font-size: 16px;
line-height: 140%;
/* or 22px */

letter-spacing: 0.1px;

/* Web grey */

color: rgba(17, 17, 21, 0.4);

opacity: 0.8;

            }
        }
    }

   .view{
    width:50% ;
    height:80% ;
    background:url(${internal}) ;
    background-position:center center ;
    background-size:cover ;
   }
}


.finder{
    width:80% ;
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
        width:22% ;
        height:100% ;
        border-radius:24px ;
        overflow:hidden ;
        div{
        width:100% ;
        height:100% ;
        background-size:cover !important;
        background-position:center ;
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
        }
    }
    }

    
}


}

@media only screen and (max-width: 480px){
    height: 2200px;
    .mission{
        margin-top:50px ;
        flex-direction:column ;
        width: 90%;
        height: 1000px;

        .text-side{
            text-align:center ;
            width: 95%;
            .text{
                h2{
                font-size:24px ;
            }
            }
        }
        .view{
            width: 100%;
            height: 50%;
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
    height: 2400px;
    .mission{
        margin-top:20px ;
        flex-direction:column ;
        width: 90%;
        height: 1200px;

        .text-side{
            text-align:center ;
            width: 80%;
            .text{
                h2{
                font-size:24px ;
            }
            }
        }
        .view{
            width: 100%;
            height: 60%;
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
    height: 2000px;
    .mission{
        margin-top:20px ;
        flex-direction:column ;
        width: 90%;
        height: 1000px;

        .text-side{
            text-align:center ;
            width: 80%;
            .text{
                h2{
                font-size:24px ;
            }
            }
        }
        .view{
            width: 100%;
            height: 80%;
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

export default OurMission;