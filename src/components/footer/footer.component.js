import "./footer.styles.scss";
import { Link } from "react-router-dom";

const Footer = () => (
  <>
    <footer>
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <h3>Designed and Developed </h3>
      </Link>
      <div className="footer">
        <div>with React</div>
        <div>for Fisdom</div>
        <div>by Varinder</div>
      </div>
      <p>Contact me - +91 7696134521, varindersingh14.vs@gmail.com</p>
    </footer>
  </>
);

export default Footer;
