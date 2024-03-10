import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Blogpost1 from "./pages/BlogPosts/Blogpost1";
import Blogpost2 from "./pages/BlogPosts/Blogpost2";
import Blogpost3 from "./pages/BlogPosts/Blogpost3";

function App() {
  return (
    <BrowserRouter>
     <Routes>
 <Route path="/" element={<Home />} />
 <Route path="/about" element={<About />} />
 <Route path="/projects" element={<Project />} />
 <Route path="/blog" element={<Blog />} />
 <Route path="/contact" element={<Contact />} />
 <Route path="/blogpost1" element={<Blogpost1 />} />
 <Route path="/blogpost2" element={<Blogpost2 />} />
 <Route path="/blogpost3" element={<Blogpost3 />} />
        </Routes>
        </BrowserRouter>
  );
}

export default App;
