import { Link } from "react-router-dom";
import { projectData } from "./projectData";
import styles from "./ProjectsPage.module.css";
import { AppRoutes } from "../../AppRoutes";

export const ProjectsPage = () => {
  const projects = Object.values(projectData);

  return (
    <div className={styles.projectPage}>
      {/* <h2>My projects</h2> */}
      {projects.map((project, index) => (
        <div key={index} className={styles.projectCard}>
          <Link
            to={`${AppRoutes.Projects}/${project.id}`}
            className={styles.projectLink}
          >
            {project.title}
          </Link>
        </div>
      ))}
    </div>
  );
};

// return (
//   <div className={styles.projectPage}>
//     <div className={styles.projectList}>
//       <article className={styles.projectItems}>
//         {projects.map((project, index) => (
//           <div key={index} className={styles.projectCard}>
//             <h2 className={styles.projectTitle}>{project.title}</h2>

//             <p className={styles.projectDescription}>{project.description}</p>

//             <p className={styles.technologies}>
//               <strong>Technologies:</strong> {project.technologies}
//             </p>

//             <nav className={styles.projectLinks}>
//               <a
//                 href={project.website}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <Icon name="globe" className={styles.globeImg} />
//                 Visit Website
//               </a>
//               <a
//                 href={project.github[0]}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <Icon name="laptop" className={styles.laptopImg} />
//                 GitHub Repository
//               </a>
//             </nav>
//           </div>
//         ))}
//       </article>
//     </div>
//   </div>
// );
