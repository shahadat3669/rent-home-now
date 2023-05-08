import React from 'react';
// import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
import { FaBed, FaBath } from 'react-icons/fa';
import { MdMeetingRoom } from 'react-icons/md';

const Details = () => {
  // const params = useParams();
  // const { id } = params;
  // const properties = useSelector((state) => state.PropertiesReducer);

  // const filtered = [...properties].filter(
  //   (data) => data.id === id,
  // );
  const filtered = {
    id: 1,
    name: 'property-name',
    description: 'property-description',
    no_bedrooms: 2,
    no_baths: 2,
    no_beds: 3,
    area: 100,
    user_id: 1,
    category_id: 1,
    address_attributes: {
      city: 'New York',
      state: 'NY',
      street: '123 Main St',
      house_number: 'Apt 2B',
      country: 'USA',
      zip_code: '10001',
    },
    category: {
      name: 'Apartment',
    },
    reservation_criteria: {
      time_period: 'Week',
      others_fee: 100,
      min_time_period: 3,
      max_guest: 4,
      rate: 200,
    },
    property_images: {
      1: 'https://www.bienesonline.com/mexico/photos/casa-venta-xalapa-enriquez-cav6170313529484170.jpg',
      2: 'https://www.bienesonline.com/mexico/photos/casa-venta-xalapa-enriquez-cav6170313529484171.jpg',
    },
  };

  return (
    <div className="d-flex flex-md-row flex-column mt-5 container">
      <div key={filtered.id} className="image">
        <img className="w-100" src={filtered.property_images[1]} alt="property" />
      </div>

      <div className="table_width">
        <div>
          <h1 className="text-center">{filtered.name}</h1>
          <p className="text-center">{filtered.category.name}</p>
          <p className="text-center">{filtered.description}</p>
        </div>

        <p>
          <button id="address_btn" className="btn text-white lg_button disable primary_bg" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            Address
          </button>
        </p>
        <div className="collapse" id="collapseExample">
          <div className="card card-body">
            Country:&nbsp;
            {filtered.address_attributes.country}
            <br />
            City:&nbsp;
            {filtered.address_attributes.city}
            <br />
            State:&nbsp;
            {filtered.address_attributes.state}
            <br />
            Street:&nbsp;
            {filtered.address_attributes.street}
            {filtered.address_attributes.house_number}
            <br />
            ZIP:&nbsp;
            {filtered.address_attributes.zip_code}
          </div>
        </div>

        <h5 className="text-center">General Attributes</h5>
        <table className="table table-striped table-hover grey_bg">
          <tbody>
            <tr>
              <th className="text-center" scope="row">
                <MdMeetingRoom size={20} />
              </th>
              <td className="text-center">{filtered.no_bedrooms}</td>
            </tr>
            <tr>
              <th className="text-center" scope="row">
                <FaBath size={20} />
              </th>
              <td className="text-center">{filtered.no_baths}</td>
            </tr>
            <tr>
              <th className="text-center" scope="row">
                <FaBed size={20} />
              </th>
              <td className="text-center">{filtered.no_beds}</td>
            </tr>
          </tbody>
        </table>

        <h5 className="text-center">Reservation Criteria</h5>
        <table className="table table-striped table-hover grey_bg">
          <tbody>
            <tr>
              <th className="text-center" scope="row">Min Time Period</th>
              <td className="text-center">
                {filtered.reservation_criteria.min_time_period}
                &nbsp;
                {filtered.reservation_criteria.time_period}
              </td>
            </tr>
            <tr>
              <th className="text-center" scope="row">Max. Guests</th>
              <td className="text-center">{filtered.reservation_criteria.max_guest}</td>
            </tr>
            <tr>
              <th className="text-center" scope="row">Rate</th>
              <td className="text-center">
                U$
                {filtered.reservation_criteria.rate}
              </td>
            </tr>
            <tr>
              <th className="text-center" scope="row">Other Fee</th>
              <td className="text-center">
                U$
                {filtered.reservation_criteria.others_fee}
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <a id="reserve_btn" className="btn primary_bg text-white lg_button" href="#">Reserve</a>
      </div>
    </div>
  );
};

export default Details;
