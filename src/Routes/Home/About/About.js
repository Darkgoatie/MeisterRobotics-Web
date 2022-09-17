import './About.css'

const About = () => {
  return (
    <div className="section" id="about">
      <div className="jumbotron">
        <div className="parent">
          <div className="child">
            <h1 className="display-4">About Us</h1>
            <p id="AboutUsLead" className="lead">
              Hi! We are Meister Robotics. We are the second robotics team of
              the (Private) German High School. It is our second year (2022) as a
              Veteran team. We participate in FRC competitions with our{" "}
              <a className = "team" href="#Members">team</a> and mentor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
