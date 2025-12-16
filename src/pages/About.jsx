import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Breadcrumb from "../components/common/Breadcrumb";
import "./About.css";

function About() {
  return (
    <>
      <Header />

      <section className="about-page">
     

        <div className="about-container">
          <h1>About OU MCA Notes</h1>
          <p className="about-intro">
            OU MCA Notes is a student-centric academic platform designed to
            provide complete, syllabus-oriented study material for the
            Master of Computer Applications (MCA) program under
            Osmania University (OU) – R24 regulations.
          </p>

          <div className="about-section">
            <h2>Our Purpose</h2>
            <p>
              The primary goal of this platform is to help MCA students
              access well-structured notes, unit-wise PDFs, and previous
              question papers in one place, without the need for login or
              paid subscriptions.
            </p>
          </div>

          <div className="about-section">
            <h2>What You Will Find</h2>
            <ul>
              <li>Semester-wise subject organization</li>
              <li>Unit-wise syllabus coverage</li>
              <li>Downloadable PDF notes</li>
              <li>Previous question papers</li>
              <li>Professional Electives (PE-I & PE-II)</li>
              <li>Project & internship guidelines (Semester IV)</li>
            </ul>
          </div>

          <div className="about-section">
            <h2>Who This Platform Is For</h2>
            <p>
              This platform is intended for MCA students of Osmania University,
              especially those following the CBCS and R24 curriculum.
              It is also useful for aspirants preparing for exams,
              interviews, and academic revisions.
            </p>
          </div>

          <div className="about-section">
            <h2>Future Enhancements</h2>
            <p>
              Planned improvements include concept explanation videos,
              interactive learning resources, and enhanced navigation
              for faster academic access.
            </p>
          </div>

          <div className="about-footer">
            <p>
              Built with a focus on clarity, accuracy, and ease of use —
              OU MCA Notes aims to simplify learning and support academic success.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default About;
