import React from "react";
import Navbar from "./Navbar";
import "./home.css";

const Home = () => {
  const handleClick = () => {
    window.location.href = "/contact";
  };

  return (
    <>
      <div className="home">
        <Navbar transparent />
        <div className="items">
          <div className="titles">
            <h1 className="title">I'm Bezawit Eshetu</h1>
            <h1 className="title">
              Frontend Developer | UI/UX Designer | Logo Designer
            </h1>
            <button className="btn" onClick={handleClick}>
              Get in Touch
            </button>
          </div>
          <div className="container">
            <h1>👋 Hey there!</h1>
            <p style={{ fontSize: "20px" }}>
              I am a Frontend web developer with 1 year experience.
              
             <h3> Services</h3>
              <ul>
                <li> Innovative ideas</li>
                <li>Website developement</li>
                <li>Graphics Design</li>
              </ul>
              <h3>Career highlights</h3>
              <ul>
                <li>Developed MERN stack fully responsive website</li>
                <li>Collaborated with teams to deliver projects on time</li>
                <li>
                  Improved user experience through innovative design solutions
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <div className="section2">
        <p className="topic">MY JOURNEY</p>
        <div className="times">
          <div className="box">
            <h1>Academic</h1>
            <p className="detail">
              <strong>Debre Berhan University:</strong> <hr />I actively
              participated on school projects. we worked on a project called
              ItemReunite, facilitating the time a person finds his lost item by
              allowing users to post and search for detailed descriptions of
              their belongings, replacing traditional notice board methods.
            </p>
          </div>
          <div className="box" id="box2">
            <h1> Internship</h1>
            <p className="detail">
              <strong>Kifiya Financial Technology - Internship: </strong> <hr />
              I have 3 months of experience working as a MERN stack developer
              during campus internship, where I developed an intern accepting
              website. I Used technologies like MongoDB, Express.js, React, and
              Node.js, and have a strong understanding of full-stack
              development.
            </p>
          </div>
          <div className="box" id="box3">
            <h1>Full-Time Job</h1>
            <p className="detail">
              <strong>Bazra Motors - Frontend Developer: </strong> <hr />
              I am building an Admin dashboard in React.js for Bazra Motors. I work with backend developers
               to connect the frontend and backend smoothly, Constantly developing building and deploying 
               changes. I join team talks, pick up new tech fast, and adjust to changes in the industry.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
