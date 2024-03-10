import React from "react";
import "./blog.css";

const Blogpost2 = () => {
  const handleClick = () => {
    window.location.href = "/blog";
  };

  return (
    <div className="blogger">
      <h1>AI News</h1>
      <p style={{ fontSize: "20px" }}>
        According to Elon Musk, AGI will be written in Rust rather than Python,
        the most popular programming language for building ML models in the
        current tech ecosystem. What’s So Good About Rust? Rust has been Stack
        Overflow’s most loved language for many years in a row. Most developers
        using it really love it and more than 80% of developers that use it want
        to use it again next year. Rust is also getting popular amongst new
        developers who aim to write safe/ stable and concurrent/ scalable
        applications. Here are the 6 reasons that make Rust so awesome! 1. High
        Speed & Performance Rust believes in the principle that you shouldn’t
        pay for what you don’t use. It provides high-level abstractions that
        compile to efficient machine code as if you wrote the low-level code by
        hand as in C/ C++. These high-level features have minimal to no runtime
        overhead. If you don’t use a particular feature/ abstraction, your
        compiled code won’t
      </p>
      <button className="back" onClick={handleClick}>
        <div style={{ fontSize: "20px" }}> &#8592;</div>Back
      </button>
    </div>
  );
};

export default Blogpost2;
