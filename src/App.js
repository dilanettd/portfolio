import { useContext } from "react";

import Navbar from "./components/navbar/Navbar";
import "./App.css";
import Intro from "./components/intro/Intro";
import Services from "./components/services/Services";
import Experience from "./components/experience/Experience";
import Works from "./components/works/Works";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonial from "./components/testimonials/Testimonial";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { themeContext } from "./Context";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
