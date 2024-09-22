import * as yup from "yup";

export interface FormData {
  firstName?: string;
  lastName?: string;
  email?: string;
  confirmEmail?: string;
  contactNumber?: string;
  pickUpDate?: string;
  pickUpTime?: string;
  whereFrom?: string;
  whereTo?: string;
}

export interface FormSchema {
  label?: string;
  placeholder?: string;
  type: string;
  validation: yup.AnySchema;
  options?: string[];
}
