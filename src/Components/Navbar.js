const Navbar = () => {
  return (
    <nav className="fixed-top navbar navbar-expand-lg navbar-dark bg-dark justify-content-between">
      <div className="container-fluid">
        <a className="navbar-brand" href="/#">
          <img alt="icon" height="32px" src="/MeisterRobotics.png"></img>{" "}
          Meister Robotics
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar">
          <div className="navbar-nav">
            <a className="nav-item nav-link" href="/#">
              Home
            </a>
            <a className="nav-item nav-link" href="/#about">
              About
            </a>
            <a className="nav-item nav-link" href="/#businessplan">
              Business Plan
            </a>
            <a className="nav-item nav-link" href="/#sponsorship">
              Sponsorships
            </a>
            <a className="nav-item nav-link" href="/#Projects">
              Projects
            </a>
            <a className="nav-item nav-link" href="/#OurVision">
              Our Vision
            </a>
            <a className="nav-item nav-link" href="/#ContactUs">
              Contact
            </a>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Social Media
              </a>
              <ul class="dropdown-menu">
                <li>
                  <a
                    target="_blank"
                    class="dropdown-item fa fa-linkedin"
                    href="https://www.linkedin.com/company/meister-robotics-team/"
                  >
                    {" "}
                    | Linkedin
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    class="dropdown-item fa fa-instagram"
                    href="https://www.instagram.com/frcmeister8754/"
                  >
                    {" "}
                    | Instagram
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    class="dropdown-item fa fa-youtube"
                    href="https://www.youtube.com/channel/UCOoilh6XoF2wymv-gqpFVgg"
                  >
                    {" "}
                    | Youtube
                  </a>
                </li>
              </ul>
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
