import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Semesters from "../pages/Semesters";
import Subjects from "../pages/Subjects";
import SubjectDetailPage from "../pages/SubjectDetailPage";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/semesters" element={<Semesters />} />
      <Route path="/subjects/:semesterId" element={<Subjects />} />
      <Route path="/units/:semesterId/:subjectId" element={<SubjectDetailPage />} />
      <Route path="/units/:semesterId/:subjectId/unit/:unitId" element={<SubjectDetailPage />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
