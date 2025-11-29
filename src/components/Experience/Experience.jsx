import "./Experience.css";
import { experiences } from "./experienceData";
import DropletRain from "./DropletRain";

export default function Experience() {
  return (
    <section className="experience-wrapper" id="experience">

        <DropletRain />

      <h2 className="experience-title">Work Experience</h2>

      <div className="experience-timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-card">

            {/* Left Line & Dot */}
            <div className="experience-line-container">
              <div className="experience-line" />
              <div className="experience-dot" />
            </div>

            {/* Content */}
            <div className="experience-content">

              {/* Company Image */}
              <img src={exp.image} alt={exp.company} className="experience-image" />

              {/* Role + Company */}
              <h3 className="experience-role">{exp.role}</h3>
              <p className="experience-company">{exp.company} — {exp.location}</p>
              <p className="experience-period">{exp.period}</p>

              {/* Tasks */}
              <ul className="experience-tasks">
                {exp.tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
