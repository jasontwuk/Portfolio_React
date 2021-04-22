import { Link } from "react-router-dom";

const Projects = ({ projects }) => {
  return (
    <section className="projects">
      <h3>Things I've Built</h3>

      <div className="project_list">
        {projects.map((project) => (
          <div className="project" key={project.id}>
            <Link to={project.link}>
              <div className={`project_image ${project.class}`}>
                <img src={project.img} alt={project.title} />
              </div>
              <h4>{project.title}</h4>
              <p>{project.text}</p>
              <div className="underline_container">
                <span className="underline">
                  View Project <em>›</em>
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
