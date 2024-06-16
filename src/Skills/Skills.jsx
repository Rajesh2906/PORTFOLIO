import "./Skills.css";
import java from "./Images/java.svg";
import springBoot from "./Images/spring-boot.png";
import javaScript from "./Images/javaScript.png";
import reactJs from "./Images/reactJs.png";
import git from "./Images/git.png";
import sqlServer from "./Images/sqlServer.svg";
import mongoDb from "./Images/mongoDb.png";
import postMan from "./Images/postMan.png";
import html from "./Images/html.png";
import css from "./Images/css.png";

function Skills() {
  const skills = [
    { key: 1, skill: "Java", image: java },
    { key: 2, skill: "Spring Boot", image: springBoot },
    { key: 3, skill: "JavaScript", image: javaScript },
    { key: 4, skill: "React JS", image: reactJs },
    { key: 5, skill: "Version Control System (GIT)", image: git },
    { key: 6, skill: "SQL Server", image: sqlServer },
    { key: 7, skill: "MongoDB", image: mongoDb },
    { key: 8, skill: "Postman", image: postMan },
    { key: 9, skill: "HTML", image: html },
    { key: 10, skill: "CSS", image: css },
  ];
  const displaySkills = skills.map(({ key, skill, image }) => 
    (
    <li key={key}>
      <img src={image} alt={skill} className="skill-image" />
    </li>
  ));
  return (
    <div className="skills">
      <h1>My Skills</h1>
      <ul>{displaySkills}</ul>
    </div>
  );
}

export default Skills;