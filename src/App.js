import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";

// components
import HeaderContainer from "./HeaderContainer";
import Dots from "./Dots";
import Intro from "./Intro";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

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
      link: "weather_forecast_app.html",
      class: "bg_yellow",
      img: `${project_1}`,
      text: "An app that shows today's and the future week's weather.",
      id: 1,
    },
    {
      title: "Budget App",
      link: "budget_app.html",
      class: "bg_purple",
      img: `${project_2}`,
      text: "This app helps users manage their budgets and expenses.",
      id: 2,
    },
    {
      title: "Slideshow",
      link: "slideshow.html",
      class: "bg_pink",
      img: `${project_3}`,
      text: "This is a responsive slideshow that is powered by JavaScript.",
      id: 3,
    },
    {
      title: "Sliding Forms",
      link: "sliding_forms.html",
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
      name: "jasontwuk@gmail.com",
      link: "mailto:jasontwuk@gmail.com",
      sign: faEnvelope,
      id: 3,
    },
  ]);

  return (
    <Router>
      <div className="App">
        <header>
          <HeaderContainer icons={icons} />
          <Switch>
            <Route path="/">
              <Intro />
              <Dots />
            </Route>
          </Switch>
        </header>
        <main>
          <Switch>
            <Route path="/">
              <About />
              <Projects projects={projects} />
              <Contact icons={icons} />
            </Route>
          </Switch>
        </main>

        <footer>
          <p>© 2020 - present Jason Liao. All Rights Reserved.</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
