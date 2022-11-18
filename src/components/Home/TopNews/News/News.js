import React from "react";

import { motion } from "framer-motion";

const News = ({ element, data }) => {
  function addDefaultSrc(ev) {
    ev.target.src =
      "https://pbs.twimg.com/card_img/1589747714237104128/tfqjWrmn?format=jpg&name=900x900";
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
          <h5 className="card-title">{element.title}</h5>
          <p className="card-text">{element.description}</p>
          <div className="d-flex justify-content-start align-items-center mb-3">
            <i className="fa-solid fa-calendar-days news-icon"></i>
            <span>{element.publishedDate}</span>
          </div>
          <div className="row align-items-center">
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
    </motion.div>
  );
};

export default News;
