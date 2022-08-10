import "./Sponsors.css";

const Thanks = () => {
  const svgIcon = (
    <img className="svg-icon sponsorIconSVG" src="svgs/billboard.png"></img>
  );
  return (
    <div class="section dark" id="sponsors">
      <div class="jumbotron">
        <div className="parent">
          <div
            style={{
              position: "relative",
            }}
            className="child"
          >
            <img src="Sponsorlar.png"></img>
            <a href="/sponsors" className="sponsorLinkText">
              <h3 className="underlineOnHover">Learn more...</h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
// First of all, as Meister Robotics we'd like to thank everyone that has shown support to us. We couldn't have done this without you.
