import "./Wrapped.scss";
import image from "../../assets/wallpapers/istockphoto-1132271518-612x612.jpg";
import { Link, useLocation } from "react-router-dom";
import React from "react";
import MonthButton from "../MonthButton/MonthButton";
import Header from "../Header/Header";

function Wrapped() {
  const location = useLocation();

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
