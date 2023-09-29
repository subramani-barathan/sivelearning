import './App.css';
import Dashboard from './components/Dashboard';
import { Routes, Route } from "react-router-dom";
import Thirukkural from './components/Thirukural/Thirukkural';
import Section from './components/Thirukural/Section';
import { BreadcrumbsItem } from './components/template/breadcrumb/BreadcrumbDetails';

function App() {
  return (
    <div>
      <BreadcrumbsItem glyph='home' to='/'>
        Home
      </BreadcrumbsItem>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/thirukkural' element={<Thirukkural />} />
        <Route path='/thirukkural/sections' element={<Section />} />
      </Routes>
    </div>)
}

export default App;
