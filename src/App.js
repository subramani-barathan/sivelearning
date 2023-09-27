import './App.css';
import Dashboard from './components/Dashboard';
import { Routes, Route } from "react-router-dom";
import Thirukkural from './components/Thirukural/Thirukkural';
import ChapterGroup from './components/Thirukural/ChapterGroup';
import Chapter from './components/Thirukural/Chapter';
import Kural from './components/Thirukural/Kural';
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
        <Route path='/thirukkural/chaptergroup' element={<ChapterGroup />} />
        <Route path='/thirukkural/chaptergroup/chapter' element={<Chapter />} />
        <Route path='/thirukkural/chaptergroup/chapter/kural' element={<Kural />} />
      </Routes>
    </div>)
}

export default App;
