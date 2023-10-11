import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Thirukkural from "./components/Thirukural/Thirukkural";
import ChapterGroup from "./components/Thirukural/ChapterGroup";
import Chapter from "./components/Thirukural/Chapter";
import Kural from "./components/Thirukural/Kural";
import Section from "./components/Thirukural/Section";
import Layout from "./components/template/Layout";
import Dashboard from "./components/Dashboard";
import { BreadcrumbsProvider } from './components/template/breadcrumb/BreadcrumbDetails';
function App() {
  return (
<BreadcrumbsProvider>
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/thirukkural" element={<Thirukkural />}></Route>
          <Route path="/thirukkural/sections" element={<Section />} />
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
        </Route>
      </Routes>
      </BreadcrumbsProvider>
  );
}

export default App;
