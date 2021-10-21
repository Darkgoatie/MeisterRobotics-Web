const ChooseLang = () => {

    const BtnStyle = {
            padding: "40px",
            backgroundColor: "gray",
            borderRadius: "10px",
            margin: "40px",
            color: "white"
            };

    return ( 
        <div>
            <h1>Please choose Language!</h1>
            <br />
            <a style={BtnStyle} href="/en/home">English</a><a style={BtnStyle} href="/tr/anasayfa">Turkish</a>            
        </div>
     );
}
 
export default ChooseLang;
