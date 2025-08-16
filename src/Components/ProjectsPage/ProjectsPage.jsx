import { Link } from "react-router-dom";
import styles from "./ProjectsPage.module.css";
import { AppRoutes } from "../../AppRoutes";

export const ProjectsPage = ({ t, projectData, setActiveSection }) => {
  return (
    <div className={styles.projectPage}>
      <div className={styles.projectList}>
        <h1>{t("projectPageInf.titles")}</h1>

        {projectData.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <Link
              to={`${AppRoutes.Projects}/${project.id}`}
              className={styles.projectLink}
              onClick={() => setActiveSection(null)}
            >
              {project.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
