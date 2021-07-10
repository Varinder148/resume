import "./education.style.scss";

const Education = () => {
  let education = [
    {
      college: "Guru Nanak Dev Engineering College, Ludhiana, Punjab",
      specialization: "Bachelor of Technology (CGPA - 8.49)",
      year: "08.2015 - 06.2019",
    },
  ];

  return (
    <>
      <h2 className='title light-red'>Education</h2>
      <section className="edu-wrapper">
        {education.map((edu, idx) => (
          <div key={idx}>
            <div className="college">{edu.college}</div>
            <div className="special">{edu.specialization}</div>
            <div className="year">{edu.year}</div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Education;
