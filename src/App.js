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
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import ScrolltoTop from "./components/scrolltoTop/ScrolltoTop";
import About from "./components/about/About";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}>
      <Navbar />
      <Intro />
      <About />
      <Services />
      <Works />
      <Portfolio />
      <Testimonial />
      <Contact />
      <ScrolltoTop />
      <Footer />
    </div>
  );
}

export default App;
