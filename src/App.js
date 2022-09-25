import { Globalstyle } from './style/globalStyle';
import { Home } from "./pages/Home"
import { Detalhes } from "./pages/Detalhes"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"



function App() {

  return (

    <>
      <Globalstyle />
    
    
    <Router >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Detalhes/:id" element={<Detalhes />} />
        </Routes>
      </Router> 
     
     
 
    </>

  );
}

export default App;
