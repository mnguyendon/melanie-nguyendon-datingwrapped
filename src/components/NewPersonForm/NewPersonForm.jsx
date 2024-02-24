import "./NewPersonForm.scss";
// import { Link } from "react-router-dom";

// import { useState, useEffect } from "react";
// import axios from "axios";
// const { REACT_APP_API_BASE_PATH } = process.env;

function NewPersonForm() {
  return (
    <>
      <main>
        <form>
          <section className="form">
            <h2 className="form__title">New Person</h2>
            <div className="form__container">
              <div className="form__section">
                <div className="form__questions">
                  <label htmlFor="category" className="form__label">
                    Status
                  </label>
                  <select name="category" className="form__input">
                    <option>Please Select</option>
                    <option>Talking</option>
                    <option>Complicated</option>
                    <option>FWB</option>
                    <option>Friends</option>
                    <option>Exclusive</option>
                    <option>Relationship</option>
                    <option>Over</option>
                  </select>
                </div>
                <div className="form__questions">
                  <label htmlFor="category" className="form__label">
                    How Did You Meet?
                  </label>
                  <select name="category" className="form__input">
                    <option>Please Select</option>
                    <option>Dating App</option>
                    <option>Mutual Friend</option>
                    <option>School</option>
                    <option>Work</option>
                    <option>Gym</option>
                    <option>Bar/Club</option>
                    <option>In the Wild</option>
                  </select>
                </div>
                <div className="form__questions">
                  <label htmlFor="category" className="form__label">
                    Face Rating
                  </label>
                  <select name="category" className="form__input">
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
                </div>
                <div className="form__questions">
                  <label htmlFor="category" className="form__label">
                    Personality Rating
                  </label>
                  <select name="category" className="form__input">
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
                </div>
              </div>
              <div className="form__section">
                <div className="form__questions-container">
                  <div className="form__questions">
                    <label htmlFor="item_name" className="form__label">
                      Name
                    </label>
                    <input
                      type="text"
                      name="item_name"
                      className="form__input"
                      placeholder="Name"
                    ></input>
                  </div>
                  <div className="form__questions">
                    <label htmlFor="item_name" className="form__label">
                      Age
                    </label>
                    <input
                      type="text"
                      name="item_name"
                      className="form__input"
                      placeholder="Age"
                    ></input>
                  </div>
                  <div className="form__questions">
                    <label htmlFor="item_name" className="form__label">
                      Height
                    </label>
                    <input
                      type="text"
                      name="item_name"
                      className="form__input"
                      placeholder="Height"
                    ></input>
                  </div>
                  <div className="form__questions">
                    <label htmlFor="item_name" className="form__label">
                      Occupation
                    </label>
                    <input
                      type="text"
                      name="item_name"
                      className="form__input"
                      placeholder="Occupation"
                    ></input>
                  </div>
                  <div className="form__questions">
                    <label htmlFor="item_name" className="form__label">
                      Starsign
                    </label>
                    <input
                      type="text"
                      name="item_name"
                      className="form__input"
                      placeholder="Starsign"
                    ></input>
                  </div>
                  <div className="form__questions">
                    <label htmlFor="item_name" className="form__label">
                      Ethnicity
                    </label>
                    <input
                      type="text"
                      name="item_name"
                      className="form__input"
                      placeholder="Ethnicity"
                    ></input>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div className="form__button-container">
            <button type="cancel" className="form__button-cancel">
              CANCEL
            </button>
            <button type="submit" className="form__button-submit">
              SUBMIT
            </button>
          </div>
        </form>
      </main>
    </>
  );
}

export default NewPersonForm;
