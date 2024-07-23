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
import FocusProjectTracker from "./components/FocusProjectTracker";
import FocusProjectWeather from "./components/FocusProjectWeather";
import FocusProjectBudget from "./components/FocusProjectBudget";
import FocusProjectSlideshow from "./components/FocusProjectSlideshow";
import OtherProjects from "./components/OtherProjects";

// image
import project_tracker from "./img/projects/project_tracker.jpg";
import project_weather from "./img/projects/project_weather.jpg";
import project_budget from "./img/projects/project_budget.jpg";
import project_slideshow from "./img/projects/project_slideshow.jpg";

// font awesome
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [projects] = useState([
    {
      title: "Task Tracker App",
      link: "task_tracker_app",
      class: "bg_green",
      img: `${project_tracker}`,
      text: "This app helps users organize and track their tasks.",
      id: 1,
    },
    {
      title: "Weather Forecast App",
      link: "weather_forecast_app",
      class: "bg_yellow",
      img: `${project_weather}`,
      text: "An app that shows today's and the future week's weather.",
      id: 2,
    },
    {
      title: "Budget App",
      link: "budget_app",
      class: "bg_purple",
      img: `${project_budget}`,
      text: "This app helps users manage their budgets and expenses.",
      id: 3,
    },
    {
      title: "Slideshow",
      link: "slideshow",
      class: "bg_pink",
      img: `${project_slideshow}`,
      text: "This is a responsive slideshow that is powered by JavaScript.",
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
      link: "https://www.linkedin.com/in/jasonliaocode/",
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
            <Route path="/task_tracker_app">
              <FocusProjectTracker />
              <OtherProjects projects={projects} id="1" />
            </Route>
            <Route path="/weather_forecast_app">
              <FocusProjectWeather />
              <OtherProjects projects={projects} id="2" />
            </Route>
            <Route path="/budget_app">
              <FocusProjectBudget />
              <OtherProjects projects={projects} id="3" />
            </Route>
            <Route path="/slideshow">
              <FocusProjectSlideshow />
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
