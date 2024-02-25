import "./HomePage.scss";
import Header from "../../components/Header/Header";
// import Footer from "../../components/Footer/Footer";
import { Link, useLocation } from "react-router-dom";

function HomePage() {
  return (
    <>
      <Header />
      <section className="home">
        <Link to={`/new-person`} className="">
          <button className="home__button home__button-person">
            NEW PERSON
          </button>
        </Link>
        <div className="test">
          {/* <p className="heart__text">
            Click the heart to view your dating wrapped!
          </p> */}
          <Link to={`/wrapped`} className="heart__link">
            <div className="heart__wrapper">
              <button className="heart"></button>
              <div className="heart__beat"></div>
              <p className="heart__text">
                Click here to view your dating wrapped!
              </p>
            </div>
          </Link>
        </div>
        <Link to={`/new-date`} className="">
          <button className="home__button home__button-date">NEW DATE</button>
        </Link>
      </section>
    </>
  );
}

export default HomePage;
