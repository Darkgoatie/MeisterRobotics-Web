const { render } = require("react-dom");
import About from './Components/About';
import Jumbotron from './Components/Jumbotron';
// import Members from './Components/Members';
import Navbar from './Components/Navbar';
import Projects from './Components/BusinessPlan';
import Thanks from './Components/Thanks';
import Timeline from './Components/Sponsorships';
import './style.css';
import Sponsors from './Components/Sponsors';
import Vision from './Components/Vision';
import { BrowserRouter as Router, Switch as Routes, Route} from 'react-router-dom';
import RSponsors from './Components/RouteSponsors';

render(
    <Router>
        <Routes>
            <Route exact path="/">
                <div className="Main">
                    <Navbar />
                    <Jumbotron />
                    <Thanks />
                    <About />
                    <Vision />
                    <Projects />
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
    </Router>
    ,
    document.getElementById("root")
)