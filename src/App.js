import Layout from "./component/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Techstack from "./pages/Techstack";
import WorkExp from "./pages/WorkExp";
import ScrollToTop from "react-scroll-to-top";
import Tada from "react-reveal/Tada";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import MobileNav from "./component/MobileNav";

function App() {
  return (
    <>
      
        <ToastContainer />
        <MobileNav />
        <Layout />
        <div className="container">
          <About />
          <Techstack />
          <Projects />
          <Education />
          <WorkExp />
          <Contact />
        </div>
        <div className="footer pb-3 ms-3 ">
          <Tada>
            <h4 className="text-center">&copy;Jan 2025</h4>
            </Tada>
        </div>
    
      <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
    </>
  );
}

export default App;
