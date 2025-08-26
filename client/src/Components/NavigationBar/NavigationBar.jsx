import styles from "./NavigationBar.module.css";
import { Icon } from "../Icon/Icon";
import { useEffect } from "react";
import { language } from "../../i18n";
import { Contacts } from "../Contacts";

export const NavigationBar = ({
  t,
  i18n,
  currentLang,
  isSmallScreen,
  setIsSmallScreen,
  isMenuOpen,
  setIsMenuOpen,
  isLangMenuOpen,
  setIslangMenuOpen,
  activeSection,
  onMenuClick,
  onLanguageSelect,
}) => {
  const menuSections = ["about", "projects", "contacts"];

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

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
    setIslangMenuOpen(false);
  };

  return (
    <>
      <nav className={styles.navigationBar}>
        <div className={styles.navContent}>
          <div className={styles.navBrand}>
            <span className={styles.userName}>{t("user.name")}</span>
          </div>

          <div className={styles.navMenu}>
            {isSmallScreen ? (
              <button
                className={`${styles.hamburgerBtn} ${
                  isMenuOpen ? styles.open : ""
                } `}
                type="button"
                onClick={handleToggleMenu}
              >
                <span></span>
              </button>
            ) : (
              <ul className={`${styles.navList} ${styles.desktop}`}>
                {menuSections.map((section, index) => (
                  <li
                    key={index}
                    onClick={() => onMenuClick(section)}
                    className={`${styles.navItem} ${
                      activeSection === section ? styles.active : ""
                    }`}
                  >
                    {t(`menu.${section}`)}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div
            className={styles.languageMenu}
            onMouseLeave={() => setIslangMenuOpen(false)}
          >
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
            </button>

            {isLangMenuOpen && (
              <ul className={styles.languageDropdown}>
                {language.map(({ code, label, flag }) => (
                  <li
                    key={code}
                    tabIndex={0}
                    onClick={(e) => {
                      onLanguageSelect(e, code);
                    }}
                    className={`${styles.languageOption} ${
                      i18n.language === code ? styles.selected : ""
                    } `}
                  >
                    {isSmallScreen ? <span>{flag}</span> : <span>{label}</span>}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </nav>

      {isSmallScreen && (
        <>
          <div
            className={`${styles.overlay} ${
              isMenuOpen ? styles.showOverlay : ""
            }`}
            onClick={handleCloseMenu}
          />
          <aside
            className={`${styles.sideMenu} ${
              isMenuOpen ? styles.openMenu : ""
            }`}
          >
            <div className={styles.menuConteiner}>
              <button
                className={`${styles.hamburgerBtn} ${
                  isMenuOpen ? styles.open : ""
                } `}
                type="button"
                onClick={handleToggleMenu}
              >
                <span></span>
              </button>
              <ul className={styles.navListMobile}>
                {menuSections.map((section, index) => (
                  <li
                    className={styles.navItemMobile}
                    key={index}
                    onClick={() => {
                      onMenuClick(section);
                      handleCloseMenu();
                    }}
                  >
                    {t(`menu.${section}`)}
                  </li>
                ))}
              </ul>
            </div>

            <Contacts isMenuOpen={isMenuOpen} />
          </aside>
        </>
      )}
    </>
  );
};
