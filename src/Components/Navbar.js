const Navbar = () => {
    return ( 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
    <div className="container-fluid">
        <a className="navbar-brand" href="#"><img alt="icon" height="32px" src="/MeisterRobotics-modified.png"></img> Meister Robotics</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar">
            <div className="navbar-nav">
                <a className="nav-item nav-link" href="#">Home</a>
                <a className="nav-item nav-link" href="#thanks">Special Thanks</a>
                <a className="nav-item nav-link" href="#about">About</a>
                <a className="nav-item nav-link" href="#projects">Projects</a>
                <a className="nav-item nav-link" href="#timeline">Timeline</a>
            </div>
        </div>
    </div>
</nav>
 );
}
 
export default Navbar;