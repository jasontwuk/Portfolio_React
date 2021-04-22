import project_forms_a from "../img/projects/project_forms_a.png";
import project_forms_b from "../img/projects/project_forms_b.png";
import project_forms_c from "../img/projects/project_forms_c.png";

const FocusProjectForms = () => {
  return (
    <section className="focus_project">
      <h2>Project</h2>
      <h3>Sliding Forms</h3>

      <div className="focus_project_intro_container">
        <div className="focus_project_intro_text">
          <p>
            Sign in and sign up forms are essential for some websites, therefore
            making them easy to use is an important task. I was thinking it
            would be even better if I could make them more interesting. That’s
            why I decided to add some sliding effects to them.
          </p>
          <p>
            These sliding effects come from swup.js. You can click the "sign in"
            and "sign up" buttons on the webpages to see how the sliding effects
            work. The magic happens when the browser swaps these two web pages.
          </p>
        </div>

        <div className="focus_project_intro_links">
          <a
            href="https://github.com/jasontwuk/Sliding-Sign-In-and-Sign-Up-Forms"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fas fa-code"></i>
            view code
          </a>
          <a
            href="https://jasontwuk.github.io/Sliding-Sign-In-and-Sign-Up-Forms/"
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
            <li>&#8901; swup.js</li>
          </ul>
        </div>

        <div className="focus_project_tech_list">
          <h6>Used resource:</h6>
          <ul>
            <li>&#8901; unDraw</li>
          </ul>
        </div>
      </div>

      <div className="focus_project_details">
        <div className="focus_project_details_left bg_green">
          <img src={project_forms_a} alt="sliding forms" />
        </div>

        <div className="focus_project_details_right">
          <h5>Purpose and Goal</h5>
          <p>
            By applying some sliding effects in this project, I believe it
            becomes more interesting as well as providing a better user
            experience. Through building these forms I wanted to gain experience
            of using swup.js in the project. I would like to apply this type of
            sliding effect in future projects.
          </p>
        </div>
      </div>

      <div className="focus_project_details row_reverse">
        <div className="focus_project_details_left bg_green">
          <img src={project_forms_b} alt="sliding forms" />
        </div>

        <div className="focus_project_details_right">
          <h5>Challenges and My Approach</h5>
          <p>
            In these forms, I used shapes and images as their backgrounds. It
            required a lot of small adjustments in CSS to achieve the desired
            effect and to place elements in their desired positions. These forms
            are responsive, so I did similar tuning for smaller screen scenarios
            too.
          </p>
        </div>
      </div>

      <div className="focus_project_details">
        <div className="focus_project_details_left bg_green">
          <img src={project_forms_c} alt="sliding forms" />
        </div>

        <div className="focus_project_details_right">
          <h5>What I’ve learned</h5>
          <p>
            I gained a solid knowledge of applying swup.js in this project. It
            also enhances my “transform property” and “transition property”
            knowledge in CSS. Furthermore, I have a better understanding of how
            to plan a user’s journey in this situation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FocusProjectForms;
