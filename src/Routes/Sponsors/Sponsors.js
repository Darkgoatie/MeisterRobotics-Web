import "./Sponsors.css";

const RSponsors = () => {
  const brandlist = require("../Sponsors/links.json").brands;
  return (
    <div className="Sponsors row">
      <div className="column">
        {brandlist.map((brand) => {
          return (
            <a target="_blank" href={brand.link}>
              <img className="sponsorListImage" src={brand.img}></img>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default RSponsors;
