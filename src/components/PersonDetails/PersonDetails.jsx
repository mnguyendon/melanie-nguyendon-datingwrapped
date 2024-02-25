import "./PersonDetails.scss";
import editButton from "../../assets/icons/edit-24px white.svg";
import deleteButton from "../..//assets/icons/delete_outline-24px.svg";
import { Link, useLocation } from "react-router-dom";

function PersonDetails() {
  return (
    <section className="person-details">
      <h2 className="person-details__title">About</h2>

      <div className="person-details__container">
        <div className="person-details__subcontainer">
          <div className="person-details__box">
            <h3 className="person-details__category">Age:</h3>
            <p className="person-details__content">27</p>
          </div>
          <div className="person-details__box">
            <h3 className="person-details__category">Height</h3>
            <p className="person-details__content">5'11</p>
          </div>
          <div className="person-details__box">
            <h3 className="person-details__category">Occupation</h3>
            <p className="person-details__content">Research Analyst</p>
          </div>
          <div className="person-details__box">
            <h3 className="person-details__category">Starsign</h3>
            <p className="person-details__content">Capricorn</p>
          </div>
          <div className="person-details__box">
            <h3 className="person-details__category">Ethnicity</h3>
            <p className="person-details__content">East Asian</p>
          </div>
        </div>
        <div className="person-details__subcontainer">
          <div className="person-details__box">
            <h3 className="person-details__category">How Did You Meet?</h3>
            <p className="person-details__content">Dating App</p>
          </div>
          <div className="person-details__box">
            <h3 className="person-details__category">Face Rating</h3>
            <p className="person-details__content">9</p>
          </div>
          <div className="person-details__box">
            <h3 className="person-details__category">Personality Rating</h3>
            <p className="person-details__content">9</p>
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

export default PersonDetails;
