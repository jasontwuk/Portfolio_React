import project_weather_a from "../img/projects/project_weather_a.png";
import project_weather_b from "../img/projects/project_weather_b.png";
import project_weather_c from "../img/projects/project_weather_c.png";

const FocusProjectWeather = () => {
  return (
    <section className="focus_project">
      <h2>Project</h2>
      <h3>Weather Forecast App</h3>

      <div className="focus_project_intro_container">
        <div className="focus_project_intro_text">
          <p>
            Getting weather forecast information should be easy and
            straightforward, but sometimes it is not the case with some UIs. In
            this app, users can get the gist of today’s and the future week’s
            weather at a glance, I believe it can fulfill most of the user’s
            needs.
          </p>
          <p>
            In this project, I utilized OpenWeatherMap API to get the newest
            weather data and GoogleMap API to access geographic data. London is
            the default city, but users can change it to any city they like by
            clicking the edit button and entering their chosen city. It will
            show the latest chosen city when you reopen the app next time.
          </p>
        </div>

        <div className="focus_project_intro_links">
          <a
            href="https://github.com/jasontwuk/JavaScript-Project_Weather-APP"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fas fa-code"></i>
            view code
          </a>
          {/* <a href="#" target="_blank">
              <i className="far fa-window-maximize"></i>
              live site
            </a> */}
        </div>
      </div>

      <div className="focus_project_tech">
        <div className="focus_project_tech_list">
          <h6>Used technologies:</h6>
          <ul>
            <li>&#8901; HTML5</li>
            <li>&#8901; CSS3</li>
            <li>&#8901; JavaScript ES6</li>
          </ul>
        </div>

        <div className="focus_project_tech_list">
          <h6>Used APIs:</h6>
          <ul>
            <li>&#8901; GoogleMap</li>
            <li>&#8901; OpenWeatherMap</li>
          </ul>
        </div>
      </div>

      <div className="focus_project_details">
        <div className="focus_project_details_left bg_yellow">
          <img src={project_weather_a} alt="weather forecast app" />
        </div>

        <div className="focus_project_details_right">
          <h5>Purpose and Goal</h5>
          <p>
            The purpose of this project was to use third party APIs to build a
            useful web application. I combined the power of the two APIs to
            provide a better user experience. My goal was to get a better
            understanding of utilizing third party APIs.
          </p>
        </div>
      </div>

      <div className="focus_project_details row_reverse">
        <div className="focus_project_details_left bg_yellow">
          <img src={project_weather_b} alt="weather forecast app" />
        </div>

        <div className="focus_project_details_right">
          <h5>Challenges and My Approach</h5>
          <p>
            In order to use the APIs' functionality, I applied for my own API
            keys then included them in the code. Where to put these API keys and
            how to do this securely was a new topic for me. It also required a
            way to display third party data in the app after fetching them
            through the APIs.
          </p>
        </div>
      </div>

      <div className="focus_project_details">
        <div className="focus_project_details_left bg_yellow">
          <img src={project_weather_c} alt="weather forecast app" />
        </div>

        <div className="focus_project_details_right">
          <h5>What I’ve learned</h5>
          <p>
            This project helped to solidify my knowledge of utilizing third
            party APIs, such as how to fetch data from third parties and how to
            display the data in my app. To secure my OpenWeatherMap API key, I
            put it inside the server so no one else has access to it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FocusProjectWeather;
