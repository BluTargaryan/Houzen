
//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";

import shape from '../media/Ellipse 83.png'

const Abstract2 = () =>{
return(
   <StyledAbstract2>
   <img src={shape} alt="shape" id="shape" />
   </StyledAbstract2>
) 
}

const StyledAbstract2= styled(motion.div)`

img{
    position:absolute ;
    z-index:0;
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

export default Abstract2;