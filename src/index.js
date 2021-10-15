import { StrictMode } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Anasayfa from './Components/Anasayfa';
import GecersizSayfa from './Components/GecersizSayfa';
import Hakkimizda from './Components/Hakkimizda';
import Iletisim from './Components/Iletisim';
import Medya from './Components/Medya';
import './index.css';
render(
<StrictMode>
  <Router>
    <Switch>
      <Route exact path="/anasayfa">
        <Anasayfa />
      </Route>
      <Route exact path="/iletisim">
        <Iletisim />
      </Route>
      <Route exact path="/medya">
        <Medya />
      </Route>
      <Route exact path="/hakkimizda">
        <Hakkimizda />
      </Route>
      <Route>
        <GecersizSayfa />
      </Route>
    </Switch>
  </Router>
</StrictMode>,
  document.getElementById("root")
)
