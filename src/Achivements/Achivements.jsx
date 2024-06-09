import "./Achivements.css";
import aws from "./AWS-Certified-Cloud-Practitioner_badge.png"

function Achivements() {
  return (
    <div>
      <h1>Achivements</h1>
      <div className="achivements">
        <div className="achivement a1">
          <h4>STAR AWARD</h4>
        </div>
        <div className="achivement a1">
          <h4>AWS Certified Cloud Practitioner</h4>
          <img src={aws} alt="AWS Logo"/>
        </div>
      </div>
    </div>
  );
}

export default Achivements;
