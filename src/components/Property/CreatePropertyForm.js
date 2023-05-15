/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  createProperty,
  fetchCategories,
} from '../../redux/properties/propertiesSlice';

const CreatePropertyForm = ({ onNext, setPropertyId }) => {
  const categories = useSelector((state) => state.properties.categories);
  const loading = useSelector((state) => state.properties.loading);
  const error = useSelector((state) => state.properties.error);

  const [property, setProperty] = useState({
    name: '',
    description: '',
    no_bedrooms: 0,
    no_baths: 0,
    no_beds: 0,
    area: 0,
    user_id: 1,
    images: [],
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createProperty(property))
      .then(() => {
        onNext();
        setPropertyId(2);
      })
      .catch((error) => {
        console.log(error);
        // Handle error if needed
      });
  };

  return (
    <div className="d-flex flex-column">
      <h2 className="d-flex justify-content-center">Create Property</h2>
      <div className="d-flex mx-auto">
        <form onSubmit={handleSubmit} className="fluid-container">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={property.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              value={property.description}
              onChange={handleChange}
              required
            />
          </div>
          <div className="row g-3">
            <div className="col-md-4">
              <label htmlFor="no_bedrooms" className="form-label">
                No. of Bedrooms
              </label>
              <input
                type="number"
                className="form-control"
                id="no_bedrooms"
                name="no_bedrooms"
                value={property.no_bedrooms}
                onChange={handleChange}
                min={1}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="no_baths" className="form-label">
                No. of Baths
              </label>
              <input
                type="number"
                className="form-control"
                id="no_baths"
                name="no_baths"
                value={property.no_baths}
                onChange={handleChange}
                min={1}
              />
            </div>
            <div className="col-md-4">
              <label htmlFor="no_beds" className="form-label">
                No. of Beds
              </label>
              <input
                type="number"
                className="form-control"
                id="no_beds"
                name="no_beds"
                value={property.no_beds}
                onChange={handleChange}
                min={1}
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="area" className="form-label">
              Area (in sq. ft.)
            </label>
            <input
              type="number"
              className="form-control"
              id="area"
              name="area"
              value={property.area}
              onChange={handleChange}
              min={1}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="category_id" className="form-label">
              Category
            </label>
            <select
              className="form-select"
              id="category_id"
              name="category_id"
              value={property.id}
              onChange={handleChange}
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Creating...' : 'Create'}
          </button>
          {error && <div className="text-danger mt-2">{error}</div>}
        </form>
      </div>
    </div>
  );
};
CreatePropertyForm.propTypes = {
  onNext: PropTypes.func.isRequired,
  setPropertyId: PropTypes.func.isRequired,
};

export default CreatePropertyForm;
