import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Blog from "./pages/Blog";
import Mail from "./pages/Mail";
import About from "./pages/About";
import Profile from "./pages/Profile";
// Theme
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

export default function App() {
  return (
    <>
      <Theme>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/signin" element={<Signin />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/mail" element={<Mail />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/about" element={<About />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Theme>
    </>
  );
}
