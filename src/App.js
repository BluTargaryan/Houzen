
import Home from './pages/Home';
import GlobalStyles from "./GlobalStyles";
import {Route, Routes} from 'react-router-dom'
import About from "./pages/About";
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
<div className="App">
<GlobalStyles/>
<AnimatePresence exitBeforeEnter>
<Routes>
<Route  path="/" element={<Home/>}/>
<Route  path="/about" element={<About/>}/>
</Routes>
</AnimatePresence>
</div>
  );
}

export default App;
