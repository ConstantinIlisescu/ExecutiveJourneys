import { FORM_STEP_SCHEMA } from "@/constants/jsonForms";
import * as yup from "yup";

export const getValidationSchema = (step: number) => {
  const schema = FORM_STEP_SCHEMA[step];
  const validationSchema: { [key: string]: yup.AnySchema } = {};

  Object.keys(schema).forEach((key) => {
    validationSchema[key] = schema[key].validation;
  });

  return yup.object().shape(validationSchema);
};

export const calculateCost = (distance: number) => {
  const ratePerKm = 2; // Example rate, customize as needed
  return distance ? distance * ratePerKm : 0;
};


