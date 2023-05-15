/* eslint-disable quotes */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import PropTypes from 'prop-types';
import { createProperty } from '../../redux/properties/propertiesSlice';

const CreatePropertyForm = ({ onNext }) => {
  const [property, setProperty] = useState({
    name: "",
    description: "",
    no_bedrooms: 0,
    no_baths: 0,
    no_beds: 0,
    area: 0,
    user_id: 1,
    category_id: 1,
    // Add other property fields here...
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProperty(property))
      .then(() => {
        onNext();
      })
      .catch((error) => {
        console.log(error);
        // Handle error if needed
      });
  };

  return (
    <div>
      <h2>Create Property</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={property.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={property.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="no_bedrooms">Number of Bedrooms:</label>
          <input
            type="number"
            id="no_bedrooms"
            name="no_bedrooms"
            value={property.no_bedrooms}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="no_baths">Number of Baths:</label>
          <input
            type="number"
            id="no_baths"
            name="no_baths"
            value={property.no_baths}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="no_beds">Number of Beds:</label>
          <input
            type="number"
            id="no_beds"
            name="no_beds"
            value={property.no_beds}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="area">Area:</label>
          <input
            type="number"
            id="area"
            name="area"
            value={property.area}
            onChange={handleChange}
          />
        </div>
        {/* Add other property fields here... */}
        <button type="submit">
          Create Property
        </button>
      </form>
    </div>
  );
};
CreatePropertyForm.propTypes = {
  onNext: PropTypes.func.isRequired,
};

export default CreatePropertyForm;
