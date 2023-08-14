import { useEffect,useState } from "react";
import React from "react";
//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";

import app from "../media/App Store.png"
import play from "../media/Play Store.png"

const Nav = () =>{
const[scroll,setScroll]= useState(false)
   function scrollFunction() {
      if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
         setScroll(true)
      } else{
         setScroll(false)
      }
    }

    useEffect(() => {
      window.onscroll=scrollFunction
    }, []);

return(
   <StyledNav scrollCheck={scroll}>
<div className="logo">Homely</div>
<ul className="pages">
   <li id="homeLink">Home</li>
   <li>About Us</li>
</ul>
<div id="links">
<img src={app} alt="App Store" />
<img src={play} alt="Play Store" />
</div>
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
   }
}
`

export default Nav;