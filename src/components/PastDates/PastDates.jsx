import "./PastDates.scss";
import { Link, useLocation } from "react-router-dom";

function PastDates() {
  return (
    <section className="past-dates">
      <div className="past-dates__container">
        <h2 className="past-dates__title">Past Dates</h2>

        <Link to="/past-dates/:id" className="person__link">
          <div className="person person-specific">
            <p className="person__category">Daniel</p>
          </div>
        </Link>
        <Link to="/past-dates/:id" className="person__link">
          <div className="person person-specific">
            <p className="person__category">Daniel</p>
          </div>
        </Link>
        <Link to="/past-dates/:id" className="person__link">
          <div className="person person-specific">
            <p className="person__category">Daniel</p>
          </div>
        </Link>
        <Link to="/past-dates/:id" className="person__link">
          <div className="person person-specific">
            <p className="person__category">Daniel</p>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default PastDates;
