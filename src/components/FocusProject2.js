import project_2_a from "../img/projects/project_2_a.png";
import project_2_b from "../img/projects/project_2_b.png";
import project_2_c from "../img/projects/project_2_c.png";

const FocusProject1 = () => {
  return (
    <section className="focus_project">
      <h2>Project</h2>
      <h3>Budget App</h3>

      <div className="focus_project_intro_container">
        <div className="focus_project_intro_text">
          <p>
            Trying to save money is not an easy task, especially when you spend
            your money blindly. I decided to make a budget app that I would use,
            because it will give its users more control of their spending.
          </p>
          <p>
            This web application lets users set their budgets and keeps track of
            their expenses. Users can edit their budgets and add / delete /
            modify their expenses at any time. The balance number will turn red
            to indicate over spending, otherwise it will be green to show the
            budget is still healthy.
          </p>
        </div>

        <div className="focus_project_intro_links">
          <a
            href="https://github.com/jasontwuk/JavaScript-Project_Budget-APP"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fas fa-code"></i>
            view code
          </a>
          <a
            href="https://jasontwuk.github.io/JavaScript-Project_Budget-APP/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="far fa-window-maximize"></i>
            live site
          </a>
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
          <h6>Used resource:</h6>
          <ul>
            <li>&#8901; Font Awesome</li>
          </ul>
        </div>
      </div>

      <div className="focus_project_details">
        <div className="focus_project_details_left bg_purple">
          <img src={project_2_a} alt="budget app" />
        </div>

        <div className="focus_project_details_right">
          <h5>Purpose and Goal</h5>
          <p>
            The purpose of this project was to apply my JavaScript knowledge to
            build a practical web application. Through building this
            application, I want to gain some real-world work experience and put
            ES6 syntax into practice.
          </p>
        </div>
      </div>

      <div className="focus_project_details row_reverse">
        <div className="focus_project_details_left bg_purple">
          <img src={project_2_b} alt="budget app" />
        </div>

        <div className="focus_project_details_right">
          <h5>Challenges and My Approach</h5>
          <p>
            It required a lot of JavaScript knowledge to build this application.
            To search and choose the appropriate method to complete this project
            was a challenging but also interesting process. I always have the
            users in my mind when I work on projects, so making this app easier
            to use was one of my top priorities.
          </p>
        </div>
      </div>

      <div className="focus_project_details">
        <div className="focus_project_details_left bg_purple">
          <img src={project_2_c} alt="budget app" />
        </div>

        <div className="focus_project_details_right">
          <h5>What I’ve learned</h5>
          <p>
            This project helped to enhance my JavaScript knowledge, for example
            DOM manipulation and using ES6+ syntax. I also got plenty of
            practice thinking how to improve the app’s UI and making it more
            user-friendly.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FocusProject1;
