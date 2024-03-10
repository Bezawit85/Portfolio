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
        😌. So to say a little about my professional journey, I joined campus at
        2019 and later majored in Electrical and Computer Engineering. so here
        is how i shifted to Computer Programming. it was time to choose stream
        and I made some research by asking seniors what's the latest Job market
        about and they told me programming is a huge deal, and its fun to learn
        because its actually the thing we will be doing when we graduate. I was
        so passionate about giing it a try but now I am into it, I am doing it
        not trying. Iam part of the developer teams at Bazra Motors. But during
        campus internship I have worked as an intern for just 3 months at Kifiya
        Financial Technology PLC and it was so good. I improved my coding,
        presentation, communicating my works and the work environment including
        being professional and helped me decide my career path.
      </p>
      <button className="back" onClick={handleClick}>
        <div style={{ fontSize: "20px" }}> &#8592;</div>Back
      </button>
    </div>
  );
};

export default Blogpost1;
