const { render } = require("react-dom");
import About from './Components/About';
import Jumbotron from './Components/Jumbotron';
// import Members from './Components/Members';
import Navbar from './Components/Navbar';
import Projects from './Components/BusinessPlan';
import Thanks from './Components/Thanks';
import Timeline from './Components/Sponsorships';
import './style.css';

render(
    <div className="Main">
        <Navbar />
        <Jumbotron />
        <Thanks />
        <About />
        <Projects />
        <Timeline />
    </div>
    ,
    document.getElementById("root")
)