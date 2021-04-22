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
import FocusProject1 from "./components/FocusProject1";
import FocusProject2 from "./components/FocusProject2";
import FocusProject3 from "./components/FocusProject3";
import FocusProject4 from "./components/FocusProject4";
import OtherProjects from "./components/OtherProjects";

// image
import project_1 from "./img/projects/project_1.jpg";
import project_2 from "./img/projects/project_2.jpg";
import project_3 from "./img/projects/project_3.jpg";
import project_4 from "./img/projects/project_4.jpg";

// font awesome
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const App = () => {
  const [projects] = useState([
    {
      title: "Weather Forecast App",
      link: "weather_forecast_app",
      class: "bg_yellow",
      img: `${project_1}`,
      text: "An app that shows today's and the future week's weather.",
      id: 1,
    },
    {
      title: "Budget App",
      link: "budget_app",
      class: "bg_purple",
      img: `${project_2}`,
      text: "This app helps users manage their budgets and expenses.",
      id: 2,
    },
    {
      title: "Slideshow",
      link: "slideshow",
      class: "bg_pink",
      img: `${project_3}`,
      text: "This is a responsive slideshow that is powered by JavaScript.",
      id: 3,
    },
    {
      title: "Sliding Forms",
      link: "sliding_forms",
      class: "bg_green",
      img: `${project_4}`,
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
              <FocusProject1 />
              <OtherProjects projects={projects} id="1" />
            </Route>
            <Route path="/budget_app">
              <FocusProject2 />
              <OtherProjects projects={projects} id="2" />
            </Route>
            <Route path="/slideshow">
              <FocusProject3 />
              <OtherProjects projects={projects} id="3" />
            </Route>
            <Route path="/sliding_forms">
              <FocusProject4 />
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
