import "./Projects.css";

function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <div className="projects">
        <a
          className="project p1"
          href="https://rajesh2906.github.io/Depoly_HMS-UI/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>HMS (Hotel Management System)</h3>
          <ul>
            <li>
              Completed end to end case study of Hotel Management System
              Application using micro service architecture with JWT
              authentication, Swagger, Eureka Server, Unit testing, and payment
              gateway in Spring Boot Application.
            </li>
            <li>
              Created UI with React JS with all the working functionalities.
            </li>
          </ul>
        </a>
        <a
          className="project p2"
          href="/#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h3>US Based Restaurant POS Upgradation</h3>
          <ul>
            <li>
              Created the APIs in Spring Boot micro-services for create, read,
              update and delete operations according to the requirements.
            </li>
            <li>
              Worked on React JS to create couple of web pages and integrated
              them with APIs from different micro-services.
            </li>
          </ul>
        </a>
      </div>
    </div>
  );
}

export default Projects;
