import { Link } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import "./Home.css";

function Home() {
  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <section className="hero">
        <h1>OU MCA Notes & PDFs</h1>
        <p>
          One platform for complete Osmania University MCA syllabus (R24) –
          unit-wise notes, PDFs, and concept explanations.
        </p>

        <Link to="/semesters" className="cta-btn">
          Explore Notes
        </Link>
      </section>

      {/* FEATURES SECTION */}
      <section className="features">
        <div className="feature-card">
          <h3>OU R24 Syllabus Oriented</h3>
          <p>Exact Osmania University MCA syllabus coverage, unit by unit.</p>
        </div>

        <div className="feature-card">
          <h3>Free & Exam Focused PDFs</h3>
          <p>Clean notes prepared for semester exams and revisions.</p>
        </div>

        <div className="feature-card">
          <h3>Concept Videos (Coming Soon)</h3>
          <p>Easy-to-understand explanation videos for every unit.</p>
        </div>
      </section>

      {/* SEMESTERS PREVIEW SECTION */}
      <section className="semesters">
        <h2>OU MCA Semesters</h2>
        <div className="semester-grid">
          <Link to="/subjects/semester-1" className="semester-card">
            Semester I
          </Link>
          <Link to="/subjects/semester-2" className="semester-card">
            Semester II
          </Link>
          <Link to="/subjects/semester-3" className="semester-card">
            Semester III
          </Link>
          <Link to="/subjects/semester-4" className="semester-card">
            Semester IV
          </Link>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <h2>Start Learning Today</h2>
        <p>No login required. Completely free for OU MCA students.</p>

        <Link to="/semesters" className="cta-btn">
          Get Started
        </Link>
      </section>

      <Footer />
    </>
  );
}

export default Home;
