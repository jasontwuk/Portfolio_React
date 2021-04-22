import project_3_a from "../img/projects/project_3_a.png";
import project_3_b from "../img/projects/project_3_b.png";
import project_3_c from "../img/projects/project_3_c.png";

const FocusProject1 = () => {
  return (
    <section className="focus_project">
      <h2>Project</h2>
      <h3>Slideshow</h3>

      <div className="focus_project_intro_container">
        <div className="focus_project_intro_text">
          <p>
            When I was a web designer years ago, I implemented other people’s
            slideshows into my projects because it can be a great feature of a
            website. Due to this I was very keen to learn how to build one, now
            I can.
          </p>
          <p>
            This responsive slideshow / carousel will auto start running when
            the web page is loaded. When the user's mouse hovers over the slide
            area or the control dots, the slideshow will pause. When the user's
            mouse leaves the slide area or control dots, the slideshow will
            start running again.
          </p>
        </div>

        <div className="focus_project_intro_links">
          <a
            href="https://github.com/jasontwuk/JavaScript-Project_Slideshow"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fas fa-code"></i>
            view code
          </a>
          <a
            href="https://jasontwuk.github.io/JavaScript-Project_Slideshow/"
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
            <li>&#8901; Unsplash</li>
          </ul>
        </div>
      </div>

      <div className="focus_project_details">
        <div className="focus_project_details_left bg_pink">
          <img src={project_3_a} alt="slideshow" />
        </div>

        <div className="focus_project_details_right">
          <h5>Purpose and Goal</h5>
          <p>
            The purpose of this project was to build a slideshow for people who
            don't have much JavaScript knowledge. I used JavaScript to make it
            easy for them to apply it into their websites.
          </p>
        </div>
      </div>

      <div className="focus_project_details row_reverse">
        <div className="focus_project_details_left bg_pink">
          <img src={project_3_b} alt="slideshow" />
        </div>

        <div className="focus_project_details_right">
          <h5>Challenges and My Approach</h5>
          <p>
            To put slides and control buttons into the intended positions was a
            tricky task. Slides’ position values were set to “absolute”, so its
            container's height was zero. Due to this, all the control buttons
            can't be vertically aligned properly. To fix this issue, I added a
            placeholder element with the first slide image in it.
          </p>
          <p>
            For smaller devices, I provided smaller images (reduce images’s
            width) to make the slideshow displays better in them.
          </p>
        </div>
      </div>

      <div className="focus_project_details">
        <div className="focus_project_details_left bg_pink">
          <img src={project_3_c} alt="slideshow" />
        </div>

        <div className="focus_project_details_right">
          <h5>What I’ve learned</h5>
          <p>
            I had good practice using JavaScript and ES6 in this project. I
            learned how to solve element align issues when items’ position value
            is set to “absolute”. I also gained a solid knowledge of making this
            project responsive.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FocusProject1;
