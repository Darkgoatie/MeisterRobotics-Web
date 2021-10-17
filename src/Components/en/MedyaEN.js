import TopBar from "./TopBarEN";

const MedyaEN = () => {
    const MediaLinks = [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Lower_Manhattan_skyline_-_June_2017.jpg/1200px-Lower_Manhattan_skyline_-_June_2017.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Lower_Manhattan_skyline_-_June_2017.jpg/1200px-Lower_Manhattan_skyline_-_June_2017.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Lower_Manhattan_skyline_-_June_2017.jpg/1200px-Lower_Manhattan_skyline_-_June_2017.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Lower_Manhattan_skyline_-_June_2017.jpg/1200px-Lower_Manhattan_skyline_-_June_2017.jpg'
    ];
    return ( 
        <div id="Media">
            <TopBar />
            <hr />
            {MediaLinks.map((photo) => {
                return(
                    <div className="Photo">
                    <img style={{
                        marginLeft: 'auto',
                        marginRight: 'auto'
                    }} src={photo}></img>
                    <br /> <br />
                    </div>
                )
            })}
        </div>
     );
}
 
export default MedyaEN;