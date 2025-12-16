import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} OU MCA Notes Platform</p>
      <p>Built for students • Free & Open Learning</p>
    </footer>
  );
}

export default Footer;
