import TopBar from "./TopBar";

const Iletisim = () => {
    function kopyala() {
        navigator.clipboard.writeText("Darkgoatie#6381");
        alert("Copied the text: " + "Darkgoatie#6381");
      }
    return ( 
        <div id="iletisim">
            <TopBar />
            <hr />
            <h1 style={{
                textAlign: "center"
            }}>Iletisim</h1>
            <article>
                <h3>Discord</h3>
                Bize <a href="https://discord.com/">Discord</a> uzerinden ulasabilirsiniz. User Tag: Darkgoatie#6381
            </article>
        </div>
     );
}
 
export default Iletisim;