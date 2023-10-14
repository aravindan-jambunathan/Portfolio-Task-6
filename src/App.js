import React from "react";

const App = () => {
  const portfolioData = {
    name: "Aravindan Jambunathan",
    reg:"21BCE5804",
    place: "Tiruchirappalli , Tamil Nadu | India",
    skills: ["Programming Languages: C++, Python, Java, C, MATLAB, R, SQL", "Software Skills: Microsoft Office Suite, Microsoft Power BI, Linux, Shell Script", "Technical Skills: Programming, Data Science, Machine Learning, Deep Learning, Software Engineering, Keras, PyTorch, TensorFlow, Computer Vision, Technical Writing, Research Experience, Data Analytics, Streamlit"],
    projects: [
      {
        title: "Sentiment Analysis",
        description: "Using SVC on various datasets of feedbacks and predicted in the feedback is positive or negative.",
      },
      {
        title: "Image Detection",
        description: "Using Convolution Neural Network of Deep Learning for differentiating different paintings as AI generated image of Human drawn",
      },
      {
        title: "Stock Analysis",
        description: "By analysis datasets of various comapanies and converting them into matrix thereby implementing RESnet of CNN to predict the stock value for the next few time frames",
      },
    ],
  };

  return (
    <div className="portfolio">
      <div className="frame">
        <div className="header">
          <h1>{portfolioData.name}</h1>
          <h2><u>Registration no:</u> {portfolioData.reg}</h2>
          <h2><u>Postal Location:</u> {portfolioData.place}</h2>
        </div>
        <div className="body">
          <div className="about">
            <h3><u>Description about me:</u></h3>
            <p>I am Aravindan Jambunathan, a 21-year-old individual currently enrolled in the Computer Science and Engineering CSE program at VIT-Chennai, pursuing a B.Tech degree. My passion has always revolved around the field of computer science, with a particular fascination for Machine Learning. The concept of programming computers to predict events that have not yet occurred has captivated my imagination and has been a driving force behind my academic and professional interests.<br></br>While my primary focus lies in the domains of Machine Learning and Deep Learning, I have also dedicated time to broaden my skill set. I have undertaken courses in areas such as Cloud Computing and Web Development, allowing me to gain proficiency in diverse aspects of computer science. These endeavors have enabled me to approach technology from a well-rounded perspective, fostering my growth as a computer scientist.</p>
          </div>
          <div className="skills">
            <h3><u>Skills:</u></h3>
            <ul>
              {portfolioData.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="projects">
            <h3><u>Some Personal Projects: </u></h3>
            {portfolioData.projects.map((project) => (
              <ul>
                <div className="project" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              </ul>
              
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;