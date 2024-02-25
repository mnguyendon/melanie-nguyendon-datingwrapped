import "./PersonDetailsPage.scss";
import Header from "../../components/Header/Header";
import PersonDetails from "../../components/PersonDetails/PersonDetails";
import DateDetails from "../../components/DateDetails/DateDetails";

function PersonDetailsPage() {
  return (
    <>
      <Header />
      <div className="person-profile__head">
        <h1 className="person-profile__title">Daniel</h1>
        <p>Complicated</p>
      </div>
      <main className="person-profile">
        <PersonDetails />
        <DateDetails />
      </main>
    </>
  );
}

export default PersonDetailsPage;
