import { useEffect, useState } from "react";
import "./App.css";
import { NavigationBar } from "./Components/NavigationBar";
import { Route, Routes, useNavigate } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import { ProjectsPage } from "./Components/ProjectsPage";
import { PageAboutUser } from "./Components/PageAboutUser";
import { PageContacts } from "./Components/PageContacts";
import { ProjectDetailsPage } from "./Components/ProjectDetailsPage";
import { Contacts } from "./Components/Contacts";
import { language } from "./i18n";
import { useTranslation } from "react-i18next";

function App() {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const currentLang = language.find((lang) => lang.code === i18n.language);
  const projectData = Object.values(
    t("projectData", {
      returnObjects: true,
    })
  );

  const [isSmallScreen, setIsSmallScreen] = useState(
    window.matchMedia("(max-width: 900px)").matches
  );
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangMenuOpen, setIslangMenuOpen] = useState(false);
  const [isOpenPageContacts, setIsOpenPageContacts] = useState(false);
  const [activeSection, setActiveSection] = useState(() => {
    localStorage.getItem("activeSection") || null;
  });

  useEffect(() => {
    const savedSection = localStorage.getItem("activeSection");

    if (savedSection) {
      setActiveSection(savedSection);
      setIsOpenPageContacts(savedSection === "contacts");
    }
    console.log("isOpenPageContacts", isOpenPageContacts);
  }, []);

  useEffect(() => {
    const savedLang = localStorage.getItem("language");

    if (savedLang && savedLang !== i18n.language) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  const handleMenuClick = (section) => {
    if (activeSection === section) {
      return;
    }

    setActiveSection(section);
    localStorage.setItem("activeSection", section);

    if (!isSmallScreen) {
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(true);
    }
    navigate(section === "about" ? "/" : `/${section}`);
    setIsOpenPageContacts(section === "contacts");
  };

  const handleLanguageSelect = (e, code) => {
    e.stopPropagation();
    i18n.changeLanguage(code);
    localStorage.setItem("language", code);
    setIslangMenuOpen((prev) => !prev);
  };

  const wrapShortWords = (text, className) => {
    return text.split(" ").map((word, i) =>
      word.length <= 3 ? (
        <span key={i} className={className}>
          {word}{" "}
        </span>
      ) : (
        word + " "
      )
    );
  };

  return (
    <>
      <div className="container">
        <div className="headContainer">
          <NavigationBar
            t={t}
            i18n={i18n}
            currentLang={currentLang}
            isSmallScreen={isSmallScreen}
            setIsSmallScreen={setIsSmallScreen}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
            isLangMenuOpen={isLangMenuOpen}
            setIslangMenuOpen={setIslangMenuOpen}
            isOpenPageContacts={isOpenPageContacts}
            setIsOpenPageContacts={setIsOpenPageContacts}
            activeSection={activeSection}
            setActiveSection={setActiveSection}
            onMenuClick={handleMenuClick}
            onLanguageSelect={handleLanguageSelect}
          />

          <div className="middleBlock"></div>
        </div>

        <div className="mainContentContainer">
          <Routes>
            <Route
              path={AppRoutes.About}
              element={<PageAboutUser t={t} wrapShortWords={wrapShortWords} />}
            />
            <Route
              path={AppRoutes.Projects}
              element={
                <ProjectsPage
                  t={t}
                  projectData={projectData}
                  setActiveSection={setActiveSection}
                />
              }
            />
            <Route
              path={AppRoutes.Contacts}
              element={
                <PageContacts
                  t={t}
                  isMenuOpen={isMenuOpen}
                  isOpenPageContacts={isOpenPageContacts}
                  setIsOpenPageContacts={setIsOpenPageContacts}
                />
              }
            />
            <Route
              path={`${AppRoutes.Projects}/:projectId`}
              element={
                <ProjectDetailsPage
                  t={t}
                  projectData={projectData}
                  wrapShortWords={wrapShortWords}
                />
              }
            />
          </Routes>
        </div>

        {!isOpenPageContacts && (
          <div className="floatingFooter">
            <Contacts
              t={t}
              isMenuOpen={isMenuOpen}
              isSmallScreen={isSmallScreen}
              isOpenPageContacts={isOpenPageContacts}
              setIsOpenPageContacts={setIsOpenPageContacts}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
