const ChooseLang = () => {
    return ( 
        <div>
            <h1>Please choose Language!</h1>
            <br />
            <a style={{
            padding: "30px",
            backgroundColor: "gray",
            borderRadius: "10px",
            width: "36px",
            height: "45px"
            }} className="ChooseLangBtn" href="/en/home">English</a> <a style={{
                padding: "30px",
                backgroundColor: "gray",
                borderRadius: "10px",
                width: "36px",
                height: "45px"
                }} className="ChooseLangBtn" href="/tr/anasayfa">Turkish</a>
        </div>
     );
}
 
export default ChooseLang;