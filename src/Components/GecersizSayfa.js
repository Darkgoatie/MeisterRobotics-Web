import { useState } from "react";
import TopBar from "./TopBar";

const GecersizSayfa = () => {
    const [Zmn, setZmn] = useState("5")
    setInterval(() => {
        setZmn(parseInt(Zmn)-1)
    }, 1000);
    return ( 
        <div id="GecersizSayfa">
            <TopBar />
            <hr />
        <meta http-equiv="refresh" content="5; URL=/anasayfa" />
          <h1>Boyle bir sayfa bulunmamaktadir, { Zmn } saniye icinde ana sayfaya yonlendirileceksin.</h1>
        </div>
     );
}
 
export default GecersizSayfa;