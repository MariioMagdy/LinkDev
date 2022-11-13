import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer id="contactUs">
      <div className="container mt-5 py-5">
        <div className="row">
          <div className="col-md-3">
            <div className="footer-img mb-3">
              <img
                src={require("../../assets/Logo.png")}
                alt=""
                className="img-fluid"
              />
            </div>
            <p className="footer-p">
              We make technology produce <br />
              productive, adaptable and
              <br /> sustainable business experiences.
            </p>
          </div>
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-4">
                <span className="heads mb-4 d-inline-block">Company</span>
                <ul className="list-unstyled">
                  <li>About</li>
                  <li>careers</li>
                  <li>mobile</li>
                </ul>
              </div>
              <div className="col-md-4">
                <span className="heads mb-4 d-inline-block">Contact</span>
                <ul className="list-unstyled">
                  <li>Help/FAQ</li>
                  <li>Press</li>
                  <li>Affilates</li>
                </ul>
              </div>
              <div className="col-md-4">
                <span className="heads mb-4 d-inline-block">Media</span>
                <ul className="list-unstyled">
                  <li>News</li>
                  <li>Photo</li>
                  <li>video</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="social d-flex justify-content-between mb-3">
              <a
                href="https://www.facebook.com/link.development/"
                target="_blank"
              >
                <i className="fa-brands fa-facebook-f rounded-circle"></i>
              </a>
              <a
                href="https://www.instagram.com/linkdevelopment/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram rounded-circle"></i>
              </a>
              <a href="https://twitter.com/linkdevelopment" target="_blank">
                <i className="fa-brands fa-twitter rounded-circle"></i>
              </a>
            </div>
            <p className="dis">Discover our App</p>
            <div className="row text-center">
              <div className="col-md-6 col-sm-6 col-6">
                <a
                  href="https://play.google.com/store/apps/details?id=gitex.UI&hl=en&gl=US"
                  target="_blank"
                >
                  <button className="rounded-pill w-100 p-2 d-flex align-items-center justify-content-center">
                    <i className="fa-brands fa-google-play me-2"></i>
                    <span className="socialT">Git it Google Play</span>
                  </button>
                </a>
              </div>
              <div className="col-md-6 col-sm-6 col-6">
                <a
                  href="https://apps.apple.com/kw/developer/link-development/id367345161"
                  target="_blank"
                >
                  <button className="rounded-pill w-100 p-2 d-flex justify-content-center align-items-center">
                    <i className="fa-brands fa-apple me-2 "></i>
                    <span className="socialT">Apple Store</span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-75 m-auto text-center">
          <span>All rights reserved@Linkdevelopment.com</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
