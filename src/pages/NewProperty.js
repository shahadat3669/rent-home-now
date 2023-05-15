/* eslint-disable quotes */
import React from "react";
import CreatePropertyForm from "../components/Property/CreatePropertyForm";
import CreateAddressForm from "../components/Property/CreateAddressForm";
import CreateReservationCriteriaForm from "../components/Property/CreateReservationCriteriaForm";

const NewProperty = () => (
  <div>
    <CreatePropertyForm />
    <CreateAddressForm />
    <CreateReservationCriteriaForm />
  </div>
);

export default NewProperty;
