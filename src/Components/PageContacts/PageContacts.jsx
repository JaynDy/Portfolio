import { userContacts } from "./userContacts";
import styles from "./PageContacts.module.css";
import { Icon } from "../Icon/Icon";

export const PageContacts = () => {
  return (
    <div className={styles.pageContacts}>
      <h2>Contact Information</h2>
      <ul>
        {Object.entries(userContacts).map(([key, value], x) => (
          <li key={key} className={styles.contactItem}>
            {/* <span className={styles.contactLabel}>{key}:</span>{" "} */}
            <span className={styles.contactLabel}>
              <Icon name={key} className={styles.imgKey} />
            </span>{" "}
            {value.startsWith("http") ? (
              <a href={value} target="_blank" rel="noopener noreferrer">
                {value}
              </a>
            ) : (
              <span>{value}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
