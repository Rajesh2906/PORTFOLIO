import "./Discription.css";
import pic from  "./LInP.png";

function Discription(params) {
  return (
    <div className="discription">
        <img src={pic} alt="profile" />
    <div>
      <p>Welcome to the site!</p>
      <p>
        I am a Full Stack Web Developer with two years of expereince and  adept at Spring Boot, JWT, Swagger, Eureka, and
        React.js. Meticulous planner, deadline-driven, and enthusiastic about
        team collaboration. Eager to learn and implement new technologies.
      </p>
      </div>
    </div>
  );
}

export default Discription;
