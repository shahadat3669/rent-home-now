import React from 'react';
import PropTypes from 'prop-types';
import { FaFacebookF, FaTiktok } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function PropertyCard({ property }) {
  return (
    <div className="property-card">
      <div className="property-image-back">
        {property.images.length > 0 && (
          <img
            src={property.images[0].source}
            alt={property.name}
            className="property-image"
          />
        )}
      </div>
      <Link
        to={`detail/${property.id}`}
        className="property-name fs-3 fw-bold text-dark text-decoration-none"
      >
        {property.name}
      </Link>
      <span className="text-muted text-center p-3">
        ............................
      </span>
      <p className="property-description text-center">{property.description}</p>
      <div className="property-social text-muted">
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
      }),
    ),
  }).isRequired,
};
