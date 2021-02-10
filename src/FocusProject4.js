import project_4_a from "./img/projects/project_4_a.png";
import project_4_b from "./img/projects/project_4_b.png";
import project_4_c from "./img/projects/project_4_c.png";

const FocusProject1 = () => {
  return (
    <section className="focus_project">
      <h2>Project</h2>
      <h3>Sliding Forms</h3>

      <div className="focus_project_intro_container">
        <div className="focus_project_intro_text">
          <p>
            These are sign in and sign up forms. I used some sliding effects
            from swup.js to swap between these two forms. You can click the
            "sign in" and "sign up" buttons on the webpages to see how the
            sliding effort works.
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
          <img src={project_4_a} alt="sliding forms" />
        </div>

        <div className="focus_project_details_right">
          <h5>Purpose and Goal</h5>
          <p>
            Through building these forms I gained experience of using swup.js in
            a project. I would like to apply this sort of sliding effect in
            future projects.
          </p>
        </div>
      </div>

      <div className="focus_project_details row_reverse">
        <div className="focus_project_details_left bg_green">
          <img src={project_4_b} alt="sliding forms" />
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
          <img src={project_4_c} alt="sliding forms" />
        </div>

        <div className="focus_project_details_right">
          <h5>What I’ve learned</h5>
          <p>
            I gained a solid knowledge of applying swup.js in this project. It
            also enhances my “transform property” and “transition property”
            knowledge in CSS.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FocusProject1;
