// src/pages/Home.tsx
import Navbar from "./Navbar";
import "../style/global.css";
const Hero = () => (
  <>
    <div className="hero">
      <div className="hero-content">
        <Navbar />
        <div className="heroText">
          <h1 className="text-center text-white fw-bolder">
            A unique hotel experience for your apartment
          </h1>
          <h2
            className="text-center fw-bolder pt-3"
            style={{ color: "#BEBEBE" }}>
            Health and cleanliness
          </h2>
        </div>
        <div className="d-flex justify-content-center align-items-center pt-5">
          <button className="btn btn-outline-light w-25 fs-3 border-3">
            Call US
          </button>
        </div>
      </div>
    </div>
  </>
);

export default Hero;
