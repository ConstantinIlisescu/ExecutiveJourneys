import * as yup from "yup";

export interface FormData {
  firstName?: string;
  lastName?: string;
  bookingType?: "Personal" | "Business";
  email?: string;
  confirmEmail?: string;
  contactNumber?: string;
}

export interface FormSchema {
  label: string;
  placeholder?: string;
  type: string;
  validation: yup.AnySchema;
  options?: string[];
}
