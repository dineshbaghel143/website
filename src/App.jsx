import { Routes, Route } from "react-router-dom";
import WhoWeAre from "./components/WhoWeAre";
import WhatWeDo from "./components/WhatWeDo";
import ContactUs from "./pages/ContactUs";
import Services from "./pages/Services";
import ScrollProgress from "./components/ScrollProgress";
import "./App.css";

const Home = () => {
  return (
    <>
      <WhoWeAre />
      <WhatWeDo />
    </>
  );
};

function App() {
  return (
    <>
      {/* SCROLL PROGRESS MUST BE OUTSIDE ROUTES */}
      <ScrollProgress />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </>
  );
}

export default App;
