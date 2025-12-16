import { Link } from "react-router-dom";
import "./PreviousPapers.css";

function PreviousPapers({ subjectCode, papers, prevSubject, nextSubject }) {
  if (!papers?.length) return null;

  return (
    <section className="previous-papers">
      <h2>{subjectCode} – Previous Question Papers</h2>

      <ul className="papers-list">
        {papers.map(paper => (
          <li key={paper.year}>
            <span>{paper.year}</span>
            <a href={paper.pdf} target="_blank" rel="noopener noreferrer">
              Download PDF
            </a>
          </li>
        ))}
      </ul>

      <div className="papers-navigation">
        {prevSubject && (
          <Link to={prevSubject.path} className="nav-link prev">
            ← {prevSubject.code} – {prevSubject.name}
          </Link>
        )}

        {nextSubject && (
          <Link to={nextSubject.path} className="nav-link next">
            {nextSubject.code} – {nextSubject.name} →
          </Link>
        )}
      </div>
    </section>
  );
}

export default PreviousPapers;
