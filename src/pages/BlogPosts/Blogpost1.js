import React from "react";
import "./blog.css";

const Blogpost1 = () => {
  const handleClick = () => {
    window.location.href = "/blog";
  };

  return (
    <div className="blogger">
      <h1>Curious about me?</h1>
      <p style={{ fontSize: "20px" }}>
        Well hello! I am Bezawit which you already know if you make it this far
       
      </p>
      <button className="back" onClick={handleClick}>
        <div style={{ fontSize: "20px" }}> &#8592;</div>Back
      </button>
    </div>
  );
};

export default Blogpost1;
