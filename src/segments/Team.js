//motion and styled
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import teammate from '../media/teammate.png'

const Team = () =>{

    const navigate= useNavigate()
    return(
       <StyledTeam>
    <h1>Meet the Team</h1>
    <div className="team">
        <div className="half">
            <a href="/about">
<div className="container">
    <div className="info">
        <h3>Robinson Ogbu</h3>
        <h6>Founder</h6>
    </div>
</div>
</a>
</div>
<div className="bits">
<div className="container">
<div className="info">
        <h3>Robinson Ogbu</h3>
        <h6>Founder</h6>
    </div>
</div>
</div>
<div className="bits">
<div className="container">
<div className="info">
        <h3>Robinson Ogbu</h3>
        <h6>Founder</h6>
    </div>
</div>
</div>
<div className="bits">
<div className="container">
<div className="info">
        <h3>Robinson Ogbu</h3>
        <h6>Founder</h6>
    </div>
</div>
</div>

    </div>
       </StyledTeam>
    ) 
    }

    const StyledTeam= styled(motion.div)`
    width: 100%;
    height: auto;
    background: #111115;
    display:flex ;
    flex-direction:column ;
    align-items:center;
    justify-content:space-between;
    gap: 50px;

    h1{
        font-weight: 600;
font-size: 44px;
line-height: 150%;
color: #9966CC;
margin-top: 80px;
    }

    .team{
        width: 80%;
        height: auto;
        display:flex ;
        align-items: center;
        flex-wrap: wrap;
        justify-content:space-around ;
        border: 1px solid black;
        gap: 25px;
        padding-bottom: 150px;

        .half,.bits{
            cursor: pointer;
            height: 500px; 
            border-radius:26px ;
            overflow:hidden ;
            margin: 10px 0;
            

            &:hover{
                .container{
                    transform:scale(1.2) ;
                    .info{
                        display:none ;
                    }
                }
            }
        }

        .container{
            background:url(${teammate}) ;
            background-size:cover ;
            background-position:center center ;
            width:100% ;
            height:100% ;
            display:flex ;
            flex-direction:column ;
            align-items:center ;
            justify-content:flex-end ;
            transition:.2s ease-in ;
        }

        .info{
                width:80% ;
                height:20% ;
                background: rgba(255, 255, 255, 0.6);
border-radius: 20px;
margin-bottom:20px ;
display:flex ;
flex-direction:column ;
align-items:flex-start ;
justify-content:center ;
padding-left:20px ;

h3{
    font-weight: 700;
font-size: 32px;
line-height: 90%;
/* or 33px */
/* Brand blue */
padding-bottom:6px ;
color: #090F2D;
}

h6{
    font-weight: 400;
font-size: 16px;
line-height: 90%;
/* or 14px */

/* Brand orange */

color: #F87000;
}
            }

        .half{
            width:40% ;
        }
        .bits{
            width:25% ;
            .info{
                    width:90% ;
                    h3{
                
                font-size:24px ;
            }
                }
           
        }
    }

    @media only screen and (max-width: 480px){
        justify-content:flex-start ;
        height: 1100px;

        h1{
            margin-top:70px ;
            font-size:24px ;
        }

        .team{
            margin-top:30px ;
            flex-wrap:wrap ;
            height:400px ;

           

            .info{
                width:90% ;
                text-align:center ;
                align-items:center ;
                padding-left:0 ;
                h3{
                    font-size:20px ;
                }
                h6{
                    font-size:16px ;
                }
            }
            .half{
              width:80% ;
            }

            .bits{
                width:45% ;
                margin-top:50px ;

                .info{
                h3{
                    font-size:16px ;
                }
                h6{
                    font-size:12px ;
                }
            }
            }

           
        }
    }

    @media only screen and (min-width: 481px) and (max-width: 768px){
        justify-content:flex-start ;
        height: 1100px;

        h1{
            margin-top:70px ;
            font-size:24px ;
        }

        .team{
            margin-top:30px ;
            flex-wrap:wrap ;
            height:400px ;

            .info{
                h3{
                    font-size:20px ;
                }
                h6{
                    font-size:16px ;
                }
            }
            .half{
              width:70% ;
            }

            .bits{
                width:45% ;
                margin-top:50px ;

                .info{
                h3{
                    font-size:20px ;
                }
                h6{
                    font-size:16px ;
                }
            }
            }

           
        }
    }
    @media only screen and (min-width: 769px) and (max-width: 1024px){
        justify-content:flex-start ;
        height: 1100px;

        h1{
            margin-top:70px ;
            font-size:24px ;
        }

        .team{
            margin-top:30px ;
            flex-wrap:wrap ;
            height:400px ;

            .info{
                h3{
                    font-size:20px ;
                }
                h6{
                    font-size:16px ;
                }
            }
            .half{
              width:70% ;
            }

            .bits{
                width:45% ;
                margin-top:50px ;

                .info{
                h3{
                    font-size:20px ;
                }
                h6{
                    font-size:16px ;
                }
            }
            }

           
        }
    }

    @media only screen and (min-width: 1025px) and (max-width: 1200px){
        justify-content:center;
        height: 800px;

        h1{
            font-size:28px ;
        }

        .team{
            margin-top:50px ;
height: 70%;
            flex-wrap:wrap ;
            width: 90%;

            .info{
                h3{
                    font-size:24px ;
                }
                h6{
                    font-size:20px ;
                }
            }
            .half{
              width:45% ;
            }

            .bits{
                width:25% ;

                .info{
                h3{
                    font-size:24px ;
                }
                h6{
                    font-size:20px ;
                }
            }
            }

           
        }
    }
    `

    export default Team