import "./HomePage.scss";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import heart from "../../assets/wallpapers/heart.png";
import cheers from "../../assets/icons/cheers.png";
import user from "../../assets/icons/user (1).png";

function HomePage() {
  return (
    <>
      <Header />
      <section className="home">
        <div className="home__button-container">
          <Link to={`/new-person`} className="">
            <button className="home__button home__button-person">
              <img className="home__button-image" src={user} />
              <p>NEW PERSON</p>
            </button>
          </Link>
          <Link to={`/new-date`} className="">
            <button className="home__button home__button-date">
              <img className="home__button-image" src={cheers} />
              <p>NEW DATE</p>
            </button>
          </Link>
        </div>
        <Link to={`/wrapped`} className="heart__link">
          <div>
            <img src={heart} />
            <p className="heart__text">
              Click here to view your dating wrapped!
            </p>
          </div>
        </Link>
      </section>
    </>
  );
}

export default HomePage;
