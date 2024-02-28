import Header from "../../components/Header/Header";
import PastDates from "../../components/PastDates/PastDates";
import { Link, useParams } from "react-router-dom";

function PastDatesPage() {
  return (
    <>
      <Header />
      <PastDates />
    </>
  );
}

export default PastDatesPage;
