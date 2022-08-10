import "./Sponsors.css";

const RSponsors = () => {
  const il = require("../Sponsors/links.json").icons;
  return (
    <div className="Sponsors row">
      <div className="column">
        {il.map((source) => {
          return <img className="sponsorListImage" src={source}></img>;
        })}
      </div>
    </div>
  );
};

export default RSponsors;
