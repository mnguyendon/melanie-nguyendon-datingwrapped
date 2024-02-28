import "./PastDates.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import couple from "../../assets/wallpapers/mindy-sabiston-9hgDf95TNO8-unsplash.jpg";

function PastDates() {
  const [currentPeople, setCurrentPeople] = useState([]);

  const apiUrl = "http://localhost:5050/person";

  const personData = async () => {
    try {
      const response = await axios.get(apiUrl);
      const data = response.data;
      const sortedData = data
        .slice()
        .sort((a, b) => a.name.localeCompare(b.name));
      setCurrentPeople(sortedData);
    } catch (error) {
      console.error("error fetching person details", error);
    }
  };

  useEffect(() => {
    personData();
  }, []);

  return (
    <section className="past-dates">
      <div className="test">
        <div>
          <h2 className="past-dates__title">Past Dates</h2>
          <div>
            {currentPeople.map((person) => (
              <Link
                key={person.id}
                to={`/past-dates/${person.id}`}
                className="person__link"
              >
                <div className="person person-specific">
                  <p className="person__category">{person.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <img className="past-dates__image" src={couple} />
      </div>
    </section>
  );
}

export default PastDates;
