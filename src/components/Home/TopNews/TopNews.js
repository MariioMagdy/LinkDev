import { useEffect, useState } from "react";
import * as Api from "../../../LinkApi";
import News from "./News/News";
import { motion } from "framer-motion";
import "./TopNews.css";

const TopNews = () => {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [isActive, SetActive] = useState(0);
  const [flag, setflag] = useState(true);
  const [cat, setCat] = useState([]);

  const getlist = async () => {
    const res = await Api.newslisting();
    setData(res.News);
    setFiltered(res.News);
  };

  function Addnew() {
    filtered.map((e) => {
      switch (e.categoryID) {
        case "1":
          e.category = "Technology";
          break;
        case "2":
          e.category = "Sports";
          break;
        case "3":
          e.category = "Health";
          break;
        case "4":
          e.category = "Economics";
          break;
        default:
          break;
      }
    });
  }

  Addnew();

  const newsCategory = async () => {
    const res = await Api.newsCategory();
    setCat(res.newsCategory);
  };

  useEffect(() => {
    newsCategory();
    getlist();
  }, []);

  useEffect(() => {
    switch (isActive) {
      case 0:
        setFiltered(data);
        setflag(false);
        break;
      case 1:
        const Technology = data.filter((news) => {
          return news.categoryID === "1";
        });

        setFiltered(Technology);
        setflag(true);
        break;

      case 2:
        const sports = data.filter((news) => {
          return news.categoryID === "2";
        });

        setFiltered(sports);
        setflag(true);
        break;
      case 3:
        const health = data.filter((news) => {
          return news.categoryID === "3";
        });

        setFiltered(health);
        setflag(true);
        break;
      case 4:
        const Economics = data.filter((news) => {
          return news.categoryID === "4";
        });
        setFiltered(Economics);
        setflag(true);
        break;
      default:
        setFiltered(data);
        setflag(false);
        break;
    }
  }, [isActive]);

  const showMore = () => {
    SetActive(0);
    setflag(false);
  };

  return (
    <section className="container text-center">
      <span className="media">Media</span>
      <p className="fs-1 fw-bold mb-5">Top News</p>
      <div className="mb-3">
        <div className="d-flex justify-content-around news-w ">
          <button
            onClick={() => SetActive(0)}
            className={`${isActive === 0 ? "act" : "btn btn-primary"}`}
          >
            All News
          </button>
          <button
            onClick={() => SetActive(1)}
            className={` ${isActive === 1 ? "act" : "btn btn-primary"}`}
          >
            Technology
          </button>
          <button
            onClick={() => SetActive(2)}
            className={`= ${isActive === 2 ? "act" : "btn btn-primary"}`}
          >
            Sports
          </button>
          <button
            onClick={() => SetActive(3)}
            className={` ${isActive === 3 ? "act" : "btn btn-primary"}`}
          >
            Health
          </button>
          <button
            onClick={() => SetActive(4)}
            className={` ${isActive === 4 ? "act" : "btn btn-primary"}`}
          >
            Economics
          </button>
        </div>
      </div>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        layout
        className="row"
      >
        {filtered.map((element) => {
          return (
            <News element={element} data={data} key={element.id} cat={cat} />
          );
        })}
      </motion.div>
      {flag && (
        <div className="w-50 m-auto mt-5 ">
          <button
            className="show-btn btn btn-secondary text-center"
            onClick={showMore}
          >
            View All News
          </button>
        </div>
      )}
    </section>
  );
};

export default TopNews;
