/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import {
  deleteProperty,
  getPropertiesByUser,
} from "../redux/properties/propertiesSlice";
import ModalComponent from "../components/ModalComponent";
import { getUser } from '../redux/user/userSlice';

export default function MyProperty() {
  const dispatch = useDispatch();
  const properties = useSelector((state) => state.properties);
  const user = useSelector(getUser);

  const filteredProperties = properties.data.filter((property) => property.user_id === user.id);

  useEffect(() => {
    const userId = user.id;
    dispatch(getPropertiesByUser(userId));
  }, []);
  const [selectedProperty, setSelectedProperty] = useState(null);

  const handleDeleteClick = (property) => {
    setSelectedProperty(property);
  };

  const handleConfirmDelete = () => {
    dispatch(deleteProperty(selectedProperty.id))
      .then(() => {
        setSelectedProperty(null);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="d-flex flex-column border">
      <div className="d-flex py-2 mx-2 gap-3">
        <Link to="/new-property">
          <button type="button" className="btn btn-primary p-2">
            New Reservation
          </button>
        </Link>
        <Link to="/new-property">
          <button type="button" className="btn btn-secondary p-2">
            New Property
          </button>
        </Link>
      </div>
      <div className="card-deck d-flex flex-wrap">
        {filteredProperties.map((property) => (
          <div className="col card-deck mx-auto" key={property.id}>
            <div className="card mx-auto" style={{ width: "22rem" }}>
              {property.images.length > 0 && (
                <img
                  src={property.images[0] ? property.images[0].source : []}
                  className="card-img-top"
                  alt="..."
                  style={{ height: "200px", objectFit: "cover" }}
                />
              )}
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{property.name}</h5>
                <p className="card-text">{property.description}</p>
                <div className="d-flex gap-3">
                  <button
                    type="button"
                    className="btn btn-primary rounded-circle p-2"
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
