import "./Months.scss";
import image from "../../assets/wallpapers/istockphoto-1132271518-612x612.jpg";
import { Link, useLocation } from "react-router-dom";
import React from "react";
import MonthButton from "../MonthButton/MonthButton";
import Header from "../Header/Header";

function Months() {
  const location = useLocation();

  return (
    <section>
      {/* <Header /> */}
      <div className="main">
        <div className="main__container">
          <div className="content">
            <div className="content__overlay"></div>
            <button className="content__button">JANUARY</button>
          </div>
        </div>
        <div className="main__container">
          <div className="content">
            <div className="content__overlay"></div>
            <button className="content__button">FEBRUARY</button>
          </div>
        </div>
        <div className="main__container">
          <div className="content">
            <div className="content__overlay"></div>
            <button className="content__button">MARCH</button>
          </div>
        </div>
        <div className="main__container">
          <div className="content">
            <div className="content__overlay"></div>
            <button className="content__button">APRIL</button>
          </div>
        </div>
        <div className="main__container">
          <div className="content">
            <div className="content__overlay"></div>
            <button className="content__button">MAY</button>
          </div>
        </div>
        <div className="main__container">
          <div className="content">
            <div className="content__overlay"></div>
            <button className="content__button">JUNE</button>
          </div>
        </div>
        <div className="main__container">
          <div className="content">
            <div className="content__overlay"></div>
            <button className="content__button">JULY</button>
          </div>
        </div>
        <div className="main__container">
          <div className="content">
            <div className="content__overlay"></div>
            <button className="content__button">AUGUST</button>
          </div>
        </div>
        <div className="main__container">
          <div className="content">
            <div className="content__overlay"></div>
            <button className="content__button">SEPTEMBER</button>
          </div>
        </div>
        <div className="main__container">
          <div className="content">
            <div className="content__overlay"></div>
            <button className="content__button">OCTOBER</button>
          </div>
        </div>
        <div className="main__container">
          <div className="content">
            <div className="content__overlay"></div>
            <button className="content__button">NOVEMBER</button>
          </div>
        </div>
        <div className="main__container">
          <div className="content">
            <div className="content__overlay"></div>
            <button className="content__button">DECEMBER</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Months;
