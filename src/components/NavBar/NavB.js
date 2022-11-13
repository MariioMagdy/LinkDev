import styles from "./NabB.module.css";
import { useState } from "react";
const NavB = () => {
  const [chart, setChart] = useState("EN");
  function change(e) {
    if (e.target.innerText === "EN") {
      setChart("AR");
    } else {
      setChart("EN");
    }
  }
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={require("../../assets/Logo.png")} alt="" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex justify-content-between w-75 position-relative">
            <div className="d-flex justify-content-between">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#Home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#AboutUs">
                  About us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#News">
                  News
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contactUs">
                  Contact us
                </a>
              </li>
            </div>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Sign up
              </a>
            </li>
            <li className="nav-item dropdown" onClick={change}>
              <a className="nav-link" id="navbarDropdown">
                {chart}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavB;
