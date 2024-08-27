import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Progress } from "@/components/ui/progress";
import "./ServicesForm.css";
import { getValidationSchema } from "@/lib/formUtils";
import { FORM_STEP_SCHEMA } from "@/constants/jsonForms";
import { FormData, FormSchema } from "@/types/FormTypes";

interface ServicesFormProp {
  stepNumber: number;
  setStepNumber: React.Dispatch<React.SetStateAction<number>>;
}

const ServicesForm = ({ stepNumber, setStepNumber }: ServicesFormProp) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(getValidationSchema(stepNumber)),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (stepNumber === 1) {
      console.log("Step 1 data:", data);
      setStepNumber(2); // Move to the next step
    } else if (stepNumber === 2) {
      console.log("Step 2 data:", data);
      setStepNumber(3); // Move to the final step
    } else {
      console.log("Final data:", data);
      // Submit the form data
    }
  };

  const renderField = (name: string, field: FormSchema) => {
    switch (field.type) {
      case "text":
      case "email":
      case "tel":
        return (
          <div className="mb-4" key={name}>
            <label className="block mb-2">{field.label}</label>
            <input
              {...register(name as keyof FormData)}
              className="border p-2 w-full"
              placeholder={field.placeholder}
            />
            {errors[name as keyof FormData] && (
              <p className="text-red-500">
                {errors[name as keyof FormData]?.message as string}
              </p>
            )}
          </div>
        );
      case "radio":
        return (
          <div className="mb-4" key={name}>
            <label className="block mb-2">{field.label}</label>
            <div>
              {field.options?.map((option: string) => (
                <label key={option} className="mr-4">
                  <input
                    {...register(name as keyof FormData)}
                    type="radio"
                    value={option}
                  />{" "}
                  {option}
                </label>
              ))}
            </div>
            {errors[name as keyof FormData] && (
              <p className="text-red-500">
                {errors[name as keyof FormData]?.message as string}
              </p>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-4 w-96 max-w-lg mx-auto">
      <div>
        <h4 className="montserrat-medium text-xs text-dark">
          Step {stepNumber} of 3
        </h4>
        <Progress value={stepNumber * 33} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {Object.keys(FORM_STEP_SCHEMA[stepNumber]).map((key) =>
          renderField(key, FORM_STEP_SCHEMA[stepNumber][key])
        )}
        <div className="flex flex-row justify-between">
          <button
            type="button"
            onClick={() => setStepNumber(stepNumber - 1)}
            className={` ${
              stepNumber === 1 ? "button-bg-primary-muted" : "button-bg-primary"
            } text-nowrap  px-10 py-2 rounded-full text-xl shadow-lg h-fit`}
            disabled={stepNumber === 1}
          >
            Back
          </button>
          <button
            type="submit"
            className="button-bg-primary text-nowrap  px-10 py-2 rounded-full text-xl  shadow-lg h-fit"
          >
            {stepNumber === 3 ? "Submit" : "Next"}
          </button>
        </div>

        {/* {stepNumber !== 3 ? (
          <div className="flex flex-row justify-between">
            <button
              onClick={() => setStepNumber(stepNumber - 1)}
              className={` ${
                stepNumber === 1
                  ? "button-bg-primary-muted"
                  : "button-bg-primary"
              } text-nowrap  px-10 py-2 rounded-full text-xl shadow-lg h-fit`}
              disabled={stepNumber === 1}
            >
              Back
            </button>
            <button
              onClick={() => setStepNumber(stepNumber + 1)}
              className="button-bg-primary text-nowrap  px-10 py-2 rounded-full text-xl shadow-lg h-fit"
            >
              Next
            </button>
          </div>
        ) : (
          <button
            type="submit"
            className="button-bg-primary text-nowrap  px-10 py-2 rounded-full text-xl shadow-lg h-fit"
          >
            Submit
          </button>
        )} */}
      </form>
    </div>
  );
};

export default ServicesForm;
