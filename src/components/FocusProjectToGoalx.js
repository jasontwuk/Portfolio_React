import project_togoalx_a from "../img/projects/project_togoalx_a.png";
import project_togoalx_b from "../img/projects/project_togoalx_b.png";
import project_togoalx_c from "../img/projects/project_togoalx_c.png";

const FocusProjectToGoalx = () => {
  return (
    <section className="focus_project">
      <h2>Project</h2>
      <h3>ToGoalx App</h3>

      <div className="focus_project_intro_container">
        <div className="focus_project_intro_text">
          <p>
            ToGoalx is an easy-to-use web application designed to help users manage their personal goals with precision and clarity. By providing an intuitive interface and dashboard, ToGoalx makes it easy for users to set, track, and achieve their objectives. 
          </p>
          <p>
            The web app's dashboard offers users an at-a-glance overview of their ongoing progress, helping them stay motivated and focused on what matters most. It's built with ease of use in mind, making it a great tool for anyone looking to take control of their personal development.
          </p>
        </div>

        <div className="focus_project_intro_links">
          <a
            href="https://github.com/jasontwuk/togoalx"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fas fa-code"></i>
            view code
          </a>
          <a
            href="https://togoalx.netlify.app/"
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
            <li>&#8901; Next.js</li>
            <li>&#8901; React</li>
            <li>&#8901; TypeScript</li>
            <li>&#8901; JavaScript ES6</li>
            <li>&#8901; HTML5</li>
            <li>&#8901; Tailwindcss</li>
            <li>&#8901; Firebase</li>
            <li>&#8901; Netlify</li>
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
        <div className="focus_project_details_left bg_pink">
          <img src={project_togoalx_a} alt="weather forecast app" className="dropshadow" />
        </div>

        <div className="focus_project_details_right">
          <h5>Purpose and Goal</h5>
          <p>
            The purpose of ToGoalx was to apply my knowledge of Next.js, TypeScript, Firebase and other front-end technologies, such as React.js, to build a practical, real-world web application. My goal in building this project was not only to create a functional app that simplifies goal management but also to gain hands-on experience with these technologies.
          </p>          
        </div>
      </div>

      <div className="focus_project_details row_reverse">
        <div className="focus_project_details_left bg_pink">
          <img src={project_togoalx_b} alt="weather forecast app" className="dropshadow"/>
        </div>

        <div className="focus_project_details_right">
          <h5>Challenges and My Approach</h5>
          
          <ul>
            <li>
              Real-time Updates and Interactivity: The need for real-time updates across the dashboard meant ensuring efficient backend communication without lag. I leveraged modern frontend frameworks and asynchronous processing to ensure a smooth and intuitive user experience.
            </li>
            <li>
              Tracking Goal Progress: Accurately tracking progress across multiple goals requires a robust system. To ensure clarity, I built a progress tracker that tracks completion rates of different goals in real-time.
            </li>
            <li>
              Creating an Intuitive User Interface: Designing an interface that balances simplicity with powerful features was a challenge. To solve this, I focused on minimalistic design principles, ensuring that users could easily navigate between goal-setting, tracking, and reviewing progress without feeling lost or overwhelmed.
            </li>
          </ul>
        </div>
      </div>

      <div className="focus_project_details">
        <div className="focus_project_details_left bg_pink">
          <img src={project_togoalx_c} alt="weather forecast app" className="dropshadow" />
        </div>

        <div className="focus_project_details_right">
          <h5>What I’ve learned</h5>

          <ul>
            <li>Deepened my understanding of Next.js, effectively utilizing its server-side rendering and dynamic routing to enhance performance and user experience.</li>
            <li>Strengthened my proficiency in TypeScript by implementing strict typing and ensuring robust, maintainable code.</li>
            <li>Mastered the integration of Firebase, using it to handle real-time data synchronization, user authentication, and secure data storage.</li>
            <li>Developed a responsive, interactive UI that delivers a seamless user experience, applying modern development practices throughout.</li>
          </ul>

          <p>This project allowed me to successfully apply my technical knowledge in a real-world context, achieving my goal of building a scalable and user-friendly application while enhancing my skills in Next.js and related technologies.</p>
        </div>
      </div>
    </section>
  );
};

export default FocusProjectToGoalx;
