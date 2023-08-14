import Nav from "./comps/Nav";
import Home from './pages/Home';
import GlobalStyles from "./GlobalStyles";
import {Route, Routes} from 'react-router-dom'

function App() {
  return (
<div className="App">
<GlobalStyles/>

<Routes>
<Route  path="/" element={<Home/>}/>
</Routes>
</div>
  );
}

export default App;
