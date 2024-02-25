import "./NewPersonForm.scss";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

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
                    <label className="form__label">Age</label>
                    <input
                      className="form__input"
                      type="number"
                      id="cry"
                      name="cry"
                      min="0"
                      max="1000"
                    />
                  </div>
                  {/* <div className="form__questions">
                    <label htmlFor="item_name" className="form__label">
                      Height
                    </label>
                    <input
                      type="text"
                      name="item_name"
                      className="form__input"
                      placeholder="Height"
                    ></input>
                  </div> */}
                  <div className="form__questions">
                    <label htmlFor="category" className="form__label">
                      Height
                    </label>
                    <select name="category" className="form__input">
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
                    <label htmlFor="category" className="form__label">
                      Starsign
                    </label>
                    <select name="category" className="form__input">
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
                    </select>
                  </div>
                  <div className="form__questions">
                    <label htmlFor="category" className="form__label">
                      Ethnicity
                    </label>
                    <select name="category" className="form__input">
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
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="form__button-container">
            <Link className="item__cencel-button--link" to={`/`}>
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

export default NewPersonForm;
