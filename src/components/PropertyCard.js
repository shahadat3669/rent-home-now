/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable comma-dangle */
/* eslint-disable quotes */
import React from "react";
import PropTypes from "prop-types";
import { FaFacebook, FaFacebookF, FaTiktok, FaTwitter } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";

export default function PropertyCard({ property }) {
  return (
    <div className="property-card">
      <div className="property-image-back">
        <img
          src={property.images[0].source}
          alt={property.name}
          className="property-image"
        />
      </div>
      <h3 className="property-name">{property.name}</h3>
      <p className="property-description text-align-center">
        {property.description}
      </p>
      <div className="property-social">
        <span className="property-social-icon">
          <FaFacebookF color="gray" />
        </span>
        <span className="property-social-icon">
          <FiTwitter />
        </span>
        <span className="property-social-icon">
          <FaTiktok />
        </span>
      </div>
    </div>
  );
}
PropertyCard.propTypes = {
  property: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    no_baths: PropTypes.number,
    no_bedrooms: PropTypes.number,
    no_beds: PropTypes.number,
    description: PropTypes.string,
    user: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      avatar: PropTypes.string,
    }),
    category: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
    images: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        source: PropTypes.string,
      })
    ),
  }).isRequired,
};
