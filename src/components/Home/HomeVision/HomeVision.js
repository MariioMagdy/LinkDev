import React from "react";
import "./HomeVision.css";

const HomeVision = () => {
  return (
    <div>
      <section className="vision mb-5" id="AboutUs">
        <div className="py-5 ps-4">
          <div className="v-rightinternal">
            <div>
              <div className="col-md-6 col-6 col-sm-6 col-md-6 vision-pos">
                <div className="row">
                  <div className=" col-4 col-sm-4 col-md-4  p-0 mt-5">
                    <div className="box one mt-5 ">
                      <img
                        src={require("../../../assets/Things We Do.png")}
                        alt="Things We Do"
                        className="things"
                      />
                      <div className="bx">
                        <img
                          src={require("../../../assets/Transformation.png")}
                          alt="Transformation"
                          className="img-fluid"
                        />
                        <div className="layout">
                          <span>
                            Read More
                            <i className="fa-solid fa-arrow-right p-1"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 col-sm-4  col-md-4  p-0 mt-5">
                    <div className="box two">
                      <div className="bx">
                        <img
                          src={require("../../../assets/Layer -1.png")}
                          alt="Layer"
                          className="img-fluid"
                        />
                        <div className="layout">
                          <span>
                            Read More
                            <i className="fa-solid fa-arrow-right p-1"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="box three">
                      <div className="bx">
                        <img
                          src={require("../../../assets/asset-1.png")}
                          alt="asset"
                          className="img-fluid"
                        />
                        <div className="layout ">
                          <span>
                            Read More
                            <i className="fa-solid fa-arrow-right p-1"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-4 col-sm-4 col-md-4   p-0">
                    <div className="box four">
                      <div className="bx">
                        <img
                          src={require("../../../assets/Layer -2.png")}
                          alt="Layer"
                          className="img-fluid"
                        />
                        <div className="layout">
                          <span>
                            Read More
                            <i className="fa-solid fa-arrow-right p-1"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="box five">
                      <div className="bx">
                        <img
                          src={require("../../../assets/Layer -4.png")}
                          alt="Layer"
                          className="img-fluid"
                        />
                        <div className="layout">
                          <span>
                            Read More
                            <i className="fa-solid fa-arrow-right p-1"></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 vision-right ms-auto p-5  my-5">
                <div className="ww ms-auto">
                  <h3 className="text-end w-100 h3-we fs-1">
                    We Deliver <br />
                    Digital Productivity
                  </h3>
                  <p>
                    We craft technology solutions that digitally
                    <br /> bond and transform the productivity of our customers
                    and their citizens, workers, consumers and partners.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeVision;
