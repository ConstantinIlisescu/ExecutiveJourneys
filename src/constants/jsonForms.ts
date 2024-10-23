import { FormSchema } from "@/types/FormTypes";
import * as yup from "yup";

export const serviceTypeHourly = "Hourly Rental (3 hours minimum)";
export const serviceTypeByDistance = "By distance";

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
    serviceType: {
      label: "Select Service type",
      type: "radio",
      validation: yup
        .string()
        .oneOf([serviceTypeHourly, serviceTypeByDistance])
        .required("Please select one service Type"),
      options: [serviceTypeHourly, serviceTypeByDistance],
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
  2: {},
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

export const FORM_STEP_SCHEMA_BY_DISTANCE: {
  [key: number]: { [key: string]: FormSchema };
} = {
  2: {
    pickUpDate: {
      label: "Pickup date",
      placeholder: "Enter the pick up date",
      type: "pickUpDate",
      validation: yup.date().required("Date is required"),
    },
    pickUpTime: {
      label: "Pickup time",
      placeholder: "Enter the pick up time",
      type: "pickUpTime",
      validation: yup.string().required("Time is required"),
    },
    whereFrom: {
      label: "Where from",
      placeholder: "Enter your pick up address",
      type: "pickup",
      validation: yup.string().required("Pick up location is required"),
    },
    whereTo: {
      label: "Where to",
      placeholder: "Enter your destination address",
      type: "dropOff",
      validation: yup.string().required("Destination address is required"),
    },
  },
};

export const FORM_STEP_SCHEMA_HOURLY: {
  [key: number]: { [key: string]: FormSchema };
} = {
  2: {
    pickUpDate: {
      label: "Pickup date",
      placeholder: "Enter the pick up date",
      type: "pickUpDate",
      validation: yup.date().required("Date is required"),
    },
    pickUpTime: {
      label: "Pickup time",
      placeholder: "Enter the pick up time",
      type: "pickUpTime",
      validation: yup.string().required("Time is required"),
    },
    numberOfHours: {
      label: "Number of hours",
      placeholder: "Enter the number of hours",
      type: "numberOfHours",
      validation: yup
        .number()
        .required("Number of hours is required")
        .min(3, "The number must be at least 3")
        .typeError("You must enter a valid number"),
    },
    whereFrom: {
      label: "Where from",
      placeholder: "Enter your pick up address",
      type: "pickup",
      validation: yup.string().required("Pick up location is required"),
    },
  },
};
