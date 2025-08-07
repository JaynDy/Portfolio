import styles from "./NavigationBar.module.css";
import { Icon } from "../Icon/Icon";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { language } from "../../i18n";
import { useNavigate } from "react-router-dom";

export const NavigationBar = ({ isSmallScreen, setIsSmallScreen }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIslangMenuOpen] = useState(false);

  const { t, i18n } = useTranslation();
  const currentLang = language.find((lang) => lang.code === i18n.language);
  // const menuSections = ["home", "about", "projects", "contacts"];
  const menuSections = ["about", "projects", "contacts"];

  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.matchMedia("(max-width: 900px)").matches);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    setIslangMenuOpen(false);
  };

  const handleMenuClick = (section) => {
    setIsMenuOpen((prev) => !prev);
    // navigate(section === "home" ? "/" : `/${section}`);
    navigate(section === "about" ? "/" : `/${section}`);
  };

  const handleLanguageSelect = (e, code) => {
    e.stopPropagation();
    i18n.changeLanguage(code);
    localStorage.setItem("language", code);
    setIslangMenuOpen((prev) => !prev);
  };

  return (
    <>
      <nav className={styles.navigationBar}>
        <div className={styles.navContent}>
          <div className={styles.navBrand}>
            <span className={styles.userName}>{t("user.name")}</span>
          </div>

          <div className={styles.navMenu}>
            {isSmallScreen && (
              <button
                className={`${styles.hamburgerBtn} ${
                  isMenuOpen ? styles.open : ""
                } `}
                type="button"
                onClick={handleToggleMenu}
              >
                <span></span>
              </button>
            )}
            {(isMenuOpen || !isSmallScreen) && (
              <ul
                className={`${styles.navList} ${
                  isSmallScreen ? styles.mobile : styles.desktop
                }`}
              >
                {menuSections.map((section, index) => (
                  <li
                    className={styles.navItem}
                    key={index}
                    onClick={() => handleMenuClick(section)}
                  >
                    {t(`menu.${section}`)}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className={styles.languageMenu}>
            <button
              className={styles.languageToggleBtn}
              type="button"
              onClick={() => {
                setIslangMenuOpen((prev) => !prev);
              }}
            >
              <Icon name="globe" className={styles.globeImg} />

              {isSmallScreen ? (
                <span>{currentLang?.flag}</span>
              ) : (
                <span>{currentLang?.label}</span>
              )}
              <Icon
                name="arrow"
                className={`${styles.arrowImg} ${
                  isLangMenuOpen ? styles.up : ""
                }`}
              />
              {isLangMenuOpen && (
                <ul className={styles.languageDropdown}>
                  {language.map(({ code, label, flag }) => (
                    <li
                      key={code}
                      onClick={(e) => handleLanguageSelect(e, code)}
                      className={`${styles.languageOption} ${
                        i18n.language === code ? styles.selected : ""
                      } `}
                    >
                      {isSmallScreen ? (
                        <span>{flag}</span>
                      ) : (
                        <span>{label}</span>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};
