import "./BecomeSponsor.css";
import useWindowDimensions from "../../../utils/useWindowDimensions";

const Thanks = () => {
  const { width, height } = useWindowDimensions();
  const svgIcon = (
    <img className="svg-icon sponsorIconSVG" src="svgs/billboard.png"></img>
  );

  let imgSource = "Sponsorlar.png";
  if (width <= 600) {
    imgSource = "Sponsorlar-mobil.png";
  }

  return (
    <div className="section dark" id="sponsors">
      <div className="jumbotron">
        <div
          style={{
            position: "relative",
          }}
        >
          <img src={imgSource}></img>
          <a href="/sponsors" className="sponsorLinkText">
            <h3 className="underlineOnHover">Learn more...</h3>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
// First of all, as Meister Robotics we'd like to thank everyone that has shown support to us. We couldn't have done this without you.
