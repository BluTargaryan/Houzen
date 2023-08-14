
//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";
import Nav from "../comps/Nav";

//media
import dots from '../media/dots.png'
import shape from '../media/Ellipse 83.png'

const Abstract = () =>{
return(
   <StyledAbstract>
   <img src={dots} alt="dots" id="dots" />
   <img src={shape} alt="shape" id="shape" />
   </StyledAbstract>
) 
}

const StyledAbstract= styled(motion.div)`

img{
    position:absolute ;
    z-index:0;
}
#dots{
    top:0 ;
    left:0;
    height: 20%;
    width:auto ;
}
#shape{
    right:0 ;
    bottom:0;
    height: 60%;
    width:auto ;
}

@media only screen and (max-width: 600px) {
#dots{
    height:12% ;
}
#shape{
    height: 30%;
}
}
`

export default Abstract;