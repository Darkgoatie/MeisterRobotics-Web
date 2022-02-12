const { render } = require("react-dom");
import About from "./Components/About";
import Jumbotron from "./Components/Jumbotron";
// import Members from './Components/Members';
import Navbar from "./Components/Navbar";
import BusinessPlan from "./Components/BusinessPlan";
import Thanks from "./Components/Thanks";
import Timeline from "./Components/Sponsorships";
import "./style.css";
import Sponsors from "./Components/Sponsors";
import Vision from "./Components/Vision";
import Values from "./Components/Values";
import {
  BrowserRouter as Router,
  Switch as Routes,
  Route,
} from "react-router-dom";
import RSponsors from "./Components/RouteSponsors";
import CIMG1 from "./Classes/Image1";
import CIMG2 from "./Classes/Image2";
import CIMG3 from "./Classes/Image3";
import CIMG4 from "./Classes/Image4";
import Projects from "./Components/Projects";
import CIMG5 from "./Classes/Image5";

render(
  <Router>
    <Routes>
      <Route path="/">
        <div className="Main">
          <Navbar />
          <Jumbotron />
          <Thanks />
          <About />
          <CIMG2 />
          <Vision />
          <Values />
          <CIMG1 />
          <CIMG3 />
          <BusinessPlan />
          <CIMG4 />
          <Projects />
          <CIMG5 />
          <Timeline />
          <Sponsors />
        </div>
      </Route>
      <Route exact path="/sponsors">
        <Navbar />
        <RSponsors />
      </Route>
      <Route>
        <meta http-equiv="refresh" content="0;URL='/'" />
      </Route>
    </Routes>
  </Router>,
  document.getElementById("root")
);
