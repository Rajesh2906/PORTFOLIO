import "./Skills.css";

function Skills() {
    const skills = ["Java", "Spring Boot","JavaScript", "React JS","Version Control System (GIT)", "SQL Server", "MongoDB", "Postman", "HTML", "CSS"];
    const displaySkills = skills.map((skill) =><li>{skill}</li>)
    return (
        <div>
            <h1>Skills</h1>
            <ul>{displaySkills}</ul>
        </div>
    );
}

export default Skills;