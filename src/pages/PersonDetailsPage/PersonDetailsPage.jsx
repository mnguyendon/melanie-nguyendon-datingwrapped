import "./PersonDetailsPage.scss";
import Header from "../../components/Header/Header";
import PersonDetails from "../../components/PersonDetails/PersonDetails";
import DateDetails from "../../components/DateDetails/DateDetails";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function PersonDetailsPage() {
  const [currentPeople, setCurrentPeople] = useState([]);
  const [dateDetails, setDateDetails] = useState([]);

  const apiUrl = "http://localhost:5050/past-dates";
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

  const { id } = useParams(); // Get the id parameter from the URL using useParams

  // Find the person with the matching id
  const person = currentPeople.find((person) => person.id === id);

  // Filter date details for the current person
  const personDateDetails = dateDetails.filter(
    (detail) => detail["person-id"] === id
  );

  // Check if person is found
  if (!person) {
    return <div>Person not found</div>; // Display a message if person is not found
  }

  return (
    <>
      <Header />
      <div className="person-profile__head">
        <h1 className="person-profile__title">{person.name}</h1>
        {/* <p className="person-profile__status">{person.status}</p> */}
      </div>
      <section className="person-profile">
        <PersonDetails currentPeople={currentPeople} />
        {/* <DateDetails dateDetails={personDateDetails} /> */}
      </section>
      <section className="prev-date">
        <h2>All Dates with {person.name}</h2>
        <div className="prev-date__container">
          {personDateDetails.map((date) => (
            <div key={date.id} className="prev-date__category">
              <h3>Date</h3>
              <p>{date.date}</p>
              <h3>Activity</h3>
              <p>{date.activity}</p>
              <h3>Paid</h3>
              <p>{date.paid}</p>
              <h3>Met Family?</h3>
              <p>{date.family}</p>
              <h3>Met Friends?</h3>
              <p>{date.friend}</p>
              <h3>Cry Count</h3>
              <p>{date.cry}</p>
              <h3>Other</h3>
              <p>{date.other}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default PersonDetailsPage;
