import React from "react";
import "./ServicesForm.css";
interface ServicesFormProp {
  stepNumber: number;
  setStepNumber: React.Dispatch<React.SetStateAction<number>>;
}

const ServicesForm = ({ stepNumber }: ServicesFormProp) => {
  return (
    <div>
      <div>
        <h4 className="montserrat-medium text-xs text-dark">
          Step {stepNumber} of 3
        </h4>
      </div>
    </div>
  );
};

export default ServicesForm;
