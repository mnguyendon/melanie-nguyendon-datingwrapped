import "./NewDateForm.scss";
import { useNavigate, Link } from "react-router-dom";

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
// const { REACT_APP_API_BASE_PATH } = process.env;

function NewDateForm() {
  const [currentPeople, setCurrentPeople] = useState([]);
  const formRef = useRef();
  const navigate = useNavigate();

  const submitForm = async (e) => {
    try {
      e.preventDefault();
      const form = formRef.current;

      const personId = form.name.value;
      const date = form.date.value;
      const activity = form.activity.value;
      const paid = form.paid.value;
      const family = form.family.value;
      const friend = form.friend.value;
      const cry = form.cry.value;
      const end = form.end.value;
      const other = form.other.value;

      const data = {
        "person-id": personId,
        date,
        activity,
        paid,
        family,
        friend,
        cry,
        end,
        other,
      };
      const res = await axios.post(
        "http://localhost:5050/past-dates/details",
        data
      );
      alert("Date added successfully");
      navigate("/past-dates");
    } catch (error) {
      console.error("error adding new person", error);
    }
  };

  const apiUrl = "http://localhost:5050/person";

  const personData = async () => {
    try {
      const response = await axios.get(apiUrl);
      const data = response.data;
      setCurrentPeople(data);
    } catch (error) {
      console.error("error fetching person details", error);
    }
  };

  useEffect(() => {
    personData();
  }, []);
  return (
    <>
      <main>
        <form autocomplete="off" ref={formRef} onSubmit={submitForm}>
          <section className="form">
            <h2 className="form__title">New Date</h2>
            <div className="form__section">
              <div className="form__questions-wrap">
                <div>
                  <div className="form__questions">
                    <label htmlFor="category" className="form__label">
                      Name
                    </label>
                    <select id="name" name="category" className="form__input">
                      {currentPeople.map((person) => (
                        <option value={person.id}>{person.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form__questions">
                    <label className="form__label">Date</label>
                    <input
                      id="date"
                      type="date"
                      name="status"
                      className="date__input"
                      required
                    />
                  </div>

                  <div className="form__questions">
                    <label htmlFor="item_name" className="form__label">
                      What did you do?
                    </label>
                    <input
                      id="activity"
                      type="text"
                      name="item_name"
                      className="form__input"
                      placeholder="Please enter a brief description..."
                    ></input>
                  </div>
                  <div className="form__questions">
                    <label htmlFor="category" className="form__label">
                      Who Paid?
                    </label>
                    <select id="paid" name="category" className="form__input">
                      <option>Me</option>
                      <option>Them</option>
                      <option>50/50</option>
                      <option>No $$ Spent</option>
                    </select>
                  </div>
                  <div className="form__questions">
                    <label className="form__label">Cry count</label>
                    <input
                      className="form__input"
                      type="number"
                      id="cry"
                      name="cry"
                      min="0"
                      max="1000"
                    />
                  </div>
                </div>
                <div>
                  <div className="form__questions">
                    <label className="radio__label">
                      Did you meet their family?
                    </label>
                    <input
                      id="family"
                      type="radio"
                      name="family"
                      className="radio__button"
                      required
                    />
                    {"Yes"}
                    <input
                      type="radio"
                      name="family"
                      className="radio__button"
                      required
                    />
                    {"No"}
                  </div>
                  <div className="form__questions">
                    <label className="radio__label">
                      Did you meet their friends?
                    </label>
                    <input
                      id="friend"
                      type="radio"
                      name="friends"
                      className="radio__button"
                      required
                    />
                    {"Yes"}
                    <input
                      type="radio"
                      name="friends"
                      className="radio__button"
                      required
                    />
                    {"No"}
                  </div>
                  {/* <div className="form__questions">
                    <label className="form__label">Cry count</label>
                    <input
                      className="form__input"
                      type="number"
                      id="cry"
                      name="cry"
                      min="0"
                      max="1000"
                    />
                  </div> */}
                  <div className="form__questions">
                    <label htmlFor="category" className="form__label">
                      Who Ended Things?
                    </label>
                    <select id="end" name="category" className="form__input">
                      <option>Please Select</option>
                      <option>Me</option>
                      <option>Them</option>
                      <option>Mutual Ghosting</option>
                      <option>Third-Party</option>
                      <option>Still Ongoing</option>
                    </select>
                  </div>
                  <div className="form__questions">
                    <label htmlFor="description" className="form__label">
                      Other Comments
                    </label>
                    <textarea
                      id="other"
                      type="text"
                      name="description"
                      className="form__input custom__input"
                      placeholder="Please enter a brief description..."
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="form__button-container">
            <Link className="item__cancel-button--link" to={`/`}>
              <button type="cancel" className="form__button-cancel">
                CANCEL
              </button>
            </Link>
            <button type="submit" className="form__button-submit">
              SUBMIT
            </button>
          </div>
        </form>
      </main>
    </>
  );
}

export default NewDateForm;
