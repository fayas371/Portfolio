import About from "./Components/About";
import Skills from "./Components/Skills";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Portfolio from "./Components/Portfolio";
import SocialLinks from "./Components/SocialLinks";
import Contact from "./Components/Contact";

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Skills/>
      <Contact/>
      <SocialLinks/>
      
    </div>
  );
}

export default App;
