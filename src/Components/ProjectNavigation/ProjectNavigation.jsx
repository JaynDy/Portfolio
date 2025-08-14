import { Link } from "react-router-dom";
import styles from "./ProjectNavigation.module.css";
import { AppRoutes } from "../../AppRoutes";

export const ProjectNavigation = ({ t, projects, currentId }) => {
  const currentIndex = projects.findIndex((p) => p.id === currentId);
  const prevProject = projects[currentIndex - 1];
  const nextProject = projects[currentIndex + 1];
  const navTitle = t("projectNav.navigation", {
    returnObjects: true,
  });

  return (
    <div className={styles.projectNavConteiner}>
      {prevProject ? (
        <Link to={`${AppRoutes.Projects}/${prevProject.id}`}>
          ← {navTitle[0]}
        </Link>
      ) : (
        <span className={styles.navButtonDisabled}>← </span>
      )}

      {nextProject ? (
        <Link to={`${AppRoutes.Projects}/${nextProject.id}`}>
          {navTitle[1]} →
        </Link>
      ) : (
        <span className={styles.navButtonDisabled}> →</span>
      )}
    </div>
  );
};
