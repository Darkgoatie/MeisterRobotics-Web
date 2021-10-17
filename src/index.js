import { StrictMode } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ChooseLang from './ChooseLang';
import AnasayfaEN from './Components/en/AnasayfaEN';
import GecersizSayfaEN from './Components/en/GecersizSayfa';
import HakkimizdaEN from './Components/en/HakkimizdaEN';
import IletisimEN from './Components/en/IletisimEN';
import MedyaEN from './Components/en/MedyaEN';
import Anasayfa from './Components/tr/Anasayfa';
import GecersizSayfa from './Components/tr/GecersizSayfa';
import Hakkimizda from './Components/tr/Hakkimizda';
import Iletisim from './Components/tr/Iletisim';
import Medya from './Components/tr/Medya';
import './index.css';
render(
<StrictMode>
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
      <Route>
        <ChooseLang />
      </Route>
    </Switch>
  </Router>
</StrictMode>,
  document.getElementById("root")
)
