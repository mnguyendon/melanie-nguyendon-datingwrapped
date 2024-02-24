import "./PersonDetails.scss";

function PersonDetails() {
  return (
    <section className="person-details">
      <h2 className="person-details__title">Name</h2>
      <div className="person-details__container">
        <div className="person-details__subcontainer">
          <h3 className="person-details__category">Age:</h3>
          <p>27</p>
          <h3 className="person-details__category">Height</h3>
          <p>5'11</p>
          <h3 className="person-details__category">Occupation</h3>
          <p>Research Analyst</p>
          <h3 className="person-details__category">Starsign</h3>
          <p>Capricorn</p>
          <h3 className="person-details__category">Ethnicity</h3>
          <p>Asian</p>
        </div>
        <div className="person-details__subcontainer">
          <h3 className="person-details__category">Status</h3>
          <p>Complicated</p>
          <h3 className="person-details__category">How Did You Meet?</h3>
          <p>Dating App</p>
          <h3 className="person-details__category">Face Rating</h3>
          <p>9</p>
          <h3 className="person-details__category">Personality Rating</h3>
          <p>9</p>
        </div>
      </div>
    </section>
  );
}

export default PersonDetails;
