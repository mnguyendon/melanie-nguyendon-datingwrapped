import "./NewDateForm.scss";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import axios from "axios";
// const { REACT_APP_API_BASE_PATH } = process.env;

function NewDateForm() {
  return (
    <>
      <main>
        <form>
          <section className="form">
            <h2 className="form__section__title">New Date</h2>
            <div className="form__section">
              <div className="form__questions-container">
                <div className="form__questions">
                  <label className="form__label">Date</label>
                  <input
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
                  <select name="category" className="form__input">
                    <option>Please Select</option>
                    <option>Me</option>
                    <option>Them</option>
                    <option>50/50</option>
                    <option>No $$ Spent</option>
                  </select>
                </div>
                <div className="form__questions">
                  <label className="radio__label">
                    Did you meet their family?
                  </label>
                  <input
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
                <div className="form__questions">
                  <label htmlFor="category" className="form__label">
                    Who Ended Things?
                  </label>
                  <select name="category" className="form__input">
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
                    type="text"
                    name="description"
                    className="form__input custom__input"
                    placeholder="Please enter a brief description..."
                  ></textarea>
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
