import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";
import { ScrollToTop } from "react-router-scroll-to-top";
import { Link } from "react-router-dom";
import "./App.scss";

// components
import HeaderContainer from "./components/HeaderContainer";
import Dots from "./components/Dots";
import Intro from "./components/Intro";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import FocusProjectWeather from "./components/FocusProjectWeather";
import FocusProjectBudget from "./components/FocusProjectBudget";
import FocusProjectSlideshow from "./components/FocusProjectSlideshow";
import FocusProjectForms from "./components/FocusProjectForms";
import OtherProjects from "./components/OtherProjects";

// image
import project_weather from "./img/projects/project_weather.jpg";
import project_budget from "./img/projects/project_budget.jpg";
import project_slideshow from "./img/projects/project_slideshow.jpg";
import project_forms from "./img/projects/project_forms.jpg";

// font awesome
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [projects] = useState([
    {
      title: "Weather Forecast App",
      link: "weather_forecast_app",
      class: "bg_yellow",
      img: `${project_weather}`,
      text: "An app that shows today's and the future week's weather.",
      id: 1,
    },
    {
      title: "Budget App",
      link: "budget_app",
      class: "bg_purple",
      img: `${project_budget}`,
      text: "This app helps users manage their budgets and expenses.",
      id: 2,
    },
    {
      title: "Slideshow",
      link: "slideshow",
      class: "bg_pink",
      img: `${project_slideshow}`,
      text: "This is a responsive slideshow that is powered by JavaScript.",
      id: 3,
    },
    {
      title: "Sliding Forms",
      link: "sliding_forms",
      class: "bg_green",
      img: `${project_forms}`,
      text: "'swup.js' is used in this project to create sliding effects.",
      id: 4,
    },
  ]);

  const [icons] = useState([
    {
      name: "github",
      link: "https://github.com/jasontwuk",
      sign: ["fab", "github"],
      id: 1,
    },
    {
      name: "LinkedIn",
      link: "http://www.linkedin.com/in/jasonliao-twuk",
      sign: ["fab", "linkedin-in"],
      id: 2,
    },
    {
      name: "jasoncodeuk@gmail.com",
      link: "mailto:jasoncodeuk@gmail.com",
      sign: faEnvelope,
      id: 3,
    },
  ]);

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <header>
          <HeaderContainer icons={icons} />
          <Switch>
            <Route exact path="/">
              <Intro />
              <Dots />
            </Route>
          </Switch>
        </header>
        <main>
          <Switch>
            <Route exact path="/">
              <About />
              <Projects projects={projects} />
            </Route>
            <Route path="/weather_forecast_app">
              <FocusProjectWeather />
              <OtherProjects projects={projects} id="1" />
            </Route>
            <Route path="/budget_app">
              <FocusProjectBudget />
              <OtherProjects projects={projects} id="2" />
            </Route>
            <Route path="/slideshow">
              <FocusProjectSlideshow />
              <OtherProjects projects={projects} id="3" />
            </Route>
            <Route path="/sliding_forms">
              <FocusProjectForms />
              <OtherProjects projects={projects} id="4" />
            </Route>
          </Switch>
          <Contact icons={icons} />
        </main>

        <footer>
          <section>
            © 2020 - present&nbsp;
            <Link to="/" title="Home - Jason Liao">
              <div className="underline_container">
                <span className="underline">Jason Liao</span>
              </div>
            </Link>
            . All Rights Reserved.
          </section>
        </footer>
      </div>
    </Router>
  );
};

export default App;
