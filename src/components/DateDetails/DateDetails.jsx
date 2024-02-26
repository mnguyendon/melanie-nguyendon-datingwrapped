import "./DateDetails.scss";
import editButton from "../../assets/icons/edit-24px white.svg";
import deleteButton from "../../assets/icons/delete_outline-24px.svg";

import { Link, useParams } from "react-router-dom";

function DateDetails({ dateDetails }) {
  const { id } = useParams(); // Get the id parameter from the URL using useParams

  // Filter date details for the current person
  const personDateDetails = dateDetails.filter(
    (detail) => detail["person-id"] === id
  );

  // Get the most recent date
  const mostRecentDate =
    personDateDetails.length > 0 ? personDateDetails[0] : null;

  return (
    <section className="dates">
      <h2 className="person-details__title">Most Recent Date</h2>
      <div className="person-details__container">
        {mostRecentDate && (
          <div key={mostRecentDate.id} className="prev-date__category">
            <div className="person-details__subcontainer">
              <div className="person-details__box">
                <h3 className="person-details__category">Day of Date</h3>
                <p className="person-details__content">{mostRecentDate.date}</p>
              </div>
              <div className="person-details__box">
                <h3 className="person-details__category">What Did You Do?</h3>
                <p className="person-details__content">
                  {mostRecentDate.activity}
                </p>
              </div>
              <div className="person-details__box">
                <h3 className="person-details__category">Who Paid?</h3>
                <p className="person-details__content">{mostRecentDate.paid}</p>
              </div>
              <div className="person-details__box">
                <h3 className="person-details__category">
                  Did you meet their family?
                </h3>
                <p className="person-details__content">
                  {mostRecentDate.family}
                </p>
              </div>
              <div className="person-details__box">
                <h3 className="person-details__category">
                  Did you meet their friends?
                </h3>
                <p className="person-details__content">
                  {mostRecentDate.friend}
                </p>
              </div>
            </div>
            <div className="person-details__subcontainer">
              <div className="person-details__box">
                <h3 className="person-details__category">Cry Count</h3>
                <p className="person-details__content">{mostRecentDate.cry}</p>
              </div>
              <div className="person-details__box">
                <h3 className="person-details__category">Who Ended Things?</h3>
                <p className="person-details__content">{mostRecentDate.end}</p>
              </div>
              <div className="person-details__box">
                <h3 className="person-details__category">Other</h3>
                <p className="person-details__content">
                  {mostRecentDate.other}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="item">
        <Link className="item__delete-button--link" to={`/`}>
          <button className="item__delete-button">
            <img alt="Delete Icon" src={deleteButton} />
            <p className="item__delete-button-word">Delete</p>
          </button>
        </Link>
        <Link className="item__edit-button--link" to={`/past-dates/${id}/edit`}>
          <button className="item__edit-button">
            <img alt="Edit Icon" src={editButton} />
            <p className="item__edit-button-word">Edit</p>
          </button>
        </Link>
      </div>
    </section>
  );
}

export default DateDetails;
