import React from "react";
import "./HomeSlider.css";

const HomeSlider = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="true"
    >
      <div className="carousel-inner d-flex justify-content-center">
        <div className="container">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-xl-6 col-md-12">
                <div className="d-flex content align-items-center container py-1">
                  <div className="pra py-5">
                    <h2 className="Marking pt-5">Marking</h2>
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
              <div className="col-xl-6 col-md-12">
                <div className="imm mt-5">
                  <div className="pt-3">
                    <img
                      src={require("../../../assets/Traveller 1.png")}
                      className="d-block img-fluid"
                      alt="..."
                    />
                    <img
                      src={require("../../../assets/Decore-6@2x.png")}
                      className="d-block img-fluid Decore"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-xl-6 col-md-12">
                <div className="d-flex content align-items-center container py-1">
                  <div className="pra py-5">
                    <h2 className="Trendy pt-5">Trendy Inside-Out</h2>
                    <p className="paragh">
                      Crafty Minds
                      <br /> Reshaping Future
                    </p>
                    <p className="info">
                      Link Development,Our people, processes, and technologies
                      thrive
                      <br /> on digital breakthroughs.
                    </p>
                    <button className="btn btn-primary">Find out More</button>
                    <i className="fa-solid fa-circle-play"> play Video</i>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-md-12">
                <div className="imm mt-5">
                  <div className="pt-3">
                    <img
                      src={require("../../../assets/Hero Content-1.png")}
                      className="d-block img-fluid"
                      alt="..."
                    />
                    <img
                      src={require("../../../assets/Decore-7@2x.png")}
                      className="d-block img-fluid Decore"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-xl-6 col-md-12">
                <div className="d-flex content align-items-center container py-1">
                  <div className="pra py-5">
                    <h2 className="Outsource pt-5"> Outsource</h2>
                    <p className="paragh">
                      Global IT <br /> Experts
                    </p>
                    <p className="info">
                      On-shore, offshore, nearshore and hybrid models for
                      dedicated
                      <br /> development, product building and staff
                      augmentation.
                    </p>
                    <button className="btn btn-primary">Find out More</button>
                    <i className="fa-solid fa-circle-play"> play Video</i>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-md-12">
                <div className="imm mt-5">
                  <div className="pt-3">
                    <img
                      src={require("../../../assets/Hero Content.png")}
                      className="d-block img-fluid"
                      alt="..."
                    />
                    <img
                      src={require("../../../assets/Decore-11@2x.png")}
                      className="d-block img-fluid Decore"
                      alt="..."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-indicators  ms-5 ps-4 container  align-items-center justify-content-around">
            <div className="col-md flex-grow-0">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active first circle"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
            </div>
            <div className="col-md flex-grow-0">
              <div className="dot ps-2">.......</div>
            </div>
            <div className="col-md flex-grow-0">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
                className="second circle"
              ></button>
            </div>
            <div className="col-md flex-grow-0">
              <div className="dot ps-2">.......</div>
            </div>
            <div className="col-md flex-grow-0">
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
    </div>
  );
};

export default HomeSlider;
