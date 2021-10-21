import { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ChooseLang from './ChooseLang';
import AnasayfaEN from './Components/en/AnasayfaEN';
import GecersizSayfaEN from './Components/en/GecersizSayfaEN';
import HakkimizdaEN from './Components/en/HakkimizdaEN';
import IletisimEN from './Components/en/IletisimEN';
import MedyaEN from './Components/en/MedyaEN';
import NoPath from './Components/NoPath';
import Anasayfa from './Components/tr/Anasayfa';
import GecersizSayfa from './Components/tr/GecersizSayfa';
import Hakkimizda from './Components/tr/Hakkimizda';
import Iletisim from './Components/tr/Iletisim';
import Medya from './Components/tr/Medya';

const App = () => {
    let refreshes = 0;
    useEffect(() => {
        if(refreshes === 0) return refreshes = refreshes+1;
        alert("This page has been modified!")
    })
    return ( <div>

        <Router>
          <Switch>
            <Route path="/tr">
          <Switch>
            <Route exact path="/tr/anasayfa">
              <Anasayfa />
            </Route>
            <Route exact path="/tr/iletisim">
              <Iletisim />
            </Route>
            <Route exact path="/tr/medya">
              <Medya />
            </Route>
            <Route exact path="/tr/hakkimizda">
              <Hakkimizda />
            </Route>
            <Route>
              <GecersizSayfa />
            </Route>
          </Switch>
            </Route>
            <Route path="/en">
          <Switch>
            <Route exact path="/en/home">
              <AnasayfaEN />
            </Route>
            <Route exact path="/en/contact">
              <IletisimEN />
            </Route>
            <Route exact path="/en/media">
              <MedyaEN />
            </Route>
            <Route exact path="/en/about">
              <HakkimizdaEN />
            </Route>
            <Route>
              <GecersizSayfaEN />
            </Route>
          </Switch>
            </Route>
            <Route exact path="/ChooseLang">
              <ChooseLang />
            </Route>
            <Route>
              <NoPath />
            </Route>
          </Switch>
        </Router>
        </div> 
        );
}
 
export default App;