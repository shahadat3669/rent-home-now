import React from 'react';
import { useSelector } from 'react-redux';
import { getUserReservations } from '../redux/user/userSlice';
import { selectProperties } from '../redux/properties/propertiesSlice';
import '../styles/myReservations.css';

function MyReservations() {
  const reservations = useSelector(getUserReservations);
  const properties = useSelector(selectProperties);

  return (
    <div>
      <h3 className="text-center my-3">MyReservations</h3>
      <div className="d-flex flex-wrap">
        {reservations.map((reservation) => {
          const property = properties.data.find(
            (property) => property.id === reservation.property_id,
          );

          return (
            <div className="card mb-3 reservation_card mx-auto" key={reservation.id}>
              <div className="row g-0">
                <div className="col-md-4">
                  <img className="reservation_thumb" src={property.images[0].source} alt={property.name} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    {property && (
                      <h5 className="card-title">
                        Property:
                        {property.name}
                      </h5>
                    )}
                    <br />
                    <span className="card-text">
                      Price:
                      {reservation.price}
                    </span>
                    <br />
                    <span className="card-text">
                      Reserved in:
                      {reservation.created_at.slice(0, 10)}
                    </span>
                    <br />
                    <span className="card-text">
                      Start day:
                      {reservation.start_date}
                    </span>
                    <br />
                    <span className="card-text">
                      Finish day:
                      {reservation.end_date}
                    </span>
                    <br />

                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MyReservations;
