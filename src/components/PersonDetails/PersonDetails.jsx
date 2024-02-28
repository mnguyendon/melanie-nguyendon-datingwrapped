import "./PersonDetails.scss";
import editButton from "../../assets/icons/edit-24px white.svg";
import deleteButton from "../..//assets/icons/delete_outline-24px.svg";
import { Link, useParams, useNavigate } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

function PersonDetails({ currentPeople }) {
  const { id } = useParams();
  const person = currentPeople.find((person) => person.id === id);
  const navigate = useNavigate();

  const [personInfo, setPersonInfo] = useState(person);
  const [editMode, setEditMode] = useState(false);

  if (!person) {
    return <div>Person not found</div>;
  }

  const handleChange = (value) => {
    setPersonInfo({
      ...personInfo,
      ...value,
    });
  };

  const saveEdits = async () => {
    try {
      const res = await axios.post(
        `http://localhost:5050/person/${personInfo.id}`,
        personInfo
      );
      setEditMode(false);
    } catch (error) {
      console.error("Error fetching person data:", error);
    }
  };

  const deletePerson = async () => {
    try {
      const res = await axios.delete(
        `http://localhost:5050/person/${personInfo.id}`
      );
      alert("Person deleted successfully");
      navigate("/past-dates");
    } catch (error) {
      console.error("Error deleting person data:", error);
    }
  };

  return (
    <section className="person-details">
      <div className="person-details__test">
        <h2 className="person-details__title">About</h2>
        <div className="item">
          <button
            className="item__button item__delete-button"
            onClick={() => deletePerson()}
          >
            <img alt="Delete Icon" src={deleteButton} />
            <p className="item__delete-button-word">Delete</p>
          </button>
          {editMode ? (
            <button
              type="submit"
              form="edit-person-details-form"
              className="item__button item__edit-button"
              onClick={() => saveEdits()}
            >
              Save
            </button>
          ) : (
            <button
              className="item__button item__edit-button"
              onClick={() => setEditMode(true)}
            >
              <img alt="Edit Icon" src={editButton} />
              <p className="item__edit-button-word">Edit</p>
            </button>
          )}
        </div>
      </div>
      <div className="person-details__container">
        <div className="person-details__subcontainer">
          <div className="person-details__box">
            <h3 className="person-details__category">Status:</h3>
            {editMode ? (
              <select
                id="status"
                name="category"
                value={personInfo.status}
                onChange={(e) => handleChange({ status: e.target.value })}
                className="form__input"
              >
                <option>Please Select</option>
                <option>Talking</option>
                <option>Complicated</option>
                <option>FWB</option>
                <option>Friends</option>
                <option>Exclusive</option>
                <option>Over</option>
              </select>
            ) : (
              <p className="person-details__content">{personInfo.status}</p>
            )}
          </div>
          <div className="person-details__box">
            <h3 className="person-details__category">Age:</h3>
            {editMode ? (
              <input
                className="form__input"
                type="number"
                id="age"
                name="age"
                value={personInfo.age}
                onChange={(e) => handleChange({ age: e.target.value })}
                min="0"
                max="1000"
              />
            ) : (
              <p className="person-details__content">{personInfo.age}</p>
            )}
          </div>
          <div className="person-details__box">
            <h3 className="person-details__category">Height</h3>
            {editMode ? (
              <select
                id="height"
                name="category"
                className="form__input"
                value={personInfo.height}
                onChange={(e) => handleChange({ height: e.target.value })}
              >
                <option>Please Select</option>
                <option> &lt; 5'0</option>
                <option>5'0</option>
                <option>5'1</option>
                <option>5'2</option>
                <option>5'3</option>
                <option>5'4</option>
                <option>5'5</option>
                <option>5'6</option>
                <option>5'7</option>
                <option>5'8</option>
                <option>5'9</option>
                <option>5'10</option>
                <option>5'11</option>
                <option>6'0</option>
                <option>6'1</option>
                <option>6'2</option>
                <option>6'3</option>
                <option>6'4</option>
                <option>6'5</option>
                <option>6'6</option>
                <option>6'7</option>
                <option>6'8</option>
                <option>6'9</option>
                <option>6'10</option>
                <option>6'11</option>
                <option>&gt; 6'11</option>
              </select>
            ) : (
              <p className="person-details__content">{personInfo.height}</p>
            )}
          </div>
        </div>
        <div>
          <div className="person-details__box">
            <h3 className="person-details__category">Occupation</h3>
            {editMode ? (
              <input
                id="occupation"
                type="text"
                name="item_name"
                className="form__input"
                placeholder="Occupation"
                value={personInfo.occupation}
                onChange={(e) => handleChange({ occupation: e.target.value })}
              ></input>
            ) : (
              <p className="person-details__content">{personInfo.occupation}</p>
            )}
          </div>
          <div className="person-details__box">
            <h3 className="person-details__category">Starsign</h3>
            {editMode ? (
              <select
                id="starsign"
                name="category"
                className="form__input"
                value={personInfo.starsign}
                onChange={(e) => handleChange({ starsign: e.target.value })}
              >
                <option>Please Select</option>
                <option>Capricorn</option>
                <option>Aquarius</option>
                <option>Pisces</option>
                <option>Aries</option>
                <option>Taurus</option>
                <option>Gemini</option>
                <option>Cancer</option>
                <option>Leo</option>
                <option>Virgo</option>
                <option>Libra</option>
                <option>Scorpio</option>
                <option>Sagittarius</option>
                <option>Not Sure</option>
              </select>
            ) : (
              <p className="person-details__content">{personInfo.starsign}</p>
            )}
          </div>
          <div className="person-details__box">
            <h3 className="person-details__category">Ethnicity</h3>
            {editMode ? (
              <select
                id="ethnicity"
                name="category"
                className="form__input"
                value={personInfo.ethnicity}
                onChange={(e) => handleChange({ ethnicity: e.target.value })}
              >
                <option>Please Select</option>
                <option>Aboriginal/Indigenous</option>
                <option>Black/African Descent</option>
                <option>East Asian</option>
                <option>Hispanic/Latino</option>
                <option>Middle Eastern</option>
                <option>Native Hawaiian/Pacific Islander</option>
                <option>South Asian</option>
                <option>Southeast Asian</option>
                <option>White/Caucasian</option>
                <option>Other</option>
              </select>
            ) : (
              <p className="person-details__content">{personInfo.ethnicity}</p>
            )}
          </div>
        </div>
        <div className="person-details__subcontainer">
          <div className="person-details__box">
            <h3 className="person-details__category">How Did You Meet?</h3>
            {editMode ? (
              <select
                id="met"
                name="category"
                className="form__input"
                value={personInfo.met}
                onChange={(e) => handleChange({ met: e.target.value })}
              >
                <option>Please Select</option>
                <option>Dating App</option>
                <option>Mutual Friend</option>
                <option>School</option>
                <option>Work</option>
                <option>Gym</option>
                <option>Bar/Club</option>
                <option>In the Wild</option>
              </select>
            ) : (
              <p className="person-details__content">{personInfo.met}</p>
            )}
          </div>
          <div className="person-details__box">
            <h3 className="person-details__category">Face Rating</h3>
            {editMode ? (
              <select
                id="face"
                name="category"
                className="form__input"
                value={personInfo.face}
                onChange={(e) => handleChange({ face: e.target.value })}
              >
                <option>Please Select</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </select>
            ) : (
              <p className="person-details__content">{personInfo.face}</p>
            )}
          </div>
          <div className="person-details__box">
            <h3 className="person-details__category">Personality Rating</h3>
            {editMode ? (
              <select
                id="personality"
                name="category"
                className="form__input"
                value={personInfo.personality}
                onChange={(e) => handleChange({ personality: e.target.value })}
              >
                <option>Please Select</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
              </select>
            ) : (
              <p className="person-details__content">
                {personInfo.personality}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default PersonDetails;
