import React from "react";

import { motion } from "framer-motion";

const News = ({ element, data }) => {
  function addDefaultSrc(ev) {
    ev.target.src =
      "https://pbs.twimg.com/profile_images/1245803312475181056/oD7LZmcI_400x400.png";
  }

  return (
    <motion.div layout className="col-md-4" id="News">
      <div className="card news mt-5 container">
        <img
          src={element.urlToImage}
          className="card-img-top img-fluid"
          alt={element.title}
          onError={addDefaultSrc}
        />
        <div className="card-body">
          <div>
            <div className="d-flex flex-column justify-content-between news-h">
              <h5 className="card-title">{element.title}</h5>
              <p className="card-text">{element.description}</p>
              <div className="row align-items-center">
                <div className="text-start p-2 ms-3">
                  <i className="fa-solid fa-calendar-days news-icon"></i>
                  <span className="text-start">{element.publishedDate}</span>
                </div>
                <div className="col-md-6">
                  <a href="#" className="btn cate me-3">
                    {element.category}
                  </a>
                </div>
                <div className="col-md-6">
                  <div className="row justify-content-end">
                    <div className="col-md-6 w">
                      <div className="w-25">
                        <i className="fa-regular fa-heart w-100"></i>
                      </div>
                    </div>
                    <div className="col-md-6 w">
                      <div className="w-25">
                        <i className="fa-solid fa-share-nodes w-100"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default News;
