import { userContacts } from "./userContacts";
import styles from "./Contacts.module.css";
import { Icon } from "../Icon/Icon";

export const Contacts = ({ isMenuOpen, isOpenPageContacts }) => {
  const httpsContacts = Object.entries(userContacts).filter(([, value]) =>
    value.startsWith("http")
  );
  const emailContacts = Object.entries(userContacts).filter(([, value]) =>
    value.includes("@")
  );

  return (
    <ul
      className={
        isOpenPageContacts || isMenuOpen
          ? styles.contactsIcons
          : styles.floatingContacts
      }
    >
      {httpsContacts.map(([key, value]) => (
        <li key={key} className={styles.contactItem}>
          <a href={value} target="_blank" rel="noopener noreferrer">
            <Icon
              name={key}
              className={`${styles.imgKey} ${
                key === "telegram" ? styles.telegramIcon : ""
              } ${key === "github" ? styles.githubIcon : ""} ${
                key === "linkedin" ? styles.linkedinIcon : ""
              }`}
            />
          </a>
        </li>
      ))}
      {emailContacts.map(([key, value]) => (
        <li key={key} className={styles.contactItem}>
          <a href={`mailto:${value}`} className={styles.contactLabel}>
            <Icon
              name={key}
              className={`${styles.imgKey} ${
                key === "email" ? styles.emailIcon : ""
              }`}
            />
            {!isMenuOpen && isOpenPageContacts && <span>{value}</span>}
          </a>
        </li>
      ))}
    </ul>
  );
};
