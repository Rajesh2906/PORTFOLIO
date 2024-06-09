import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Header() {
  return (
    <div className="header">
      <a href="/#"><h3>Rajesh Chagantipati</h3></a>
      <div className="profiles">
        <a
          href="https://www.linkedin.com/in/rajesh-ch-5b3341180/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          href="https://github.com/Rajesh2906"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
    </div>
  );
}

export default Header;
