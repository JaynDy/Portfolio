import styles from "./PageContacts.module.css";
import { Contacts } from "../Contacts";
import { useState } from "react";
import { Icon } from "../Icon/Icon";

export const PageContacts = ({
  t,
  isMenuOpen,
  isSmallScreen,
  isOpenPageContacts,
}) => {
  const placeholders = t("contactInf.placeholders", {
    returnObjects: true,
  });
  const inputErrors = t("contactInf.inputErrors", {
    returnObjects: true,
  });

  const [isSent, setIsSent] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validateField = (e) => {
    const { name, value } = e.target;

    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };

      if (name === "name") {
        if (!value.trim()) newErrors.name = inputErrors[0];
        else delete newErrors.name;
      }

      if (name === "email") {
        if (!value.trim()) newErrors.email = inputErrors[1];
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          newErrors.email = inputErrors[2];
        else delete newErrors.email;
      }

      if (name === "message") {
        if (!value.trim()) newErrors.message = inputErrors[3];
        else delete newErrors.message;
      }

      return newErrors;
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    validateField(e);
  };

  const handleBlur = (e) => {
    validateField(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSent) return;

    emailjs
      .send(
        "service_cgxri2l",
        "template_7i0dxrf",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "Nt9X4L-Zvu_wkf2QU"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("Failed to send message. Try again later.");
          console.error(error);
        }
      );
  };

  return (
    <div className={`${styles.pageContacts} `}>
      {!isMenuOpen && !isSmallScreen && <h1>{t("contactInf.title")}</h1>}

      <div className={styles.postcard}>
        <div className={styles.header}>
          <div className={styles.pattern}>
            <span className={styles.line}></span>
            <Icon name="clover" className={styles.cloverImg} />
            <span className={styles.line}></span>

            <h3>{t("contactInf.postcardTitle")}</h3>
            <span className={styles.line}></span>
            <Icon name="clover" className={styles.cloverImg} />
            <span className={styles.line}></span>
          </div>
        </div>

        <div className={styles.content}>
          <div className={styles.iconArea}>
            <Icon name="sketchbook" className={styles.sketchbookImg} />
          </div>

          <form className={styles.formArea} onSubmit={handleSubmit} noValidate>
            <input
              type="text"
              name="name"
              placeholder={placeholders[0]}
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && <div className={styles.error}>{errors.name}</div>}
            <input
              type="email"
              name="email"
              placeholder={placeholders[1]}
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && <div className={styles.error}>{errors.email}</div>}
            <textarea
              name="message"
              placeholder={placeholders[2]}
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.message && (
              <div className={styles.error}>{errors.message}</div>
            )}
            <div className={styles.buttonWrapper}>
              <button type="submit" disabled={isSent}>
                {t("contactInf.btnName")}
              </button>
            </div>
          </form>
        </div>
      </div>

      <Contacts
        isMenuOpen={isMenuOpen}
        isSmallScreen={isSmallScreen}
        isOpenPageContacts={isOpenPageContacts}
      />
    </div>
  );
};
