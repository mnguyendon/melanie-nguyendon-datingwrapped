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
        <Link to={`/new-date`} className="">
          <button className="home__button home__button-date">NEW DATE</button>
        </Link>
      </section>
    </>
  );
}

export default HomePage;
