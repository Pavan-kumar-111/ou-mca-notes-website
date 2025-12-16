import { Link } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Breadcrumb from "../components/common/Breadcrumb";
import "./Semesters.css";

function Semesters() {
  const semesters = [
    { id: 1, title: "Semester I", subtitle: "Foundations of Computer Science" },
    { id: 2, title: "Semester II", subtitle: "Systems, Data & Machine Learning" },
    { id: 3, title: "Semester III", subtitle: "Software, Networks & Electives" },
    { id: 4, title: "Semester IV", subtitle: "Advanced Electives & Major Project" }
  ];

  return (
    <>
      <Header />

      <section className="semesters-page">
        <Breadcrumb />

        <h1>OU MCA (CBCS) Semesters</h1>
        <p className="semesters-desc">
          Select your semester as per OU syllabus to access subjects,
          unit-wise notes and PDFs.
        </p>

        <div className="semester-grid">
          {semesters.map(sem => (
            <Link
              key={sem.id}
              to={`/subjects/semester-${sem.id}`}
              className="semester-card"
            >
              <h3>{sem.title}</h3>
              <p>{sem.subtitle}</p>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Semesters;
