
//motion and styled
import { motion } from "framer-motion";
import styled from "styled-components";
import Nav from "../comps/Nav";

import Landing from "../segments/Landing";
import Activity from "../segments/Activity";
import Starting from "../segments/Starting";

const Home = () =>{
return(
   <StyledHome>
    <Nav />
   <Landing/>
   <Activity/>
   <Starting/>
   </StyledHome>
) 
}

const StyledHome= styled(motion.div)`
width: 100vw;
height:auto ;
`

export default Home;