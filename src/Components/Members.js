const Members = () => {
  let members = require("./TeamMembers.json");
  const firstCaptain = members.shift();
  const secondCaptain = members.shift();
  const thirdCaptain = members.shift();
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
      title="Team Captain"
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
        <p
          style={{
            textAlign: "center",
          }}
        >
          {svgStar} {firstCaptain}
        </p>
        <div className="row">
          <div className="col-sm-6">
            <ul>
              <li>
                {svgStar} {secondCaptain}
              </li>
              {arrayToItems(firstHalf)}
            </ul>
          </div>
          <div className="col-sm-6">
            <ul>
              <li>
                {svgStar} {thirdCaptain}{" "}
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
