import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Breadcrumb from "../components/common/Breadcrumb";
import NotFound from "./NotFound";
import subjectsConfig from "../data/subjectsConfig";
import "./Subjects.css";

function Subjects() {
  const { semesterId } = useParams();
  const semester = subjectsConfig[semesterId];

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  if (!semester) return <NotFound />;

  const collectSubjects = () => [
    ...(semester.subjects || []),
    ...(semester.professionalElective1?.subjects || []),
    ...(semester.professionalElective2?.subjects || []),
    ...(semester.professionalElective4?.subjects || []),
    ...(semester.openElective?.subjects || [])
  ];

  const filteredSubjects = collectSubjects().filter(sub => {
    const match =
      sub.name.toLowerCase().includes(search.toLowerCase()) ||
      sub.code.toLowerCase().includes(search.toLowerCase());

    if (filter === "core") return sub.code.startsWith("PCC") && match;
    if (filter === "elective")
      return (sub.code.startsWith("PEC") || sub.code.startsWith("OE")) && match;

    return match;
  });

  const renderSection = (title, subjects, type = "") => {
    const visible = subjects.filter(s =>
      filteredSubjects.some(f => f.id === s.id)
    );

    if (!visible.length) return null;

    return (
      <>
        <h2>{title}</h2>
        <div className="subjects-grid">
          {visible.map(subject => (
            <Link
              key={subject.id}
              to={subject.path}
              className={`subject-card ${type}`}
            >
              <span className="subject-code">{subject.code}</span>
              <h3>{subject.name}</h3>
            </Link>
          ))}
        </div>
      </>
    );
  };

  return (
    <>
      <Header />

      <section className="subjects-page">
        <Breadcrumb semesterId={semesterId} />

        <div className="semester-header">
          <h1>{semester.title} Subjects</h1>
          <p>{semester.progress}</p>
        </div>

        <div className="subjects-controls">
          <input
            type="text"
            placeholder="Search by subject name or code"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />

          <select value={filter} onChange={e => setFilter(e.target.value)}>
            <option value="all">All Subjects</option>
            <option value="core">Core Subjects</option>
            <option value="elective">Electives</option>
          </select>
        </div>

        {semester.subjects &&
          renderSection("Core Subjects", semester.subjects)}

        {semester.professionalElective1 &&
          renderSection(
            semester.professionalElective1.title,
            semester.professionalElective1.subjects,
            "elective"
          )}

        {semester.professionalElective2 &&
          renderSection(
            semester.professionalElective2.title,
            semester.professionalElective2.subjects,
            "elective"
          )}

        {semester.professionalElective4 &&
          renderSection(
            semester.professionalElective4.title,
            semester.professionalElective4.subjects,
            "elective"
          )}

        {semester.openElective &&
          renderSection(
            semester.openElective.title,
            semester.openElective.subjects,
            "elective"
          )}
          {filteredSubjects.length === 0 && (
  <p className="no-results">
    No subjects found. Try a different keyword.
  </p>
)}

      </section>

      <Footer />
    </>
  );
}

export default Subjects;
