import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Breadcrumb from "../components/common/Breadcrumb";
import PreviousPapers from "../components/common/PreviousPapers";
import NotFound from "./NotFound";
import subjectsRegistry from "../data/subjectsRegistry";
import subjectsConfig from "../data/subjectsConfig";
import "./SubjectDetail.css";

function SubjectDetailPage() {
  const { semesterId, subjectId, unitId } = useParams();
  const [openUnit, setOpenUnit] = useState(null);

  const semesterSubjects = subjectsRegistry[semesterId] || [];
  const subject = semesterSubjects.find(s => s.id === subjectId);

  useEffect(() => {
    if (unitId && subject?.units?.some(u => u.id === Number(unitId))) {
      setOpenUnit(Number(unitId));
    } else {
      setOpenUnit(null);
    }
  }, [unitId, subject]);

  if (!subject) return <NotFound />;

  const semesterConfig = subjectsConfig[semesterId];

  const navSubjects = [
    ...(semesterConfig?.subjects || []),
    ...(semesterConfig?.professionalElective1?.subjects || []),
    ...(semesterConfig?.professionalElective2?.subjects || [])
  ];

  const currentIndex = navSubjects.findIndex(s => s.id === subjectId);

  const prevSubject =
    currentIndex > 0 ? navSubjects[currentIndex - 1] : null;

  const nextSubject =
    currentIndex !== -1 && currentIndex < navSubjects.length - 1
      ? navSubjects[currentIndex + 1]
      : null;

  const semesterNumber = semesterId.split("-")[1];

  return (
    <>
      <Header />

      <section className="subject-detail">
        <Breadcrumb semesterId={semesterId} subject={subject} />

        <div className="subject-header">
          <span className="subject-code">{subject.code}</span>
          <h1>{subject.name}</h1>
          <p>OU MCA R24 – Semester {semesterNumber}</p>
        </div>

        <div className="units-section">
          <h2>Unit-wise Syllabus & Notes</h2>

          <div className="units-grid">
            {subject.units.map(unit => (
              <div key={unit.id} className="unit-card">
                <h3>
                  Unit {unit.id}: {unit.title}
                </h3>

                <button
                  className="toggle-btn"
                  onClick={() =>
                    setOpenUnit(openUnit === unit.id ? null : unit.id)
                  }
                >
                  {openUnit === unit.id ? "Hide Concepts" : "View Concepts"}
                </button>

                {openUnit === unit.id && (
                  <ul className="unit-concepts">
                    {unit.concepts.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                )}

                <a href={`/units/${semesterId}/${subjectId}/unit/${unit.id}`}>
                  Share Unit Link
                </a>

                <a href={unit.pdf} target="_blank" rel="noopener noreferrer">
                  Download Unit PDF
                </a>
              </div>
            ))}
          </div>
        </div>

        <PreviousPapers
          subjectCode={subject.code}
          papers={subject.previousPapers}
          prevSubject={prevSubject}
          nextSubject={nextSubject}
        />
      </section>

      <Footer />
    </>
  );
}

export default SubjectDetailPage;
