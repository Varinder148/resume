import "./project.styles.scss";
import { Link } from "react-router-dom";

const Project = () => {
  let projects = [
    {
      name: "furnihture",
      details: [
        `A retail web app developed with    React Js`,
        `Used hooks in functional components and created other components with classes.`,
        `Used reselect to create memoized        selectors.        `,
        `Used redux for state management.`,
      ],
      link: "https://varinder148.github.io/furnihture/",
    },
  ];
  return (
    <>
      <h2 className="title">Personal Projects</h2>
      <section className="projects">
        {projects.map((project) => (
          <div key={project.name}>
            <h3>{project.name}</h3>
            <Link
              to=""
              style={{ textDecoration: "none", color: "#505050" }}
              onClick={() => (window.location.href = project.link)}
            >
              <span>Click here to visit</span>
            </Link>

            <ul>
              {project.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </>
  );
};

export default Project;
