// dependencises
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "./sass/_bsCustomization.sass";
import {
  reactDom,
  Home,
  Regester,
  Features,
  Loader,
  App,
} from "./utils/modules.jsx";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const responsiveConfig = () => {
  let loading = document.querySelector(".loader"),
    all = document.querySelectorAll("*"),
    aside = document.querySelector('[data-name= "App-aside"]'),
    width = 0,
    notification = document.querySelector('.notify-body'),
    taskProgression = document.querySelector('.task-progression')
    ;
  // show loading page
  setTimeout(() => {
    loading.classList.add("d-none");
  }, 1500);
  // ##for Responsive
  // remove tooltip & auto restructure aside width for [<=800px] screens
  if(aside !== null){ // becoz null pop in main page
    if (window.innerWidth <= 800) {
      // auto resize aside
      width = window.innerWidth;
      aside.firstChild.classList.remove("flex-column");
      aside.firstChild.classList.add("justify-content-between");
      // remove hint
      for (let i = 0; i < all.length; i++) {
        all[i].classList.remove("showHint");
        all[i].setAttribute("data-hint", "");
      }
      // auto fit navigation bar popups blocks
      notification.classList.add('translate-middle-x','start-50')
      taskProgression.classList.add('translate-middle-x','start-50')
    } else {
      width = window.innerWidth / 3;
      aside.firstChild.classList.remove("justify-content-between");
      aside.firstChild.classList.add("flex-column");
      // auto fit navigation bar popups blocks
      notification.classList.remove('translate-middle-x','start-50')
      taskProgression.classList.remove('translate-middle-x','start-50')
    }
    aside.style.width = width + "px"
  }
};

window.onload = responsiveConfig
window.onresize = responsiveConfig


reactDom.render(
  <BrowserRouter>
    <Loader />
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/sign up" component={Regester} />
      <Route path="/log in" component={Regester} />
      <Route path="/features" component={Features} />
      <Route path="/app" component={App} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
