import './App.css';
import Dashboard from './components/Dashboard';
import { Routes, Route } from "react-router-dom";
import Thirukkural from './components/Thirukural/Thirukkural';

function App() {
  return (<>
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/thirukkural" element={<Thirukkural />} />
    </Routes>
  </>
  );
}

export default App;
