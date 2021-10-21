import TopBar from "./TopBarEN";

const MedyaEN = () => {
    const Media = require("./Media.json");
    return ( 
        <div id="Media">
            <TopBar />
            <hr />
            {Media.map((photo) => {
                return(
                    <div className="Photo">
                    <h3>{photo.name}</h3>
                    <img style={{
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }} src={photo.img}></img>
                    <br /> <br />
                    </div>
                )
            })}
        </div>
     );
}
 
export default MedyaEN;