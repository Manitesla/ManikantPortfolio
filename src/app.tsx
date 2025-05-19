import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Works,
  StarsCanvas,
} from "./components";
//import Banner from "./components/banner";
import Footer from "./components/footer";

// App
const App = () => {
  const [hide, setHide] = useState(true);

  return (
    <BrowserRouter>
      {/* Outer wrapper */}
      <div className="relative z-0 bg-black min-h-screen overflow-hidden">
        
        {/* Glowing gradient background (behind content) */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0033] via-[#6e00ff] to-[#ff0080] opacity-30 blur-2xl animate-pulse z-[-1]" />

        {/* Main content */}
        <Navbar hide={hide} />
        <Hero />
        <About />
        <Experience />
      
        <Works />
    

        {/* Contact & Footer */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
