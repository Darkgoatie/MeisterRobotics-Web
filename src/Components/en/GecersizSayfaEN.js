import { useState } from "react";
import TopBar from "./TopBarEN";

const GecersizSayfaEN = () => {
    const [Zmn, setZmn] = useState("5")
    setInterval(() => {
        setZmn(parseInt(Zmn)-1)
    }, 1000);
    return ( 
        <div id="GecersizSayfa">
            <TopBar />
            <hr />
        <meta http-equiv="refresh" content="5; URL=/en/home" />
          <h1>There's no such page, You will be redirected in { Zmn } seconds.</h1>
        </div>
     );
}
 
export default GecersizSayfaEN;