import "./App.css";
import Dashboard from "./components/Dashboard";
import { Routes, Route } from "react-router-dom";
import Thirukkural from "./components/Thirukural/Thirukkural";
import { BreadcrumbsItem } from "./components/template/breadcrumb/BreadcrumbDetails";
import ChapterGroup from "./components/Thirukural/ChapterGroup";
import Chapter from "./components/Thirukural/Chapter";
import Kural from "./components/Thirukural/Kural";
import Header from "./components/template/header/Header";
import LeftSidePanel from "./components/template/leftsidepanel/LeftSidePanel";
import Section from "./components/Thirukural/Section";
function App() {
  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        <LeftSidePanel />
        <div className="layout-page">
          <Header />
          <div className="content-wrapper">
            <div className="container-xxl mb-4">
              <BreadcrumbsItem glyph="home" to="/">
                Home
              </BreadcrumbsItem>
              <Routes>
                <Route path="/" element={<Thirukkural />} />
                <Route path="/thirukkural" element={<Thirukkural />}></Route>
                <Route
                  path="/thirukkural/sections"
                  element={<Section />}
                />
                <Route
                  path="/thirukkural/sections/:chgrpid"
                  element={<ChapterGroup />}
                />
                <Route
                  path="/thirukkural/sections/:chgrpid/:chid"
                  element={<Chapter />}
                />
                <Route
                  path="/thirukkural/sections/:chgrpid/:chid/:kuralid"
                  element={<Kural />}
                />
              </Routes>
            </div>
            <div className="content-backdrop fade"></div>
          </div>
        </div>
      </div>
      <div className="layout-overlay layout-menu-toggle"></div>
    </div>
  );
}

export default App;
