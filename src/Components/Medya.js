import TopBar from "./TopBar";

const Medya = () => {
    const MediaLinks = [
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Lower_Manhattan_skyline_-_June_2017.jpg/1200px-Lower_Manhattan_skyline_-_June_2017.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Lower_Manhattan_skyline_-_June_2017.jpg/1200px-Lower_Manhattan_skyline_-_June_2017.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Lower_Manhattan_skyline_-_June_2017.jpg/1200px-Lower_Manhattan_skyline_-_June_2017.jpg',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Lower_Manhattan_skyline_-_June_2017.jpg/1200px-Lower_Manhattan_skyline_-_June_2017.jpg'
    ];
    return ( 
        <div id="Media">
            <TopBar />
            {MediaLinks.map((photo) => {
                return(
                    <div className="Photo">
                        <h2>Fotograf ismi</h2>
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
 
export default Medya;