import "./PersonDetailsPage.scss";
import Header from "../../components/Header/Header";
import PersonDetails from "../../components/PersonDetails/PersonDetails";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function PersonDetailsPage() {
  const [currentPeople, setCurrentPeople] = useState([]);
  const [dateDetails, setDateDetails] = useState([]);

  const apiUrl = "http://localhost:5050/person";
  const apiUrl2 = "http://localhost:5050/past-dates/details";

  const personData = async () => {
    try {
      const response = await axios.get(apiUrl);
      const data = response.data;
      setCurrentPeople(data);
    } catch (error) {
      console.error("error fetching person details", error);
    }
  };

  const dateData = async () => {
    try {
      const response = await axios.get(apiUrl2);
      const data = response.data;
      setDateDetails(data);
    } catch (error) {
      console.error("error fetching date details", error);
    }
  };

  useEffect(() => {
    personData();
    dateData();
  }, []);

  const { id } = useParams();

  const person = currentPeople.find((person) => person.id === id);

  const sortedPersonDateDetails = dateDetails
    .filter((detail) => detail["person-id"] === id)
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  if (!person) {
    return <div>Person not found</div>;
  }

  return (
    <>
      <Header />
      <div className="person-profile__head">
        <h1 className="person-profile__title">{person.name}</h1>
      </div>
      <section className="person-profile">
        <PersonDetails currentPeople={currentPeople} />
      </section>
      <section className="prev-date">
        <div className="prev-date__add">
          <h2 className="prev-date__head">All Dates with {person.name}</h2>
          <Link to={`/new-date`}>
            <button className="prev-date__button">+ Add Date</button>
          </Link>
        </div>
        <div className="prev-date__container">
          {sortedPersonDateDetails.map((date) => (
            <div key={date.id} className="prev-date__category">
              <div className="prev-date__box">
                <h3>Date</h3>
                <p className="prev-date__content">{date.date}</p>
              </div>
              <div className="prev-date__box">
                <h3>Activity</h3>
                <p className="prev-date__content">{date.activity}</p>
              </div>
              <div className="prev-date__box">
                <h3>Paid</h3>
                <p className="prev-date__content">{date.paid}</p>
              </div>
              <div className="prev-date__box">
                <h3>Met Family?</h3>
                <p className="prev-date__content">{date.family}</p>
              </div>
              <div className="prev-date__box">
                <h3>Met Friends?</h3>
                <p className="prev-date__content">{date.friend}</p>
              </div>
              <div className="prev-date__box">
                <h3>Cry Count</h3>
                <p className="prev-date__content">{date.cry}</p>
              </div>
              <div className="prev-date__box">
                <h3>Other</h3>
                <p className="prev-date__content">{date.other}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default PersonDetailsPage;
