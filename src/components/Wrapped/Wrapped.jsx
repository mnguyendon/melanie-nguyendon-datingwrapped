import "./Wrapped.scss";
import image from "../../assets/wallpapers/istockphoto-1132271518-612x612.jpg";
import { Link, useLocation } from "react-router-dom";
import React, { useEffect } from "react";
import axios from "axios";

import Header from "../Header/Header";

function Wrapped() {
  const location = useLocation();

  const apiUrl = "http://localhost:5050/wrapped";

  const wrappedData = async () => {
    try {
      const response = await axios.get(apiUrl);
      const data = response.data;
      console.log(data);
    } catch (error) {
      console.error("error fetching wrapped details", error);
    }
  };

  useEffect(() => {
    wrappedData();
  }, []);

  return (
    <section>
      {/* <Header /> */}
      <div className="main">
        <div className="main__container">
          <div className="content">
            <div className="content__overlay"></div>
            <button className="content__button">STATISTICS</button>
          </div>
        </div>
        <div className="main__container">
          <div className="content">
            <div className="content__overlay"></div>
            <button className="content__button">STATISTICS</button>
          </div>
        </div>
        <div className="main__container">
          <div className="content">
            <div className="content__overlay"></div>
            <button className="content__button">STATISTICS</button>
          </div>
        </div>
        <div className="main__container">
          <div className="content">
            <div className="content__overlay"></div>
            <button className="content__button">STATISTICS</button>
          </div>
        </div>
        <div className="main__container">
          <div className="content">
            <div className="content__overlay"></div>
            <button className="content__button">STATISTICS</button>
          </div>
        </div>
        <div className="main__container">
          <div className="content">
            <div className="content__overlay"></div>
            <button className="content__button">STATISTICS</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Wrapped;
