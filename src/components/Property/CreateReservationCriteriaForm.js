/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { createReservationCriteria } from '../../redux/properties/reservationCriteriaSlice';

const CreateReservationCriteriaForm = ({ onComplete }) => {
  const [reservationCriteria, setReservationCriteria] = useState({
    time_period: '',
    others_fee: 0,
    min_time_period: 0,
    max_guest: 0,
    rate: 0,
    property_id: 0,
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservationCriteria((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createReservationCriteria(reservationCriteria))
      .then(() => {
        onComplete();
      })
      .catch((error) => {
        console.log(error);
        // Handle error if needed
      });
  };

  return (
    <div>
      <h2>Create Reservation Criteria</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="time_period">Time Period:</label>
          <input type="text" id="time_period" name="time_period" value={reservationCriteria.time_period} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="others_fee">Others Fee:</label>
          <input type="number" id="others_fee" name="others_fee" value={reservationCriteria.others_fee} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="min_time_period">Minimum Time Period:</label>
          <input type="number" id="min_time_period" name="min_time_period" value={reservationCriteria.min_time_period} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="max_guest">Maximum Guest:</label>
          <input type="number" id="max_guest" name="max_guest" value={reservationCriteria.max_guest} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="rate">Rate:</label>
          <input type="number" id="rate" name="rate" value={reservationCriteria.rate} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="property_id">Property ID:</label>
          <input type="number" id="property_id" name="property_id" value={reservationCriteria.property_id} onChange={handleChange} />
        </div>
        <button type="submit">Create Reservation Criteria</button>
      </form>
    </div>
  );
};
CreateReservationCriteriaForm.propTypes = {
  onComplete: PropTypes.func.isRequired,
};

export default CreateReservationCriteriaForm;
