const Members = () => {
  let members = require("./TeamMembers.json");
  const firstCaptain = members.shift();
  const secondCaptain = members.shift();
  let m = Math.ceil(members.length / 2);
  let firstHalf = members.slice(0, m);
  let secondHalf = members.slice(m);

  const arrayToItems = (array) => {
    return array.map((i) => {
      return <li>{i}</li>;
    });
  };

  const svgStar = (
    <img
      style={{
        height: "20px",
      }}
      src="svgs/star.svg"
    ></img>
  );

  return (
    <div className="section dark" id="Members">
      <div className="jumbotron">
        <p className="display-4">Our Team</p>
        <p className="lead">{svgStar}: Team Captain</p>
        <div className="row">
          <div className="col-sm-6">
            <ul>
              <li>
                {svgStar} {firstCaptain}
              </li>
              {arrayToItems(firstHalf)}
            </ul>
          </div>
          <div className="col-sm-6">
            <ul>
              <li>
                {svgStar} {secondCaptain}{" "}
              </li>
              {arrayToItems(secondHalf)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;
