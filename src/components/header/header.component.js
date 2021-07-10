import "./header.styles.scss";
import { Link } from "react-router-dom";

import juneResume from '../../assets/JuneResume.pdf'

const Header = () => {
  let skills = ["Java", "React", "JavaScript", "CSS", "AWS"];

  return (
    <div className="header-wrapper">
      <header>
        <div className='heading'>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <h2 className="logo">Varinder Singh</h2>
          </Link>

          <a className="download" href={juneResume} download="resume.pdf">
            &#x27A9;
          </a>
        </div>
        <ul>
          {skills.map((skill) => (
            <Link to={skill} style={{ textDecoration: "none", color: "white" }}>
              <li key={skill}>{skill}</li>
            </Link>
          ))}
        </ul>
      </header>
    </div>
  );
};

export default Header;
