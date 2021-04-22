import project_tracker_a from "../img/projects/project_tracker_a.png";
import project_tracker_b from "../img/projects/project_tracker_b.png";
import project_tracker_c from "../img/projects/project_tracker_c.png";

const FocusProjectTracker = () => {
  return (
    <section className="focus_project">
      <h2>Project</h2>
      <h3>Task Tracker App</h3>

      <div className="focus_project_intro_container">
        <div className="focus_project_intro_text">
          <p>
            Life is full of lots of small and big tasks for us to complete
            everyday. With a little bit of help from an easy-to-use task
            tracker, tackling these tasks will be easier. We just have to write
            it down and complete them one by one, then we are on the right track
            in life.
          </p>
          <p>
            In this web application, users have full control. They can add a
            task by providing its name and time / deadline, also if they like
            they can choose a colour from five colour groups to categorise it.
            They can edit and delete the existing tasks, and rearrange a task by
            dragging it to the desired location. By clicking a colour button,
            all the tasks in that specific colour category will be displayed. By
            clicking the time sorting buttons, the tasks will be displayed in
            either chronological or the reverse chronological order.
          </p>
        </div>

        <div className="focus_project_intro_links">
          <a
            href="https://github.com/jasontwuk/React_task-tracker"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fas fa-code"></i>
            view code
          </a>
          <a
            href="https://jasontwuk.github.io/React_task-tracker/"
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
            <li>&#8901; React</li>
            <li>&#8901; HTML5</li>
            <li>&#8901; CSS3</li>
            <li>&#8901; Sass</li>
            <li>&#8901; JavaScript ES6</li>
            <li>&#8901; Git</li>
          </ul>
        </div>

        <div className="focus_project_tech_list">
          <h6>Used resource:</h6>
          <ul>
            <li>&#8901; code packages from npm</li>
          </ul>
        </div>
      </div>

      <div className="focus_project_details">
        <div className="focus_project_details_left bg_green">
          <img src={project_tracker_a} alt="weather forecast app" />
        </div>

        <div className="focus_project_details_right">
          <h5>Purpose and Goal</h5>
          <p>
            The purpose of this project was to apply my React knowledge to build
            a practical web application. Through building this application, my
            aim was to get some solid experience of working with React framework
            and other related technologies.
          </p>
        </div>
      </div>

      <div className="focus_project_details row_reverse">
        <div className="focus_project_details_left bg_green">
          <img src={project_tracker_b} alt="weather forecast app" />
        </div>

        <div className="focus_project_details_right">
          <h5>Challenges and My Approach</h5>
          <p>
            This is the first time I used React to build a web application. I
            applied my React Hooks knowledge along with other tech (e.g. Git
            version control, npm packages and so on) to accomplish it. I added
            some features in this application, for example, slide-in and
            slide-out animation effects, drag and drop function, etc.
          </p>
          <p>
            As in previous projects, I bumped into a few difficulties with this
            one too. I found my solutions for these issues by reading some
            documents, tech articles and code examples. I tried out some codes
            before I could find the right ones that worked for this project.
            With the help of git, I can experiment with any code without
            worrying that I might mess up what I had built.
          </p>
        </div>
      </div>

      <div className="focus_project_details">
        <div className="focus_project_details_left bg_green">
          <img src={project_tracker_c} alt="weather forecast app" />
        </div>

        <div className="focus_project_details_right">
          <h5>What I’ve learned</h5>
          <p>
            I really enjoy doing this project. I experienced that React is a
            very powerful tool, it keeps the project code tidy and super easy to
            maintain. I also used Sass in this project and it worked very well
            with React.
          </p>
          <p>
            It is a blessing that I can utilise some packages on npm, I managed
            to add some sliding effects, date / time picker, unique ids and
            other features in this project. I have built two custom hooks and
            used them along with some React hooks to make this application to
            function the way it should. Furthermore, I have learned how to use
            Local Storage to store data in React, therefore user’s tasks can be
            saved and accessed without a server.
          </p>
          <p>
            To deploy a React project to Github Pages is a smooth process, it
            was so nice to see my project come live online.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FocusProjectTracker;
