/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";
import {
  deleteProperty,
  getPropertiesByUser,
  updateProperty,
} from "../redux/properties/propertiesSlice";
import ModalComponent from "../components/ModalComponent";

export default function MyProperty() {
  const dispatch = useDispatch();
  const properties = useSelector((state) => state.properties);

  useEffect(() => {
    // Assume userId is obtained from the logged-in user
    const userId = "123";

    dispatch(getPropertiesByUser(userId));
  }, []);
  const [selectedProperty, setSelectedProperty] = useState(null);

  const handleDeleteClick = (property) => {
    setSelectedProperty(property);
  };

  const handleConfirmDelete = () => {
    dispatch(deleteProperty(selectedProperty.id))
      .then(() => {
        // Property deleted successfully
        setSelectedProperty(null);
      })
      .catch((error) => {
        // Handle error cases
        console.error(error);
      });
  };
  const [showEditModal, setShowEditModal] = useState(false);

  return (
    <div className="d-flex flex-column border">
      <div className="d-flex py-2 mx-2 gap-3">
        <Link to="/new-property">
          <button type="button" className="btn btn-primary p-2">
            New Reservation
          </button>
        </Link>
      </div>
      <div className="card-deck row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 p-4">
        {properties.data.map((property) => (
          <div className="col card-deck" key={property.id}>
            <div className="card" style={{ width: "22rem" }}>
              {property.images.length > 0 && (
                <img
                  src={property.images[0].source}
                  className="card-img-top"
                  alt="..."
                  style={{ height: "200px", objectFit: "cover" }}
                />
              )}
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{property.name}</h5>
                <p className="card-text">{property.description}</p>
                <div className="d-flex justify-content-between">
                  <p>
                    Rate: $
                    {property.reservation_criteria.rate}
                  </p>
                  <p>
                    Others Fee: $
                    {property.reservation_criteria.others_fee}
                  </p>
                </div>
                <span>Address</span>
                {property.address && (
                <p className="d-flex gap-1">
                  <span>
                    {property.address.zip_code}
                    ,
                  </span>
                  <span>
                    {property.address.street}
                    ,
                  </span>
                  <span>{property.address.state}</span>
                </p>
                )}
                <div className="d-flex gap-3">
                  <button
                    type="button"
                    className="btn btn-primary rounded-circle p-2"
                    onClick={() => setShowEditModal(true)}
                  >
                    <FiEdit />
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger rounded-circle p-2"
                    onClick={() => {
                      handleDeleteClick(property);
                    }}
                  >
                    <FiTrash2 />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        {selectedProperty && (
          <div className="modal-dialog modal-dialog-centered">
            {/* Render your modal component here */}
            <ModalComponent
              property={selectedProperty}
              onConfirmDelete={handleConfirmDelete}
              onClose={() => setSelectedProperty(null)}
            />
          </div>
        )}
      </div>
    </div>
  );
}
