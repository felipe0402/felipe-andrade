import {
  DiHtml5,
  DiCss3,
  DiJsBadge, 
  DiReact,
} from "react-icons/di";
import {
  SiCsswizardry
} from "react-icons/si";

import '../style/components/technologiescontainer.sass'

const technologies = [
  { id: "html", name: "HTML5", icon: <DiHtml5 />, description: "Linguagem de marcação" },
  { id: "css", name: "CSS3", icon: <DiCss3 />, description: "Linguagem de estilos" },
  { id: "js", name: "JavaScript", icon: <DiJsBadge />, description: "Linguagem de programação" },
  { id: "react", name: "React", icon: <DiReact />, description: "frameworks" },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <h3>{tech.name}</h3>
            <p>{tech.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default TechnologiesContainer;