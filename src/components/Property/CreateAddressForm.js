/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable quotes */
import React, { useState } from "react";
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { createAddress } from "../../redux/address/addressSlice";

const CreateAddressForm = ({ onNext, propertyId }) => {
  const [address, setAddress] = useState({
    house_number: "",
    street: "",
    city: "",
    state: "",
    country: "",
    zip_code: "",
    property_id: propertyId,
  });
  console.log(propertyId);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createAddress(address))
      .then(() => {
        onNext(propertyId);
      })
      .catch((error) => {
        console.log(error);
        // Handle error if needed
      });
  };

  return (
    <div>
      <h2>Create Address</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="house_number">House Number:</label>
          <input
            type="text"
            id="house_number"
            name="house_number"
            value={address.house_number}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="street">Street:</label>
          <input
            type="text"
            id="street"
            name="street"
            value={address.street}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={address.city}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="state">State:</label>
          <input
            type="text"
            id="state"
            name="state"
            value={address.state}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            name="country"
            value={address.country}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="zip_code">Zip Code:</label>
          <input
            type="text"
            id="zip_code"
            name="zip_code"
            value={address.zip_code}
            onChange={handleChange}
          />
        </div>
        {/* Add other address fields here... */}
        <button type="submit">
          Create Address
        </button>
      </form>
    </div>
  );
};
CreateAddressForm.propTypes = {
  onNext: PropTypes.func.isRequired,
  propertyId: PropTypes.number.isRequired,
};

export default CreateAddressForm;
