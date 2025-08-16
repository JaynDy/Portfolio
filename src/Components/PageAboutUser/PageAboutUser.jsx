import { Link } from "react-router-dom";
import styles from "./PageAboutUser.module.css";
import { AppRoutes } from "../../AppRoutes";
import { Trans } from "react-i18next";

export const PageAboutUser = ({ t, wrapShortWords }) => {
  const sectionTitles = t("aboutUserInf.sectionTitles", {
    returnObjects: true,
  });
  const descriptionAboutUser = t("aboutUserInf.description", {
    returnObjects: true,
  });
  const skills = t("aboutUserInf.skills", {
    returnObjects: true,
  });
  const experience = t("aboutUserInf.experience", {
    returnObjects: true,
  });

  return (
    <div className={styles.aboutUserPage}>
      <h1>{sectionTitles[0]}</h1>
      <section className={styles.descriptionSection}>
        {descriptionAboutUser.map((paragraf, index) => (
          <p key={index} className={styles.userDescription}>
            {wrapShortWords(paragraf, styles.shortWord)}
          </p>
        ))}
      </section>

      <section className={styles.skillsSection}>
        <h2 className={styles.skillsTitle}>{sectionTitles[1]}</h2>

        <div className={styles.skillsGroup}>
          <h3>{sectionTitles[2]}</h3>
          <ul className={styles.skillsList}>
            {skills.frameworks.map((skill, index) => (
              <li key={index} className={styles.skillsItem}>
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.skillsGroup}>
          <h3>{sectionTitles[3]}</h3>
          <ul className={styles.skillsList}>
            {skills.builders.map((skill, index) => (
              <li key={index} className={styles.skillsItem}>
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.skillsGroup}>
          <h3>{sectionTitles[4]}</h3>
          <ul className={styles.skillsList}>
            {skills.programLang.map((skill, index) => (
              <li key={index} className={styles.skillsItem}>
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.skillsGroup}>
          <h3>{sectionTitles[5]}</h3>
          <ul className={styles.skillsList}>
            {skills.styles.map((skill, index) => (
              <li key={index} className={styles.skillsItem}>
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.skillsGroup}>
          <h3>{sectionTitles[6]}</h3>
          <ul className={styles.skillsList}>
            {skills.authHosting.map((skill, index) => (
              <li key={index} className={styles.skillsItem}>
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.skillsGroup}>
          <h3>{sectionTitles[7]}</h3>
          <ul className={styles.skillsList}>
            {skills.addSkills.map((skill, index) => (
              <li key={index} className={styles.skillsItem}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.experienceSection}>
        <h2 className={styles.experienceTitle}>{sectionTitles[8]}</h2>
        <ul className={styles.experienceList}>
          {experience.map((experience, index) => (
            <li key={index} className={styles.experienceItem}>
              {wrapShortWords(experience, styles.shortWord)}
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.additionalInfoSection}>
        <p className={styles.userTarget}>
          {wrapShortWords(t("aboutUserInf.target"), styles.shortWord)}
        </p>

        <p className={styles.userAddInfo}>
          {wrapShortWords(
            <Trans
              i18nKey="aboutUserInf.addInfo"
              components={{
                projectLink: (
                  <Link
                    to={AppRoutes.Projects}
                    className={styles.projectsLink}
                    onClick={() => setActiveSection?.("Projects")}
                  />
                ),
              }}
            />,
            styles.shortWord
          )}
        </p>
      </section>
    </div>
  );
};
