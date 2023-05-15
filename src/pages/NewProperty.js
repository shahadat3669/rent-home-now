import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CreatePropertyForm from '../components/Property/CreatePropertyForm';
import CreateAddressForm from '../components/Property/CreateAddressForm';
import CreateReservationCriteriaForm from '../components/Property/CreateReservationCriteriaForm';

const NewProperty = () => {
  const [propertyId, setPropertyId] = useState(null);
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handleNext = () => {
    setStep(step + 1);
  };

  const onComplete = () => {
    navigate('/');
  };

  return (
    <div className="d-flex flex-column gap-5">
      {step === 1 && (
        <CreatePropertyForm onNext={handleNext} setPropertyId={setPropertyId} />
      )}
      {step === 2 && (
        <CreateAddressForm onNext={handleNext} propertyId={propertyId} />
      )}
      {step === 3 && (
        <CreateReservationCriteriaForm
          onComplete={onComplete}
          propertyId={propertyId}
        />
      )}
    </div>
  );
};

export default NewProperty;
