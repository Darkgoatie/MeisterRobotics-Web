const { render } = require("react-dom"); // Import renderer from react library
import "./global.css"; // Import global css ( Applies for all components )

// Import Components Route
import About from "./Routes/Home/About/About";
import Jumbotron from "./Routes/Home/Jumboton/Jumbotron";
import Members from "./Routes/Home/Members/Members";
import Navbar from "./Routes/Home/Navbar/Navbar";
import BusinessPlan from "./Routes/Home/BusinessPlan/BusinessPlan";
import Thanks from "./Routes/Home/Sponsors/Sponsors";
import Timeline from "./Routes/Home/SponsorshipInfo/SponsorshipInfo";
import Vision from "./Routes/Home/Vision/Vision";
import Values from "./Routes/Home/Values/Values";
import {
  BrowserRouter as Router,
  Switch as Routes,
  Route,
} from "react-router-dom";
import RSponsors from "./Routes/Sponsors/Sponsors";
import Projects from "./Routes/Home/Projects/Projects";
import Izmir from "./Routes/Home/Izmir/Izmir";

render(
  <Router>
    <Routes>
      <Route exact path="/">
        <div className="Main">
          <Navbar />
          <Jumbotron />
          <Thanks />
          <About />
          <Members />
          <Izmir />
          <Vision />
          <Values />
          <BusinessPlan />
          <Projects />
          <Timeline />
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
