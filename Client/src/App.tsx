import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// PAGES
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Blog from "./pages/Blog";
import Mail from "./pages/Mail";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/mail" element={<Mail />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
