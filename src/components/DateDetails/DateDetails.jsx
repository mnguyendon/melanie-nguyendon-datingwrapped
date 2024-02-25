import "./DateDetails.scss";
import editButton from "../../assets/icons/edit-24px white.svg";
import deleteButton from "../../assets/icons/delete_outline-24px.svg";

import { Link, useLocation } from "react-router-dom";

function DateDetails() {
  return (
    <section className="dates">
      <h2 className="person-details__title">Most Recent Date</h2>
      <div className="person-details__container">
        <div className="person-details__subcontainer">
          <div className="person-details__box">
            <h3 className="person-details__category">Day of Date</h3>
            <p className="person-details__content">2024-02-14</p>
          </div>
          <div className="person-details__box">
            <h3 className="person-details__category">What Did You Do?</h3>
            <p className="person-details__content">Aquarium</p>
          </div>
          <div className="person-details__box">
            <h3 className="person-details__category">Who Paid?</h3>
            <p className="person-details__content">Them</p>
          </div>
          <div className="person-details__box">
            <h3 className="person-details__category">
              Did you meet their family?
            </h3>
            <p className="person-details__content">Yes</p>
          </div>
          <div className="person-details__box">
            <h3 className="person-details__category">
              Did you meet their friends?
            </h3>
            <p className="person-details__content">Yes</p>
          </div>
        </div>
        <div className="person-details__subcontainer">
          <div className="person-details__box">
            <h3 className="person-details__category">Cry Count</h3>
            <p className="person-details__content">1</p>
          </div>
          <div className="person-details__box">
            <h3 className="person-details__category">Who Ended Things?</h3>
            <p className="person-details__content">Still Ongoing</p>
          </div>
          <div className="person-details__box">
            <h3 className="person-details__category">Other</h3>
            <p className="person-details__content">
              Cute lil Valentines Day Date
            </p>
          </div>
        </div>
      </div>
      <div className="item">
        <Link className="item__delete-button--link" to={`/`}>
          <button className="item__delete-button">
            <img alt="Delete Icon" src={deleteButton} />
            <p className="item__delete-button-word">Delete</p>
          </button>
        </Link>
        <Link className="item__edit-button--link" to={`/past-dates/:id/edit`}>
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
