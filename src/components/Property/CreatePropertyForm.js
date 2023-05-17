/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';

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
  const [errors, setErrors] = useState({});
  const toastId = React.useRef(null);

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
    console.log('Dispatching fetchCategories action');
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty((prevState) => ({ ...prevState, [name]: value }));
    setErrors((prevState) => ({ ...prevState, [name]: null }));
  };
  const isValidUrl = (url) => {
    const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
    return urlPattern.test(url);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const imageErrors = {};
    property.images.forEach((image, index) => {
      if (!isValidUrl(image)) {
        imageErrors[`image_${index}`] = 'Invalid URL';
      }
    });

    if (property.images.length === 0) {
      imageErrors.images = 'Please add at least one image';
    }

    if (Object.keys(imageErrors).length > 0) {
      setErrors((prevState) => ({ ...prevState, ...imageErrors }));
    } else {
      dispatch(createProperty(property))
        .then((response) => {
          const { payload } = response;
          onNext();
          setPropertyId(payload.id);
          if (!loading && !error) {
            toastId.current = toast.success('Create property Successfully', {
              position: 'top-right',
              autoClose: 4000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: true,
              theme: 'light',
            });
          }
        })
        .catch((error) => {
          if (error) {
            toastId.current = toast.error(
              'Create Property is not Successfully',
              {
                position: 'top-right',
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                theme: 'light',
              },
            );
          }
        });
    }
  };
  const handleImageChange = (e, index) => {
    const { value } = e.target;

    // Validate image link
    const isValid = isValidUrl(value);

    setProperty((prevState) => {
      const updatedImages = [...prevState.images];
      updatedImages[index] = value;
      return { ...prevState, images: updatedImages };
    });

    setErrors((prevState) => {
      const updatedErrors = { ...prevState };
      updatedErrors[`image_${index}`] = isValid ? null : 'Invalid URL';
      return updatedErrors;
    });
  };

  const handleAddImage = () => {
    setProperty((prevState) => ({
      ...prevState,
      images: [...prevState.images, ''],
    }));
  };

  const handleRemoveImage = (index) => {
    setProperty((prevState) => {
      const updatedImages = [...prevState.images];
      updatedImages.splice(index, 1);
      return { ...prevState, images: updatedImages };
    });
  };
  // Check if there are any errors
  const hasErrors = Object.values(errors).some((error) => error !== null);

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
          {error && <div className="text-danger mt-2">{error}</div>}
          <div className="mb-3">
            <label className="form-label m-1">Images</label>
            {property.images.map((image, index) => {
              const key = `image_${index}`; // Assign a fixed unique key for each input element

              return (
                <div key={key} className="input-group mb-2">
                  <input
                    type="text"
                    className={`form-control ${errors[key] && 'is-invalid'}`}
                    placeholder="Image Link"
                    value={image}
                    onChange={(e) => handleImageChange(e, index)}
                  />
                  {errors[key] && (
                    <div className="invalid-feedback">{errors[key]}</div>
                  )}
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => handleRemoveImage(index)}
                  >
                    Remove
                  </button>
                </div>
              );
            })}

            <button
              type="button"
              className="btn btn-sm btn-outline-primary"
              onClick={handleAddImage}
            >
              Add Image
            </button>
          </div>
          {Object.keys(errors).length > 0 && hasErrors && (
            <div className="alert alert-danger" role="alert">
              {Object.values(errors).map((error) => (
                <p key={uuidv4()}>{error}</p>
              ))}
            </div>
          )}

          <button type="submit" className="btn btn-primary">
            {loading ? 'Creating...' : 'Create'}
          </button>
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
