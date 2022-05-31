import { Routes, Route } from "react-router-dom";
import Menu from "../Components/Menu";
import HomePage from "../Components/Pages/HomePage";
import DriftPage from "../Components/Pages/DriftPage";
import TimeAttackPage from "../Components/Pages/TimeAttackPage";
import ForzaPage from "../Components/Pages/ForzaPage";

export default function App() {
  return (
    <>
      <Menu />
      <div className="page">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/drift" element={<DriftPage />} />
          <Route path="/timeattack" element={<TimeAttackPage />} />
          <Route path="/forza" element={<ForzaPage />} />
        </Routes>
      </div>
    </>
  );
}
