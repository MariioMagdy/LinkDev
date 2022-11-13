import React from "react";
import { useEffect } from "react";
import * as Api from "../../LinkApi";
import NavB from "../NavBar/NavB";
import HomeSlider from "./HomeSlider/HomeSlider";
import HomeVision from "./HomeVision/HomeVision";
import TopNews from "./TopNews/TopNews";
import Footer from "../Footer/footer";

const Home = () => {
  return (
    <div>
      <NavB />
      <HomeSlider />
      <HomeVision />
      <TopNews />
      <Footer />
    </div>
  );
};

export default Home;
