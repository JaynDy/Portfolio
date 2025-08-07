import { useState } from "react";
import "./App.css";
// import { MainField } from "./Components/MainField";
import { NavigationBar } from "./Components/NavigationBar";
import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import { ProjectsPage } from "./Components/ProjectsPage";
import { PageAboutUser } from "./Components/PageAboutUser";
import { PageContacts } from "./Components/PageContacts";
import { PageHome } from "./Components/PageHome";
import { ProjectDetailsPage } from "./Components/ProjectDetailsPage";

function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(
    window.matchMedia("(max-width: 900px)").matches
  );

  return (
    <>
      <div className="container">
        <div className="headContainer">
          <NavigationBar
            isSmallScreen={isSmallScreen}
            setIsSmallScreen={setIsSmallScreen}
          />

          <div className="menuList"></div>
        </div>

        <div className="mainContentWrapper">
          <Routes>
            {/* <Route path={AppRoutes.Home} element={<PageHome />} /> */}
            <Route path={AppRoutes.About} element={<PageAboutUser />} />
            <Route path={AppRoutes.Projects} element={<ProjectsPage />} />
            <Route path={AppRoutes.Contacts} element={<PageContacts />} />
            <Route
              path={`${AppRoutes.Projects}/:projectId`}
              element={<ProjectDetailsPage />}
            />
          </Routes>
        </div>

        <div className="footer"></div>
      </div>
    </>
  );
}

export default App;
