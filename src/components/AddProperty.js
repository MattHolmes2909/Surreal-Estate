import React, { useState } from "react";
import "../styles/AddProperty.css";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
      type: "Flat",
      bathrooms: "",
      bedrooms: "",
      price: "",
      email: "",
    },
  };
  const [fields, setFields] = useState(initialState.fields);

  const handleAddProperty = (event) => {
    event.preventDefault();
    console.log(fields);
  };

  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };

  return (
    <div className="AddProperty">
      <form onSubmit={handleAddProperty}>
        <p className="form">Add Property</p>
        <label htmlFor="title">
          Search:
          <input
            className="form-title"
            id="title"
            name="title"
            value={fields.title}
            onChange={handleFieldChange}
          />
        </label>
        <div className="form-type">
          Type of Property:
          <label htmlFor="type">
            <select
              id="type"
              name="type"
              value={fields.type}
              onChange={handleFieldChange}
            >
              <option value="Flat">Flat</option>
              <option value="Detached">Detached</option>
              <option value="Semi-Detached">Semi-Detached</option>
              <option value="Terraced">Terraced</option>
              <option value="End of Terrace">End of Terrace</option>
              <option value="Cottage">Cottage</option>
              <option value="Bungalow">Bungalow</option>
            </select>
          </label>
        </div>
        <div className="form-bedrooms">
          <label htmlFor="bedrooms">
            Bedrooms:
            <input
              className="bed-forms"
              placeholder="3"
              autoComplete="none"
              type="number"
              id="bedrooms"
              name="bedrooms"
              value={fields.bedrooms}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="form-bathrooms">
          <label htmlFor="bathrooms">
            Bathrooms:
            <input
              className="bath-forms"
              placeholder="2"
              autoComplete="none"
              type="number"
              id="bathrooms"
              name="bathrooms"
              value={fields.bathrooms}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="form-price">
          <label htmlFor="price">
            Price:
            <input
              className="price"
              placeholder="300000"
              autoComplete="none"
              type="number"
              id="price"
              name="price"
              value={fields.price}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="form-city">
          <label htmlFor="city">
            City:
            <select
              id="city"
              name="city"
              value={fields.city}
              onChange={handleFieldChange}
            >
              <option value="Manchester">Manchester</option>
              <option value="Leeds">Leeds</option>
              <option value="Sheffield">Sheffield</option>
              <option value="Liverpool">Liverpool</option>
            </select>
          </label>
        </div>
        <div className="form-email">
          <label htmlFor="email">
            Email:
            <input
              className="email"
              placeholder="your.email@email.com"
              autoComplete="none"
              type="email"
              id="email"
              name="email"
              value={fields.email}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <button className="add-btn" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddProperty;
