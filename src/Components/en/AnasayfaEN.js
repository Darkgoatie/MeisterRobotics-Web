import TopBar from "./TopBarEN";

const AnasayfaEN = () => {
    const TM = require("./TeamMembers.json")
    let mc = 0;
    return ( 
        <div>
            <TopBar />
            <hr />
            <div className="AnaSayfa">
                <div className="AnaSayfa01">
                    <h1>Meister Robotics Home Page</h1>
                    <br />
                    <nav>
                    <h3>Here's a list of what's in this website.</h3>
                            <div id="TOC" style={{
                            justifyContent: "center",
                            display: "flex"
                            }}>
                    <ul>
                        <li><a href="#Thanks"><h3>Special Thanks</h3></a></li>
                        <li><a href="#About"><h3>About</h3></a></li>
                        <li><a href="#Members"><h3>Team Members</h3></a></li>
                    </ul>
                        </div>
                    </nav>
                    <div id="Thanks">
                    <h3>First of all, as Meister Robotics we'd like to thank everyone that has shown support to us. We couldn't have done this without you.</h3>
                    </div>
                    <div id="About">
                        <h2>About Meister Robotics</h2>
                        <h4>As meister robotics, our team was born in 2021 with the help of JR-Robotics. Our team members are students in DSI (Deutsche Schule Istanbul).</h4>
                    </div>
                    <div display="flex" id="Members">
                        <h2>Our Team</h2>
                        {TM.map((Member) => {
                            mc =+ 1;
                            return (<img style={{
                                marginLeft: "40px",
                                marginRight: "40px"
                            }} height="200px" width="200px" src={Member.icon} title={Member.name} key={`${Member.name}#${mc}`} alt={Member.name}></img> 
                            )
                        })}

                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default AnasayfaEN;