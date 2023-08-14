
//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";
import ig from '../media/ig.png'
import linkedin from '../media/linkedin.png'
import fb from '../media/fb.png'
import twitter from '../media/twitter.png'
import mail from '../media/mail.png'
import phone from '../media/phone.png'
import app from "../media/App Store.png"
import play from "../media/Play Store.png"


const Footer = () => {
    return (
        <StyledFooter>
            <div className="main">
                <div className="side1">
                    <h2>Houzen</h2>
                    <p>
                        Convenient and Professional service
                    </p>
                    <span className="socials">
                        <img src={ig} alt="Instagram" />
                        <img src={linkedin} alt="LinkedIn" />
                        <img src={fb} alt="Facebook" />
                        <img src={twitter} alt="Twitter" />
                    </span>
                </div>

                <div className="side2">
                    <h4>Contact Info</h4>
                    <div className="contact">
                        <p className="address">
                            455 West Orchard Street Kings Mountain, NC 280867
                        </p>
                        <span className="phone">
                            <img src={phone} alt="Phone icon" />
                            <p>+234 9030502351</p>
                        </span>
                        <span className="mail">
                            <img src={mail} alt="Mail icon" />
                            <p>helloHouzen1@gmail.com</p>
                        </span>
                    </div>
                    <div className="links">
                        <img src={app} alt="App Store" />
                        <img src={play} alt="Play Store" />
                    </div>
                </div>
            </div>

            <span className="line" />
            <p id="endo">© 2022 Houzen. All Rights Reserved.</p>
        </StyledFooter>
    )
}

const StyledFooter = styled(motion.div)`
width:100% ;
height: 502px;
background: #111115;
display:flex ;
flex-direction:column ;
align-items:center ;

.main{
    margin-top:92px ;
    width:80% ;
    height:50% ;
    display:flex ;
    justify-content:space-between ;

    .side1{
      width:25% ;
      height: 70%;
      display:flex ;
      flex-direction:column ;
        justify-content:space-between ;

      h2{
        font-weight: 500;
font-size: 32px;
line-height: 160%;
letter-spacing: 0.004em;
color: #9966CC;
      }

      p{
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        color: #FFFFFF;
        opacity: 0.7;
      }

      .socials{
        width:50% ;
        height:10% ;
        display:flex ;
        justify-content:space-between ;

        img{
            height:100% ;
            width:auto ;
            cursor: pointer;
            &:hover{
                height:120% ;
            }
        }
      }
    }

    .side2{
        width: 25%;
        height: 100%;
        display:flex ;
        flex-direction:column ;
         justify-content:space-between ;

        h4{
            font-weight: 700;
font-size: 16px;
line-height: 24px;
color: #9966CC;
        }

        .contact{
            display:flex ;
            flex-direction:column ;
         justify-content:space-between ;
         height:50% ;
         width:100% ;

         .address{
            width: 80%;
            color:white ;
            font-weight: 400;
font-size: 16px;
line-height: 26px;
opacity: 0.7;
         }

         span{
            display:flex ;
            align-items:center ;
            justify-content:space-between ;
            width:100% ;
            height:15%;

            img{
                height:100% ;
                width: auto;
            }

            p{
                font-weight: 400;
font-size: 16px;
line-height: 26px;
color: #FFFFFF;
opacity: 0.7;
            }
         }
        }

        .links{
            width:100% ;
            height: 16%;
            display:flex ;
            justify-content:space-between ;

            img{
                height:100% ;
                width:auto ;
                cursor: pointer;
      &:hover{
         filter:drop-shadow(1px 0px 5px rgba(0, 0, 0, 0.685)) ;
      }
            }
        }
    }
}

.line{
    display:inline-block ;
    width:90% ;
    height:1px ;
    background:#c4c4c4 ;
    opacity:0.1 ;
    margin-top:46px ;
}

#endo{
    margin-top:40px ;  
    font-weight: 400;
font-size: 16px;
line-height: 26px;
text-align: center;

/* wHITE */

color: #FFFFFF;

opacity: 0.9;
}

@media only screen and (max-width: 480px) {
height: 663px;
.main{
    margin-top:64px ;
    width:90% ;
    flex-direction:column ;
    align-items:center ;
    height:80% ;

    .side1,.side2{
        width:100% ;
        align-items:center ;
        height:40% ;
        text-align:center ;
    }
    .side2{
        height: 50%;
        .contact{
            align-items:center ;
            .address{
                width: 100%;
            }
            span{
                width: 95%;
              
            }
            
        }
        .links{
                height:20% ;
                width:100% ;
                align-items:center ;
                justify-content:space-around ;

                img{
                    height: 90%;
                }
            }
    }


}
}

@media only screen and (min-width: 481px) and (max-width: 768px){
    height: 663px;
.main{
    margin-top:64px ;
    width:90% ;
    flex-direction:column ;
    align-items:center ;
    height:65% ;

    .side1,.side2{
        width:100% ;
        align-items:center ;
        height:40% ;
        text-align:center ;
    }
    .side2{
        height: 50%;
        .contact{
            align-items:center ;
            .address{
                width: 100%;
            }
            span{
                width: 50%;
              
            }
            
        }
        .links{
                height:25% ;
                width:50% ;
                align-items:center ;
                justify-content:space-around ;

                img{
                    height: 90%;
                }
            }
    }


}   
}

@media only screen and (min-width: 769px) and (max-width: 1200px){
    .main{
        margin-top:50px ; 
       .side1,.side2{
        width: 40%;
       }
    }
}
`

export default Footer;