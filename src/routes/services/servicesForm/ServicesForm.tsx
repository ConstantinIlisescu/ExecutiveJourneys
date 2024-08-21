import React from "react";
import { Progress } from "@/components/ui/progress";
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
        <Progress value={stepNumber * 33} />
      </div>
    </div>
  );
};

export default ServicesForm;
