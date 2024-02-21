import "./NewDateForm.scss";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import axios from "axios";
const { REACT_APP_API_BASE_PATH } = process.env;

function NewDateForm({ inventoryList, allWarehouses }) {
  //Create Drop Down Lists
  // const categories = inventoryList.map((category) => category.category);
  // const warehouseList = allWarehouses.map((place) => ({
  //   id: place.id,
  //   name: place.warehouse_name,
  // }));

  //States
  const item = {
    item_name: "",
    description: "",
    category: "",
    status: "Out of Stock",
    quantity: "0",
    warehouse_id: "",
  };

  const [originalStatus, setOriginalStatus] = useState(item.status);
  const [currentItem, setItem] = useState(item);

  useEffect(() => {
    setOriginalStatus(item.status);
  }, [item.status]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "radio") {
      setItem((prevItem) => ({
        ...prevItem,
        [name]: value,
        quantity: value === "Out of Stock" ? 0 : prevItem.quantity,
      }));
    } else {
      setItem((prevItem) => ({
        ...prevItem,
        [name]: name === "warehouse_id" ? Number(value) : value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Your form submission logic

    if (!currentItem.item_name || !currentItem.description) {
      alert("All fields must be filled");
      return;
    }

    if (currentItem.status === "In Stock" && currentItem.quantity === "0") {
      alert("Quantity cannot be 0");
      return;
    }

    try {
      const updatedItem = {
        warehouse_id: Number(currentItem.warehouse_id),
        item_name: String(currentItem.item_name),
        description: String(currentItem.description),
        category: String(currentItem.category),
        status: String(currentItem.status),
        quantity: String(currentItem.quantity),
      };
      const response = await axios.post(
        `${REACT_APP_API_BASE_PATH}/api/inventories/`,
        updatedItem
      );
      alert("Success! New item has been added.");
    } catch (error) {
      console.error("Error update item:", error);
    }
  };

  const handleCancel = (e) => {
    // Reset the form to initial values
    e.preventDefault();
    setItem({
      item_name: "",
      description: "",
      category: "",
      status: "Out of Stock",
      quantity: "0",
      warehouse_id: "",
    });
    return alert("form has been cleared");
  };

  // function NewDateForm() {
  return (
    <>
      <main>
        <form onSubmit={handleSubmit}>
          <section className="form">
            <h2 className="form__section__title">Date Form</h2>
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
                    // value={`${currentItem.item_name}`}
                    onChange={handleChange}
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
                    // value={`${currentItem.item_name}`}
                    onChange={handleChange}
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
                    // value={`${currentItem.item_name}`}
                    onChange={handleChange}
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
                    // value={`${currentItem.item_name}`}
                    onChange={handleChange}
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
                    // value={`${currentItem.item_name}`}
                    onChange={handleChange}
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
                    // value={`${currentItem.item_name}`}
                    onChange={handleChange}
                  ></input>
                </div>
              </div>
              <div className="form__questions-container">
                <div className="form__questions">
                  <label htmlFor="category" className="form__label">
                    How Did You Meet?
                  </label>
                  <select
                    name="category"
                    className="form__input"
                    onChange={handleChange}
                  >
                    <option>Please Select</option>
                    <option>Dating App</option>
                    <option>Mutual Friend</option>
                    <option>School</option>
                    <option>Work</option>
                    <option>Bar/Club</option>
                    <option>In the Wild</option>
                  </select>
                </div>
                <div className="form__questions">
                  <label htmlFor="category" className="form__label">
                    Status
                  </label>
                  <select
                    name="category"
                    className="form__input"
                    onChange={handleChange}
                  >
                    <option>Please Select</option>
                    <option>Talking</option>
                    <option>Complicated</option>
                    <option>FWB</option>
                    <option>Exclusive</option>
                    <option>Relationship</option>
                    <option>Over</option>
                  </select>
                </div>
                <div className="form__questions">
                  <label htmlFor="category" className="form__label">
                    Face Rating
                  </label>
                  <select
                    name="category"
                    className="form__input"
                    onChange={handleChange}
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
                </div>

                <div className="form__questions">
                  <label htmlFor="category" className="form__label">
                    Personality Rating
                  </label>
                  <select
                    name="category"
                    className="form__input"
                    onChange={handleChange}
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
                </div>

                <div className="form__questions">
                  <label className="radio__label">Date Number</label>
                  <input
                    type="radio"
                    name="status"
                    className="radio__button"
                    onChange={handleChange}
                    required
                  />
                  {"1"}
                  <input
                    type="radio"
                    name="status"
                    className="radio__button"
                    onChange={handleChange}
                    required
                  />
                  {"2"}
                  <input
                    type="radio"
                    name="status"
                    className="radio__button"
                    onChange={handleChange}
                    required
                  />
                  {"3"}
                  <input
                    type="radio"
                    name="status"
                    className="radio__button"
                    onChange={handleChange}
                    required
                  />
                  {"4"}
                  <input
                    type="radio"
                    name="status"
                    className="radio__button"
                    onChange={handleChange}
                    required
                  />
                  {"5"}
                  <input
                    type="radio"
                    name="status"
                    className="radio__button"
                    onChange={handleChange}
                    required
                  />
                  {"6+"}
                </div>

                <div className="form__questions">
                  <label className="radio__label">
                    Have You Met Their Family?
                  </label>
                  <input
                    type="radio"
                    name="family"
                    className="radio__button"
                    onChange={handleChange}
                    required
                  />
                  {"Yes"}
                  <input
                    type="radio"
                    name="family"
                    className="radio__button"
                    onChange={handleChange}
                    required
                  />
                  {"No"}
                </div>
                <div className="form__questions">
                  <label className="radio__label">
                    Have You Met Their Friends?
                  </label>
                  <input
                    type="radio"
                    name="friends"
                    className="radio__button"
                    onChange={handleChange}
                    required
                  />
                  {"Yes"}
                  <input
                    type="radio"
                    name="friends"
                    className="radio__button"
                    onChange={handleChange}
                    required
                  />
                  {"No"}
                </div>
                <div className="form__questions">
                  <label className="radio__label">
                    How many times did they make you cry?
                  </label>
                  <input
                    type="radio"
                    name="cry"
                    className="radio__button"
                    onChange={handleChange}
                    required
                  />
                  {"1"}
                  <input
                    type="radio"
                    name="cry"
                    className="radio__button"
                    onChange={handleChange}
                    required
                  />
                  {"2"}
                  <input
                    type="radio"
                    name="cry"
                    className="radio__button"
                    onChange={handleChange}
                    required
                  />
                  {"3"}
                  <input
                    type="radio"
                    name="cry"
                    className="radio__button"
                    onChange={handleChange}
                    required
                  />
                  {"4"}
                  <input
                    type="radio"
                    name="cry"
                    className="radio__button"
                    onChange={handleChange}
                    required
                  />
                  {"5"}
                  <input
                    type="radio"
                    name="cry"
                    className="radio__button"
                    onChange={handleChange}
                    required
                  />
                  {"6+"}
                </div>

                <div className="form__questions">
                  <label htmlFor="category" className="form__label">
                    Who Ended Things?
                  </label>
                  <select
                    name="category"
                    className="form__input"
                    onChange={handleChange}
                  >
                    <option>Please Select</option>
                    <option>You</option>
                    <option>Them</option>
                    <option>Mutual Ghosting</option>
                    <option>Third Party</option>
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
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>
            </div>
          </section>

          <div className="form__button__container">
            <button
              type="cancel"
              className="form__button-cancel"
              onClick={handleCancel}
            >
              CANCEL
            </button>
            <button type="submit" className="form__button-save">
              SAVE
            </button>
          </div>
        </form>
      </main>
    </>
  );
}

export default NewDateForm;
