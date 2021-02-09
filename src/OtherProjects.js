import { Link } from "react-router-dom";

const OtherProjects = ({ projects, id }) => {
  // *** filter out rest of the projects
  const restProjects = projects.filter(
    (project) => project.id !== parseInt(id)
  );

  return (
    <section className="other_projects">
      <h3>Other Projects</h3>

      <div className="project_list">
        {restProjects.map((project) => (
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

export default OtherProjects;
