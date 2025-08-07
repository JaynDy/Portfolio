import { Icon } from "../Icon/Icon";
import { projectData } from "../ProjectsPage/projectData";
import styles from "./PageHome.module.css";

export const PageHome = () => {
  const weatherWidget = projectData.weatherWidget;
  const timerApp = projectData.timerApp;
  const calendar = projectData.calendar;

  return (
    <div className={styles.homePage}>
      <div className={styles.projectCard}>
        <div className={styles.projectLinks}>
          <iframe
            src={weatherWidget.website}
            title={weatherWidget.title}
            className={styles.projectIframe}
            loading="lazy"
          />
        </div>
        <div className={styles.projectLinks}>
          <iframe
            src={timerApp.website}
            title={timerApp.title}
            className={styles.projectIframe}
            loading="lazy"
          />
        </div>
        {/* <div className={styles.projectLinks}>
              <iframe
                src={calendar.website}
                title={calendar.title}
                className={styles.projectIframe}
                loading="lazy"
              />
            </div> */}
      </div>
    </div>
  );
};
