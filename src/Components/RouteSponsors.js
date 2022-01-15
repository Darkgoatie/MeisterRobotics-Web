
                    /*
                    { 
                    il.map(url => {
                        return <img className="SponsorIcons" src={url}></img>;
                    })  
                    } 
                    */
const RSponsors = () => {
    const il = require("./links.json").icons;
    let i = 0;
    return ( 
        <div className="Sponsors">
                { 
                il.map(url => {
                    i++;
                    let classnames;
                    if(i % 2 == 0) {
                        classnames = "section dark"
                    } else {
                        classnames = "section"
                    }

                    return (
                        <div className={classnames}>
                            <img className="SponsorIcons" src={url}></img>
                        </div>
                    );
                    })  
                } 
        </div>
     );
}
 
export default RSponsors;