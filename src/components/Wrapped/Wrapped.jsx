import "./Wrapped.scss";
import image from "../../assets/wallpapers/istockphoto-1132271518-612x612.jpg";
import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Wrapped() {
  const location = useLocation();
  const [wrappedInfo, setWrappedInfo] = useState();

  const apiUrl = "http://localhost:5050/wrapped";

  const wrappedData = async () => {
    try {
      const response = await axios.get(apiUrl);
      const data = response.data;
      console.log(data);
      setWrappedInfo(data);
    } catch (error) {
      console.error("error fetching wrapped details", error);
    }
  };

  useEffect(() => {
    wrappedData();
  }, []);

  if (!wrappedInfo) {
    return <div>No wrapped info</div>;
  }

  return (
    <section>
      <div className="main">
        <div className="main__container">
          <div className="content">
            <div className="content__overlay"></div>
            <button className="content__button">
              You went on {wrappedInfo.numOfFirstDates} first dates this year
            </button>
          </div>
        </div>
        <div className="main__container">
          <div className="content">
            <div className="content__overlay"></div>
            <button className="content__button">
              Out of those {wrappedInfo.numOfFirstDates} dates,{" "}
              {wrappedInfo.numGotToSecondDate} got to a second date
            </button>
          </div>
        </div>
        <div className="main__container">
          <div className="content">
            <div className="content__overlay"></div>
            <button className="content__button">
              You are in the {wrappedInfo.groupByStatus.Talking[0].status} stage
              with 1 person
            </button>
          </div>
        </div>
        <div className="main__container">
          <div className="content">
            <div className="content__overlay"></div>
            <button className="content__button">
              You ended {wrappedInfo.numEndedByMe} of all the dates
            </button>
          </div>
        </div>
        <div className="main__container">
          <div className="content">
            <div className="content__overlay"></div>
            <button className="content__button">
              {wrappedInfo.numMadeMeCry} person(s) made you cry this year
            </button>
          </div>
        </div>
        <div className="main__container">
          <div className="content">
            <div className="content__overlay"></div>
            <button className="content__button">
              You met {wrappedInfo.groupByMeeting["In the Wild"][0].name} in the
              Wild and {wrappedInfo.groupByMeeting["Gym"][0].name} in the Gym
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Wrapped;
