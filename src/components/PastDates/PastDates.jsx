import "./PastDates.scss";
import { Link, useLocation } from "react-router-dom";

function PastDates() {
  return (
    <section className="past-dates">
      <div className="past-dates__container">
        <h2 className="past-dates__title">Past Dates</h2>
        <div className="person">
          <p className="person__category-title">Name</p>
          <p className="person__category-title">Age</p>
          <p className="person__category-title">Starsign</p>
          <p className="person__category-title">Status</p>
        </div>
        <Link to="/past-dates/:id" className="person__link">
          <div className="person person-specific">
            <p className="person__category">Tim</p>
            <p className="person__category">30</p>
            <p className="person__category">Capricorn</p>
            <p className="person__category">Complicated</p>
          </div>
        </Link>
        <Link to="/past-dates/:id" className="person__link">
          <div className="person person-specific">
            <p className="person__category">Tim</p>
            <p className="person__category">30</p>
            <p className="person__category">Capricorn</p>
            <p className="person__category">Complicated</p>
          </div>
        </Link>
        <Link to="/past-dates/:id" className="person__link">
          <div className="person person-specific">
            <p className="person__category">Tim</p>
            <p className="person__category">30</p>
            <p className="person__category">Capricorn</p>
            <p className="person__category">Complicated</p>
          </div>
        </Link>
        <Link to="/past-dates/:id" className="person__link">
          <div className="person person-specific">
            <p className="person__category">Tim</p>
            <p className="person__category">30</p>
            <p className="person__category">Capricorn</p>
            <p className="person__category">Complicated</p>
          </div>
        </Link>
        <Link to="/past-dates/:id" className="person__link">
          <div className="person person-specific">
            <p className="person__category">Tim</p>
            <p className="person__category">30</p>
            <p className="person__category">Capricorn</p>
            <p className="person__category">Complicated</p>
          </div>
        </Link>
        <Link to="/past-dates/:id" className="person__link">
          <div className="person person-specific">
            <p className="person__category">Tim</p>
            <p className="person__category">30</p>
            <p className="person__category">Capricorn</p>
            <p className="person__category">Complicated</p>
          </div>
        </Link>
        <Link to="/past-dates/:id" className="person__link">
          <div className="person person-specific">
            <p className="person__category">Tim</p>
            <p className="person__category">30</p>
            <p className="person__category">Capricorn</p>
            <p className="person__category">Complicated</p>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default PastDates;
