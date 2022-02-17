const Members = () => {
    let members = require("./TeamMembers.json");
    let m = Math.ceil(members.length / 2)
    let firstHalf = members.slice(0, m);
    let secondHalf = members.slice(m);

    const arrayToItems = (array) => {
        return array.map((i) => {
            return <li>{i}</li>
        })
    }

    return (
        <div className="section dark" id="Members">
            <div className="jumbotron">
                <p className="display-4">Our Team</p>
                <div className="row">
                    <div className="col-sm-6">
                        <ul>
                            {arrayToItems(firstHalf)}
                        </ul>
                    </div>
                    <div className="col-sm-6">
                        <ul>
                            {arrayToItems(secondHalf)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Members;
