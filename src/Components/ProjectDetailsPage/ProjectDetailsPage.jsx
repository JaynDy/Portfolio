import { useParams } from "react-router-dom";
import { Icon } from "../Icon/Icon";
import styles from "./ProjectDetailsPage.module.css";
import { ProjectNavigation } from "../ProjectNavigation";

export const ProjectDetailsPage = ({ t, projectData, wrapShortWords }) => {
  const { projectId } = useParams();
  const project = projectData.find((p) => p.id === projectId);
  const linkTitle = t("projectDetailsInf.links", {
    returnObjects: true,
  });

  return (
    <>
      <div className={styles.projectDetails}>
        <nav className={styles.progectNav}>
          <ProjectNavigation
            projects={projectData}
            t={t}
            currentId={projectId}
          />
        </nav>

        <h2 className={styles.projectTitle}>{project.title}</h2>

        <p className={styles.projectDescription}>
          {wrapShortWords(project.description, styles.shortWord)}
        </p>

        <div className={styles.technologiesGroup}>
          <h3>Technologies:</h3>
          <ul className={styles.technologiesList}>
            {project.technologies.map((technology, index) => (
              <li key={index} className={styles.technologiesItem}>
                {technology}
              </li>
            ))}
          </ul>
        </div>

        <nav className={styles.projectLinks}>
          <a href={project.website} target="_blank" rel="noopener noreferrer">
            <Icon name="globe" className={styles.globeImg} />
            {linkTitle[0]}
          </a>
          <a href={project.github[0]} target="_blank" rel="noopener noreferrer">
            <Icon name="laptop" className={styles.laptopImg} />
            {linkTitle[1]}
          </a>
        </nav>
      </div>
    </>
  );
};
