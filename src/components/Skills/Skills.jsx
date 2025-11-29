import "./Skills.css";
import pythonIcon from "../../assets/skill-pics/Python.png"
import reactIcon from "../../assets/react.svg"
import awsIcon from "../../assets/skill-pics/AWS.png"
import fastapiIcon from "../../assets/skill-pics/FastAPI.png"
import gitIcon from "../../assets/skill-pics/Git.png"
import gtiHubIcon from "../../assets/skill-pics/GitHub.png"
import jsIcon from "../../assets/skill-pics/JavaScript.png"
import linuxIcon from "../../assets/skill-pics/Linux.png"
import mongoDbIcon from "../../assets/skill-pics/MongoDB.png"
import nginxIcon from "../../assets/skill-pics/NGINX.png"
import pandasIcon from "../../assets/skill-pics/Pandas.png"
import psqlIcon from "../../assets/skill-pics/PostgresSQL.png"
import ubuntuIcon from "../../assets/skill-pics/Ubuntu.png"
import htmlIcon from "../../assets/skill-pics/HTML5.png"
import cssIcon from "../../assets/skill-pics/CSS3.png"
import tailwindIcon from "../../assets/skill-pics/Tailwind CSS.png"

export default function Skills() {
  const skills = [
  { name: "HTML5", image_url: htmlIcon },
  { name: "CSS#", image_url: cssIcon },
  { name: "NGINX", image_url: nginxIcon },
  { name: "AWS", image_url: awsIcon},
  { name: "React", image_url: reactIcon },
  { name: "Linux", image_url: linuxIcon },  // no icon → fallback to text only
  { name: "FastAPI", image_url: fastapiIcon },
  { name: "git", image_url: gitIcon },
  { name: "JavaScript", image_url: jsIcon },
  { name: "Python", image_url: pythonIcon },
  { name: "MongoDB", image_url:  mongoDbIcon },
  { name: "Postgres SQL", image_url: psqlIcon },
  { name: "GitHub", image_url: gtiHubIcon },
  { name: "Ubuntu", image_url: ubuntuIcon },
  { name: "Pandas", image_url: pandasIcon },
  { name: "Tailwind CSS", image_url: tailwindIcon },
];

  return (
    <div className="skills-wrapper">
      <div className="skills-marquee">
        <div className="skills-track">

          {/* Row: show list twice for infinite loop */}
          {skills.concat(skills).map((skill, index) => (
            <div className="skill-card" key={index}>
              
              {/* If image exists → show image + text */}
              {skill.image_url ? (
                <div className="skill-with-image">
                  <img
                    src={skill.image_url}
                    alt={skill.name}
                    className="skill-icon"
                  />
                  <span className="skill-text">{skill.name}</span>
                </div>
              ) : (
                /* If NO image → show text-only pill */
                <span className="skill-text-only">{skill.name}</span>
              )}
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
