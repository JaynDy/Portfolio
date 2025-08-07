import { useParams } from "react-router-dom";
import { Icon } from "../Icon/Icon";
import { projectData } from "../ProjectsPage/projectData";
import styles from "./ProjectDetailsPage.module.css";

export const ProjectDetailsPage = () => {
  const { projectId } = useParams();
  const project = projectData[projectId];

  return (
    <div className={styles.projectDetails}>
      <h2 className={styles.projectTitle}>{project.title}</h2>

      <p className={styles.projectDescription}>{project.description}</p>

      <p className={styles.technologies}>
        <strong>Technologies:</strong> {project.technologies}
      </p>

      <div className={styles.projectApp}>
        <iframe
          src={project.website}
          title={project.title}
          className={styles.projectIframe}
          loading="lazy"
        />
      </div>

      <nav className={styles.projectLinks}>
        <a href={project.website} target="_blank" rel="noopener noreferrer">
          <Icon name="globe" className={styles.globeImg} />
          Visit Website
        </a>
        <a href={project.github[0]} target="_blank" rel="noopener noreferrer">
          <Icon name="laptop" className={styles.laptopImg} />
          GitHub Repository
        </a>
      </nav>
    </div>
  );
};
