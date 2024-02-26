import "./PersonDetails.scss";
import editButton from "../../assets/icons/edit-24px white.svg";
import deleteButton from "../..//assets/icons/delete_outline-24px.svg";
import { Link, useParams } from "react-router-dom"; // Import useParams hook

function PersonDetails({ currentPeople }) {
  const { id } = useParams(); // Get the id parameter from the URL using useParams

  // Find the person with the matching id
  const person = currentPeople.find((person) => person.id === id);

  // Check if person is found
  if (!person) {
    return <div>Person not found</div>; // Display a message if person is not found
  }

  return (
    <section className="person-details">
      <div className="person-details__test">
        <h2 className="person-details__title">About</h2>
        <div className="item">
          <Link className="item__button--link" to={`/`}>
            <button className="item__delete-button">
              <img alt="Delete Icon" src={deleteButton} />
              <p className="item__delete-button-word">Delete</p>
            </button>
          </Link>
          <Link
            className="item__button--link"
            to={`/past-dates/${person.id}/edit`}
          >
            <button className="item__edit-button">
              <img alt="Edit Icon" src={editButton} />
              <p className="item__edit-button-word">Edit</p>
            </button>
          </Link>
        </div>
      </div>
      <div className="person-details__container">
        <div className="person-details__subcontainer">
          <div className="person-details__box">
            <h3 className="person-details__category">Status:</h3>
            <p className="person-details__content">{person.status}</p>
          </div>
          <div className="person-details__box">
            <h3 className="person-details__category">Age:</h3>
            <p className="person-details__content">{person.age}</p>
          </div>
          <div className="person-details__box">
            <h3 className="person-details__category">Height</h3>
            <p className="person-details__content">{person.height}</p>
          </div>
        </div>
        <div>
          <div className="person-details__box">
            <h3 className="person-details__category">Occupation</h3>
            <p className="person-details__content">{person.occupation}</p>
          </div>
          <div className="person-details__box">
            <h3 className="person-details__category">Starsign</h3>
            <p className="person-details__content">{person.starsign}</p>
          </div>
          <div className="person-details__box">
            <h3 className="person-details__category">Ethnicity</h3>
            <p className="person-details__content">{person.ethnicity}</p>
          </div>
        </div>
        <div className="person-details__subcontainer">
          <div className="person-details__box">
            <h3 className="person-details__category">How Did You Meet?</h3>
            <p className="person-details__content">{person.met}</p>
          </div>
          <div className="person-details__box">
            <h3 className="person-details__category">Face Rating</h3>
            <p className="person-details__content">{person.face}</p>
          </div>
          <div className="person-details__box">
            <h3 className="person-details__category">Personality Rating</h3>
            <p className="person-details__content">{person.personality}</p>
          </div>
        </div>
      </div>
      {/* <div className="item">
        <Link className="item__delete-button--link" to={`/`}>
          <button className="item__delete-button">
            <img alt="Delete Icon" src={deleteButton} />
            <p className="item__delete-button-word">Delete</p>
          </button>
        </Link>
        <Link
          className="item__edit-button--link"
          to={`/past-dates/${person.id}/edit`}
        >
          <button className="item__edit-button">
            <img alt="Edit Icon" src={editButton} />
            <p className="item__edit-button-word">Edit</p>
          </button>
        </Link>
      </div> */}
    </section>
  );
}

export default PersonDetails;
