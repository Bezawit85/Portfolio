import React from "react";
import "./blog.css";
import Navbar from "./Navbar";

const Blog = () => {
  return (
    <div id="blog">
      <Navbar />
      <div className="blog">
        <div className="blog1">
          <h1>Curious about me?</h1>
          <p>
          Well hello! I am Bezawit which you already know if you make it this far 😌. So to say a little about my professional
            journey, I joined campus at 2019 and later majored in Electrical and Computer Engineering. so here is how i shifted to
            Computer Programming. it was time to choose stream and I made some research by asking seniors what's the latest Job market
            about and they told me programming is a huge deal, ... <a href="./blogpost1"> Read more.</a>
          </p>
        </div>
        <div className="blog2">
        <h1>AI News</h1>
          <p>
          According to Elon Musk, AGI will be written in Rust rather than
            Python, the most popular programming language for building ML models
            in the current tech ecosystem. What’s So Good About Rust? Rust has
            been Stack Overflow’s most loved language for many years in a row.
            Most developers using it really love it and more than 80% of
            developers that use it want to use it again next year....<a href="./blogpost2">Read more.</a>
          </p>
        </div>
        <div className="blog3">
        <h1>Leadership</h1>
          <p>
          Leadership is a fundamental aspect of human interaction and progress,
        influencing individuals, teams, and organizations towards a common goal.
        At its core, leadership involves inspiring and guiding others to achieve
        shared objectives, fostering growth, innovation, and success. A good
        leader possesses a unique blend of qualities that empower and motivate
        those around them, driving positive change and shaping the future. One
        crucial trait of effective leadership is the ability to communicate with
        authenticity and clarity. Communication <a href="./blogpost3">Read more.</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
