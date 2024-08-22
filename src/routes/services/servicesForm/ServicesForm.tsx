import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Progress } from "@/components/ui/progress";
import "./ServicesForm.css";
interface ServicesFormProp {
  stepNumber: number;
  setStepNumber: React.Dispatch<React.SetStateAction<number>>;
}

type FormData = {
  firstName?: string;
  lastName?: string;
  bookingType?: "Personal" | "Business";
  email?: string;
  confirmEmail?: string;
  contactNumber?: string;
};

type FormSchema = {
  label: string;
  placeholder?: string;
  type: string;
  validation: yup.AnySchema;
  options?: string[];
};

const stepSchemas: { [key: number]: { [key: string]: FormSchema } } = {
  1: {
    firstName: {
      label: "First Name",
      placeholder: "Enter your first name",
      type: "text",
      validation: yup
        .string()
        .min(2, "First name must be at least 2 characters")
        .required("First name is required"),
    },
    lastName: {
      label: "Last Name",
      placeholder: "Enter your last name",
      type: "text",
      validation: yup
        .string()
        .min(2, "Last name must be at least 2 characters")
        .required("Last name is required"),
    },
    bookingType: {
      label: "Booking Type",
      type: "radio",
      validation: yup
        .string()
        .oneOf(["Personal", "Business"])
        .required("Booking type is required"),
      options: ["Personal", "Business"],
    },
    email: {
      label: "Email",
      placeholder: "Enter your email",
      type: "email",
      validation: yup
        .string()
        .email("Invalid email")
        .required("Email is required"),
    },
    confirmEmail: {
      label: "Confirm Email",
      placeholder: "Confirm your email",
      type: "email",
      validation: yup
        .string()
        .oneOf([yup.ref("email"), undefined], "Emails must match")
        .required("Confirm email is required"),
    },
    contactNumber: {
      label: "Contact Number",
      placeholder: "Enter your contact number",
      type: "tel",
      validation: yup
        .string()
        .matches(/^(?:\+44|0)?(7\d{9})$/, "Invalid UK contact number")
        .required("Contact number is required"),
    },
  },
  // Add schemas for other steps as needed
};

const getValidationSchema = (step: number) => {
  const schema = stepSchemas[step];
  const validationSchema: { [key: string]: yup.AnySchema } = {};

  Object.keys(schema).forEach((key) => {
    validationSchema[key] = schema[key].validation;
  });

  return yup.object().shape(validationSchema);
};

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
    <div className="p-4 max-w-lg mx-auto">
      <div>
        <h4 className="montserrat-medium text-xs text-dark">
          Step {stepNumber} of 3
        </h4>
        <Progress value={stepNumber * 33} />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {Object.keys(stepSchemas[stepNumber]).map((key) =>
          renderField(key, stepSchemas[stepNumber][key])
        )}
        <button
          type="submit"
          className="button-bg-primary text-nowrap  px-10 py-3 rounded-full text-xl  shadow-lg h-fit"
        >
          {stepNumber === 3 ? "Submit" : "Next"}
        </button>
      </form>
    </div>
  );
};

export default ServicesForm;
