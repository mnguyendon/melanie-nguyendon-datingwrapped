import "./Wrapped.scss";
import { useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import weightlifter from "../../assets/icons/weightlifting.png";
import crying from "../../assets/icons/crying.png";
import talking from "../../assets/icons/chat-box.png";
import heartbreak from "../../assets/icons/broken-heart.png";
import date from "../../assets/icons/calendar.png";
import couple from "../../assets/icons/kiss.png";

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
    return <div>No information to wrap. Time to start dating again!</div>;
  }

  return (
    <section>
      <div className="main">
        <div className="main__container">
          <div className="content">
            <button className="content__button">
              <img className="content__img" src={date} />
              <p>
                You went on {wrappedInfo.numOfFirstDates} first dates this year
              </p>
            </button>
          </div>
        </div>
        <div className="main__container">
          <div className="content">
            <button className="content__button">
              <img className="content__img" src={couple} />
              <p>
                {" "}
                Out of those {wrappedInfo.numOfFirstDates} dates,{" "}
                <span>{wrappedInfo.numGotToSecondDate}</span> got to a second
                date
              </p>
            </button>
          </div>
        </div>
        <div className="main__container">
          <div className="content">
            <button className="content__button">
              <img className="content__img" src={talking} />
              <p>
                You are in the {wrappedInfo.groupByStatus?.Talking[0]?.status}{" "}
                stage with 1 of your dates
              </p>
            </button>
          </div>
        </div>
        <div className="main__container">
          <div className="content">
            <button className="content__button">
              <img className="content__img" src={heartbreak} />
              <p>You ended {wrappedInfo.numEndedByMe} of all the dates</p>
            </button>
          </div>
        </div>
        <div className="main__container">
          <div className="content">
            <button className="content__button">
              <img className="content__img" src={crying} />
              <p>
                {wrappedInfo.numMadeMeCry} of your dates made you cry this year
              </p>
            </button>
          </div>
        </div>
        <div className="main__container">
          <div className="content">
            <button className="content__button">
              <img className="content__img" src={weightlifter} />
              <p>
                You met {wrappedInfo?.groupByMeeting["Dating App"].length}{" "}
                people on Dating Apps and{" "}
                {wrappedInfo?.groupByMeeting["Gym"].length} people at the Gym
              </p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Wrapped;
