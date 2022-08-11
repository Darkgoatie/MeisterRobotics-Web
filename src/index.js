const { render } = require("react-dom"); // Import renderer from react library
import "./global.css"; // Import global css ( Applies for all components )
import "./footer.css";

// Import Components Route
import About from "./Routes/Home/About/About";
import Jumbotron from "./Routes/Home/Jumboton/Jumbotron";
import Members from "./Routes/Home/Members/Members";
import Navbar from "./Routes/Home/Navbar/Navbar";
import BusinessPlan from "./Routes/Home/BusinessPlan/BusinessPlan";
import SponsorPlan from "./Routes/Home/Sponsors/BecomeSponsor";
import SponsorshipInfo from "./Routes/Sponsors/SponsorshipInfo/SponsorshipInfo";
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
          <SponsorPlan />
          <About />
          <Members />
          <Izmir />
          <Vision />
          <Values />
          <BusinessPlan />
          <Projects />
        </div>
      </Route>
      <Route exact path="/sponsors">
        <Navbar />
        <SponsorshipInfo />
        <RSponsors />
      </Route>
      <Route>
        <meta http-equiv="refresh" content="0;URL='/'" />
      </Route>
    </Routes>
  </Router>,
  document.getElementById("root")
);
