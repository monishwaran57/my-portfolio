import "./Skills.css";

export default function Skills() {
  const skills = [
    "Python",
    "FastAPI",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "EC2",
    "Lambda",
    "S3",
    "API Gateway",
    "Docker",
    "CI/CD",
    "React",
    "Vite",
    "Node.js",
    "Git",
    "Linux",
  ];

  return (
    <div className="skills-wrapper">
      <div className="skills-marquee">
        <div className="skills-track">
          {skills.map((skill, index) => (
            <span key={index} className="skill-item">
              {skill}
            </span>
          ))}

          {/* Duplicate again for infinite loop */}
          {skills.map((skill, index) => (
            <span key={`dup-${index}`} className="skill-item">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
