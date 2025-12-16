import { Link } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import "./NotFound.css";

function NotFound() {
  return (
    <>
      <Header />

      <section className="not-found">
        <h1>404</h1>
        <p>The page you are looking for does not exist.</p>

        <div className="not-found-actions">
          <Link to="/">Go to Home</Link>
          <Link to="/semesters">View Semesters</Link>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default NotFound;
