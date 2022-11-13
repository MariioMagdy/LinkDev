import React from "react";
import "./HomeSlider.css";

const HomeSlider = () => {
  return (
    <section className="homeSlider" id="Home">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="true"
      >
        <div className="carousel-inner">
          <div>
            <div className="carousel-item one active">
              <img
                src={require("../../../assets/1.png")}
                className="d-block img-fluid"
                alt="..."
              />
              <div className="d-flex content align-items-center container">
                <div className="pra">
                  <h2 className="Marking">Marking</h2>
                  <p className="paragh">
                    25 Years of
                    <br /> Business Growth
                  </p>
                  <p className="info">
                    Link Development, the global technology solutions provider
                    and an
                    <br /> A15 company, unveiled today that it has recently
                    marked its Silver
                    <br /> Jubilee anniversary.
                  </p>

                  <button className="btn btn-primary">Find out More</button>

                  <i className="fa-solid fa-circle-play"> play Video</i>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={require("../../../assets/2.png")}
                className="d-block img-fluid"
                alt="..."
              />
              <div className="d-flex content align-items-center container">
                <div>
                  <h2 className="Outsource"> Outsource</h2>
                  <p className="paragh">
                    Global IT <br /> Experts
                  </p>
                  <p className="info">
                    On-shore, offshore, nearshore and hybrid models for
                    dedicated
                    <br /> development, product building and staff augmentation.
                  </p>
                  <button className="btn btn-primary">Find out More</button>

                  <i className="fa-solid fa-circle-play"> play Video</i>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={require("../../../assets/3.png")}
                className="d-block img-fluid"
                alt="..."
              />
              <div className="d-flex content align-items-center container py-5">
                <div>
                  <h2 className="Trendy">Trendy Inside-Out</h2>

                  <p className="paragh">
                    Crafty Minds
                    <br /> Reshaping Future
                  </p>
                  <p className=" info">
                    Link Development,Our people, processes, and technologies
                    thrive
                    <br /> on digital breakthroughs.
                  </p>
                  <button className="btn btn-primary">Find out More</button>
                  <i className="fa-solid fa-circle-play"> play Video</i>
                </div>
              </div>
            </div>
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active first circle"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
                className="second circle"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
                className="third circle"
              ></button>
            </div>
          </div>
        </div>
      </div>
      ;
    </section>
  );
};

export default HomeSlider;
