import { useState } from "react";
import ServicesHero from "./ServicesHero/ServicesHero";
import ServicesSteps from "./servicesSteps/ServicesSteps";
import ServicesForm from "./servicesForm/ServicesForm";

const Services = () => {
  const [stepNumber, setStepNumber] = useState<number>(1);
  return (
    <>
      <ServicesHero />
      <div className="flex flex-col md:flex-row w-fit mx-auto">
        <ServicesSteps stepNumber={stepNumber} />
        <ServicesForm stepNumber={stepNumber} setStepNumber={setStepNumber} />
      </div>
    </>
  );
};

export default Services;
