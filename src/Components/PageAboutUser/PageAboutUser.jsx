import { aboutUserInf } from "./aboutUserInf";
import styles from "./PageAboutUser.module.css";

export const PageAboutUser = () => {
  return (
    <div className={styles.aboutUserPage}>
      <h1>Информация обо мне</h1>
      <section className={styles.descriptionSection}>
        {aboutUserInf.description.map((paragraf, index) => (
          <p key={index} className={styles.userDescription}>
            {paragraf}
          </p>
        ))}
      </section>

      <section className={styles.skillsSection}>
        <h2 className={styles.skillsTitle}>
          Во время обучения применяла следующие технологии:
        </h2>

        <div className={styles.skillsGroup}>
          <h3>Фреймворки и библиотеки</h3>
          <ul className={styles.skillsList}>
            {aboutUserInf.skills.frameworks.map((skill, index) => (
              <li key={index} className={styles.skillsItem}>
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.skillsGroup}>
          <h3>Сборщики</h3>
          <ul className={styles.skillsList}>
            {aboutUserInf.skills.builders.map((skill, index) => (
              <li key={index} className={styles.skillsItem}>
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.skillsGroup}>
          <h3>Язык программирования</h3>
          <ul className={styles.skillsList}>
            {aboutUserInf.skills.programLang.map((skill, index) => (
              <li key={index} className={styles.skillsItem}>
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.skillsGroup}>
          <h3>Стилизация</h3>
          <ul className={styles.skillsList}>
            {aboutUserInf.skills.styles.map((skill, index) => (
              <li key={index} className={styles.skillsItem}>
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.skillsGroup}>
          <h3>Аутентификация и хостинг</h3>
          <ul className={styles.skillsList}>
            {aboutUserInf.skills.authHosting.map((skill, index) => (
              <li key={index} className={styles.skillsItem}>
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.skillsGroup}>
          <h3>Дополнительные технологии</h3>
          <ul className={styles.skillsList}>
            {aboutUserInf.skills.addSkills.map((skill, index) => (
              <li key={index} className={styles.skillsItem}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.experienceSection}>
        <h2 className={styles.experienceTitle}>Мой опыт включает:</h2>
        <ul className={styles.experienceList}>
          {aboutUserInf?.experience?.map((experience, index) => (
            <li key={index} className={styles.experienceItem}>
              {experience}
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.additionalInfoSection}>
        <p className={styles.userTarget}>{aboutUserInf.target}</p>
        <p className={styles.userAddInfo}>{aboutUserInf.addInfo}</p>
      </section>
    </div>
  );
};
