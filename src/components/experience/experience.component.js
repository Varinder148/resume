import "./experience.styles.scss";
const Experience = () => {
  let exp = [
    {
      company: "Infosys Ltd.",
      designation: "Systems Engineer",
      from: "08.2019",
      to: "present",
      responsibilities: [
        "Creating and maintaining various reusable React components.",
        "Utilizing various dependencies to make the React application work",
        "Used React-Router-Dom for route management and Redux for State management along with Reselect for creating    memoized selectors.    ",
        "Used logger as middleware in redux for generating logs.",
        "Writing code bases in Python to orchestrate various services on AWS cloud including S3, SES, DynamoDB, Secrets Manager using    Lambda functions.",
        "Ensuring each component in end to end workflow is working as expected.    ",
      ],
    },
    {
      company: "Infosys Ltd.",
      designation: "Systems Engineer Trainee",
      from: "01.2019",
      to: "05.2019",
      responsibilities: [
        "135 days of intensive training, during which, learnt a lot about different technologies.    Learnt basics of python, SQL during the first    month and cleared the assessment for the    same.    ",
        "Next one and a half month, learnt basics of C#, writing procedures, functions, triggers inSQL Server, .NET Core and Enitityframework as ORM.    ",
        "At the end, put the whole knowledge to use by creating a web app, which lets you book    cabs, trains or buses.    ",
        "Got evaluated as a High Performer after the end of training.",
      ],
    },
  ];
  return (
    <>
    <h2 className='title light-grey'>Experience</h2>
    <section className="experience-wrapper">
      {exp.map((experience, idx) => (
        <div className="experience" key={idx}>
          <div className="company">{experience.company}</div>
          <div className="title-wrapper">
            <div className="job-title">{experience.designation}</div>
            <div className="time">
              {experience.from} - {experience.to}
            </div>
          </div>
          <ul className="responsibilities">
            {experience.responsibilities.map((responsibility, idx) => (
              <li key={idx}>{responsibility}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
    </>
  );
};
export default Experience;
