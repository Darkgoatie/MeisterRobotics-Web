const Members = () => {
    const TM = require("./TeamMembers.json");
    let mc = 0;
    return (                     
<div className="section" id="Members">
    <h1 class="display-4">Our Team</h1>
    {TM.map((Member) => {
        mc =+ 1;
        return (<img style={{
            marginLeft: "40px",
            marginRight: "40px"
        }} height="200px" width="200px" src={Member.icon} title={Member.name} key={`${Member.name}#${mc}`} alt={Member.name}></img> 
        )
    })}

</div>
 );
}
 
export default Members;