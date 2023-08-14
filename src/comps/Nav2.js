import { useEffect,useState } from "react";
import React from "react";
//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";

import app from "../media/App Store.png"
import play from "../media/Play Store.png"
import menu from '../media/menu.png'
import close from '../media/close.png'
import { useNavigate } from "react-router-dom";

const Nav2 = () =>{
   const navigate=useNavigate()
const[scroll,setScroll]= useState(false)
   function scrollFunction() {
      if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
         setScroll(true)
      } else{
         setScroll(false)
      }
    }

    //to check if menu is open
    const [menuOpen, setMenuOpen]= useState(false)
//click func to toggle menu
    const menuToggle =()=>{
     setMenuOpen(!menuOpen)
    }


    useEffect(() => {
      window.onscroll=scrollFunction
    }, []);

return(
   <StyledNav scrollCheck={scroll} menuCheck={menuOpen}>
<div className="logo">Houzen</div>
<ul className="pages" >
   <li onClick={()=>navigate("/")}>Home</li>
   <li id="homeLink" onClick={()=>navigate("/about")}>About Us</li>
</ul>
<div id="links">
<img src={app} alt="App Store" />
<img src={play} alt="Play Store" />
</div>
<img id="menu" src={menuOpen?close:menu} alt="Menu" onClick={menuToggle}/>
   </StyledNav>
) 
}

const StyledNav= styled(motion.nav)`

font-family: 'Poppins', sans-serif;
width:100% ;
height:50px ;
display:flex ;
align-items:center ;
position:absolute ;
position:fixed ;
top:0 ;
z-index:2;
background:${props => props.scrollCheck ? 'white' : 'none'} ;
box-shadow:${props => props.scrollCheck ? '1px 0px 5px rgba(0, 0, 0, 0.25)' : 'none'};

.logo{
    font-weight: 500;
font-size: 25px;
color: #9966CC;
margin-left:5% ;
}
.pages{
   display:flex ;
   width:12% ;
   justify-content:space-between ;
   margin-left:50% ;
   li{
      font-size: 16px;
      font-weight: 500; 
      position: relative;
      cursor: pointer;
      &:hover{
         font-weight: 700;
      }
   }
   #homeLink{
      &::before {
    content: '';
    position: absolute;
    display:block ;
    top: 25px;
    width: 50%;
    border-bottom: 2px solid #9966CC;
}
   }
}

#links{
   display:flex ;
   justify-content:space-between ;
   width:250px ;
   margin:0 50px ;

   img{
      width:120px ;
      height:auto ;
      cursor: pointer;
      &:hover{
         filter:drop-shadow(1px 0px 5px rgba(0, 0, 0, 0.685)) ;
      }
   }
}

#menu{
   height:15px ;
   width:auto ;
   display:none ;
}

/* Mobile devices */
@media only screen and (max-width: 480px) {
   padding:0 5% ;
   justify-content:space-between ;


   .logo{
      font-size:16px ;
      margin-left:0 ;
   }
   .pages{
      display:${props => props.menuCheck ? 'flex' : 'none'} ;
      position:absolute ;
      background:white ;
      top:100% ;
      left:0 ;
      margin-left:0 ;
      width:100% ;
      height:120px ;
      flex-direction:column ;
      justify-content:flex-start ;
      padding-top:10px ;

      li{
         margin:10px 0 ;
         padding-left:30px ;
         font-size:20px ;
         position:relative
   }
   #homeLink{
      &::before {
    top: 32px;
    border-bottom: 3px solid #9966CC;
}
   }
  
   
}

#links{
      display:none ;
   }
   #menu{
      display:block ;
   }
}

/* Tablets */
@media only screen and (min-width: 481px) and (max-width: 768px) {
   padding:0 5% ;
   justify-content:space-between ;


   .logo{
      font-size:20px ;
      margin-left:0 ;
   }
   .pages{
      display:${props => props.menuCheck ? 'flex' : 'none'} ;
      position:absolute ;
      background:white ;
      top:100% ;
      left:0 ;
      margin-left:0 ;
      width:100% ;
      height:120px ;
      flex-direction:column ;
      justify-content:flex-start ;
      padding-top:10px ;

      li{
         margin:10px 0 ;
         padding-left:30px ;
         font-size:20px ;
         position:relative
   }
   #homeLink{
      &::before {
    top: 32px;
    border-bottom: 3px solid #9966CC;
}
   }
  
   
}

#links{
      display:none ;
   }
   #menu{
      display:block ;
   }
}

/* Small laptops */
@media only screen and (min-width: 769px) and (max-width: 1024px){
   justify-content:space-between ;
   .pages{
      width: 30%;
      margin-right:5% ;

      li{
         font-size:20px ;
      }
      #homeLink{
      &::before {
    top: 30px;
    border-bottom: 3px solid #9966CC;
}
   }
   }
   #links{
      display:none ;
      margin-left:0 ;
   }
}

@media only screen and (min-width: 1025px) and (max-width: 1200px){
.pages{
margin-left:30% ;
width:20% ;
}
}
`

export default Nav2;