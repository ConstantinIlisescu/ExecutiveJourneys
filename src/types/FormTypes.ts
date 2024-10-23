import * as yup from "yup";

export interface FormData {
  firstName?: string;
  lastName?: string;
  email?: string;
  serviceType?: string;
  confirmEmail?: string;
  contactNumber?: string;
  pickUpDate?: Date;
  pickUpTime?: string;
  whereFrom?: string;
  whereTo?: string;
  numberOfHours?: number;
}

export interface FormSchema {
  label?: string;
  placeholder?: string;
  type: string;
  validation: yup.AnySchema;
  options?: string[];
}
