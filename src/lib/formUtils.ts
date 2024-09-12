import { FORM_STEP_SCHEMA } from "@/constants/jsonForms";
import { Place } from "@/routes/services/servicesForm/ServicesForm";
import * as yup from "yup";

export const getValidationSchema = (step: number) => {
  const schema = FORM_STEP_SCHEMA[step];
  const validationSchema: { [key: string]: yup.AnySchema } = {};

  Object.keys(schema).forEach((key) => {
    validationSchema[key] = schema[key].validation;
  });

  return yup.object().shape(validationSchema);
};

export const calculateDistance = (
  pickup: Place | null,
  dropoff: Place | null
): number | null => {
  if (pickup && dropoff) {
    const service = new window.google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
      {
        origins: [pickup.formatted_address],
        destinations: [dropoff.formatted_address],
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (response, status) => {
        if (status === "OK" && response?.rows[0].elements[0].distance) {
          const distanceInMeters = response.rows[0].elements[0].distance.value;
          console.log(distanceInMeters / 1000);

          return distanceInMeters / 1000;
        } else {
          console.error("Distance calculation failed:", status);
          return null;
        }
      }
    );
  }
  return null;
};

export const calculateCost = (distance: number) => {
  const ratePerKm = 2; // Example rate, customize as needed
  return distance ? distance * ratePerKm : 0;
};
