import { Link } from "react-router-dom";
import "./Breadcrumb.css";

function Breadcrumb({ semesterId, subject }) {
  const semNumber = semesterId ? semesterId.split("-")[1] : null;

  return (
    <nav className="breadcrumb">
      <Link to="/">Home</Link>

      {semesterId && (
        <>
          <span>→</span>
          <Link to="/semesters">Semesters</Link>
          <span>→</span>
          <Link to={`/subjects/${semesterId}`}>
            Semester {semNumber}
          </Link>
        </>
      )}

      {subject && (
        <>
          <span>→</span>
          <span>{subject.code}</span>
        </>
      )}
    </nav>
  );
}

export default Breadcrumb;
