import { Routes, Route } from "react-router-dom";
import WhoWeAre from "./components/WhoWeAre";
import WhatWeDo from "./components/WhatWeDo";
import ContactUs from "./pages/ContactUs";
import './App.css'

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
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
  );
}

export default App;
