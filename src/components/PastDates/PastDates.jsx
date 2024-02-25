import "./PastDates.scss";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

function PastDates() {
  const [currentPeople, setCurrentPeople] = useState([]);

  const apiUrl = "http://localhost:5050/past-dates";

  const personData = async () => {
    try {
      const response = await axios.get(apiUrl);
      const data = response.data;
      setCurrentPeople(data);
    } catch (error) {
      console.error("error fetching person details", error);
    }
  };

  useEffect(() => {
    personData();
  }, []);

  return (
    <section className="past-dates">
      <div className="past-dates__container">
        <h2 className="past-dates__title">Past Dates</h2>
        {currentPeople.map((person) => (
          <Link to={`/past-dates/${person.id}`} className="person__link">
            <div className="person person-specific">
              <p className="person__category">{person.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default PastDates;
