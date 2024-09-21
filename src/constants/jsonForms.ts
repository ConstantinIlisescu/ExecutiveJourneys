import { FormSchema } from "@/types/FormTypes";
import * as yup from "yup";

export const FORM_STEP_SCHEMA: {
  [key: number]: { [key: string]: FormSchema };
} = {
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
    // bookingType: {
    //   label: "Booking Type",
    //   type: "radio",
    //   validation: yup
    //     .string()
    //     .oneOf(["Personal", "Business"])
    //     .required("Booking type is required"),
    //   options: ["Personal", "Business"],
    // },
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
  2: {
    whereTo: {
      label: "Where from",
      placeholder: "Enter your pick up address",
      type: "pickup",
      validation: yup.string().required("Is required"),
    },
    whereFrom: {
      label: "Where to",
      placeholder: "Enter your destination address",
      type: "dropOff",
      validation: yup.string().required("Is required"),
    },
  },
  3: {
    confirmIsValidData: {
      type: "radio",
      validation: yup
        .string()
        .oneOf(["Confirm the data is correct."])
        .required(
          "Please check the data and tick the box to confirm the data is correct"
        ),
      options: ["Confirm the data is correct."],
    },
  },
  // Add schemas for other steps as needed
};
