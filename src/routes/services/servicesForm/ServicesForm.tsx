import React, { useState, useRef, useEffect } from "react";
import { LoadScript, Autocomplete } from "@react-google-maps/api";

const libraries: "places"[] = ["places"]; // Required to enable Places API
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Progress } from "@/components/ui/progress";
import "./ServicesForm.css";
import { calculateCost, getValidationSchema } from "@/lib/formUtils";
import { FORM_STEP_SCHEMA } from "@/constants/jsonForms";
import { FormData, FormSchema } from "@/types/FormTypes";

interface ServicesFormProp {
  stepNumber: number;
  setStepNumber: React.Dispatch<React.SetStateAction<number>>;
}

export interface Place {
  formatted_address: string;
}

const ServicesForm = ({ stepNumber, setStepNumber }: ServicesFormProp) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(getValidationSchema(stepNumber)),
  });

  const [pickup, setPickup] = useState<Place | null>(null);
  const [dropOff, setDropOff] = useState<Place | null>(null);
  const [distance, setDistance] = useState<number | null>(null);
  // Refs to hold the Autocomplete instances

  useEffect(() => {
    calculateDistance();
  }, [pickup, dropOff]);

  const calculateDistance = () => {
    if (pickup && dropOff) {
      const service = new window.google.maps.DistanceMatrixService();
      service.getDistanceMatrix(
        {
          origins: [pickup.formatted_address],
          destinations: [dropOff.formatted_address],
          travelMode: window.google.maps.TravelMode.DRIVING,
        },
        (response, status) => {
          if (status === "OK" && response?.rows[0].elements[0].distance) {
            const distanceInMeters =
              response.rows[0].elements[0].distance.value;
            const distanceInKm = distanceInMeters / 1000;
            setDistance(Math.ceil(distanceInKm / 1.609)); // convert km in miles
          } else {
            console.error("Distance calculation failed:", status);
          }
        }
      );
    }
  };

  let totalCost = null;

  if (distance) {
    totalCost = calculateCost(distance);
  }
  const pickupAutocompleteRef = useRef<google.maps.places.Autocomplete | null>(
    null
  );
  const dropOffAutocompleteRef = useRef<google.maps.places.Autocomplete | null>(
    null
  );

  const handlePickupPlaceChanged = () => {
    const place = pickupAutocompleteRef.current?.getPlace();
    if (place && place.formatted_address) {
      setPickup({ formatted_address: place.formatted_address });
    }
  };

  const handleDropoffPlaceChanged = () => {
    const place = dropOffAutocompleteRef.current?.getPlace();
    if (place && place.formatted_address) {
      setDropOff({ formatted_address: place.formatted_address });
    }
  };

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
      case "pickup":
        return (
          <div className="mb-4" key={name}>
            <label className="block mb-2">{field.label}</label>
            <Autocomplete
              onLoad={(autocomplete) =>
                (pickupAutocompleteRef.current = autocomplete)
              }
              onPlaceChanged={handlePickupPlaceChanged}
            >
              <input
                {...register(name as keyof FormData)}
                className="border p-2 w-full"
                type="text"
                placeholder={field.placeholder}
              />
            </Autocomplete>
            {errors[name as keyof FormData] && (
              <p className="text-red-500">
                {errors[name as keyof FormData]?.message as string}
              </p>
            )}
          </div>
        );
      case "dropOff":
        return (
          <div className="mb-4" key={name}>
            <label className="block mb-2">{field.label}</label>
            <Autocomplete
              onLoad={(autocomplete) =>
                (dropOffAutocompleteRef.current = autocomplete)
              }
              onPlaceChanged={handleDropoffPlaceChanged}
            >
              <input
                {...register(name as keyof FormData)}
                className="border p-2 w-full"
                type="text"
                placeholder={field.placeholder}
              />
            </Autocomplete>
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
    <LoadScript
      googleMapsApiKey="AIzaSyBAY3CeUohHDliAMOZ0KLPE77qgmOv9Tr0"
      libraries={libraries}
      loadingElement={<div>Loading...</div>}
    >
      <div className="p-4 w-96 max-w-lg mx-auto">
        <div>
          <h4 className="montserrat-medium text-xs text-light">
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
                stepNumber === 1
                  ? "button-bg-primary-muted"
                  : "button-bg-primary"
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
        </form>
        {distance !== null && (
          <>
            <p>Approximate Distance: {distance} miles</p>
            {totalCost && <p>Estimated Cost: £{Math.ceil(totalCost)}</p>}
          </>
        )}
      </div>
    </LoadScript>
  );
};

export default ServicesForm;
