import React, { useState, useRef, useEffect } from "react";
import { LoadScript, Autocomplete } from "@react-google-maps/api";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Progress } from "@/components/ui/progress";
import "./ServicesForm.css";
import { calculateCost, getValidationSchema } from "@/lib/formUtils";
import { FORM_STEP_SCHEMA } from "@/constants/jsonForms";
import { FormData, FormSchema } from "@/types/FormTypes";
import { GOOGLE_API_LIBRARIES } from "@/constants/googleApi";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

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
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(getValidationSchema(stepNumber)),
  });

  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData | null>(null);
  const [pickup, setPickup] = useState<Place | null>(null);
  const [dropOff, setDropOff] = useState<Place | null>(null);
  const [distance, setDistance] = useState<number | null>(null);

  //emailjs ids:
  const serviceId = "service_ih7p24h";
  const templateId = "template_0e5yrig";
  const publicKey = "Noga7XMCVjKynSSFL";

  // Refs to hold the Autocomplete instances

  useEffect(() => {
    calculateDistance();
  }, [pickup, dropOff]);

  const sendEmail = (data: FormData) => {
    let totalCost = null;

    if (distance) {
      totalCost = calculateCost(distance);
    }

    //emailjs dinamic template params
    const templateParams = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      contactNumber: data.contactNumber,
      whereFrom: data.whereFrom,
      whereTo: data.whereTo,
      distance: distance,
      cost: totalCost,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      (response) => {
        console.log("SUCCESS!", response);
      },
      (error) => {
        console.log("FAILED...", error.text);
      }
    );
  };

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
            const distanceKm = distanceInMeters / 1000 / 1.609; // convert km in miles
            setDistance(Math.ceil(distanceKm));
          } else {
            console.error("Distance calculation failed:", status);
          }
        }
      );
    }
  };

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
      setFormData(data);
      setStepNumber(2); // Move to the next step
    } else if (stepNumber === 2) {
      console.log("Step 2 data:", data);
      setFormData(data);
      setStepNumber(3); // Move to the final step
    } else {
      console.log("Final data:", data);
      sendEmail(data);
      reset();
      navigate("/");
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
            <label className="block mb-2 ">{field.label}</label>
            <input
              {...register(name as keyof FormData)}
              className={`rounded-lg p-2 w-full ${
                name.length != 0 ? "text-dark" : ""
              }`}
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
            <label className="block mb-2 ">{field.label}</label>
            <Autocomplete
              onLoad={(autocomplete) =>
                (pickupAutocompleteRef.current = autocomplete)
              }
              onPlaceChanged={handlePickupPlaceChanged}
            >
              <input
                {...register(name as keyof FormData)}
                className={`rounded-lg p-2 w-full ${
                  name.length != 0 ? "text-dark" : ""
                }`}
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
            <label className="block mb-2 ">{field.label}</label>
            <Autocomplete
              onLoad={(autocomplete) =>
                (dropOffAutocompleteRef.current = autocomplete)
              }
              onPlaceChanged={handleDropoffPlaceChanged}
            >
              <input
                {...register(name as keyof FormData)}
                className={`rounded-lg p-2 w-full ${
                  name.length != 0 ? "text-dark" : ""
                }`}
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
      libraries={GOOGLE_API_LIBRARIES}
      loadingElement={<div>Loading...</div>}
    >
      <div className="p-4 w-96 max-w-lg mx-auto">
        <div>
          <h4 className="montserrat-medium text-xs text-light">
            Step {stepNumber} of 3
          </h4>
          <Progress value={stepNumber * 33} />
        </div>
        {stepNumber === 3 && formData && (
          <div className="my-6">
            <p className=" montserrat-medium text-start max-w-sm mb-1">
              {formData.firstName} {formData.lastName}
            </p>
            <p className=" montserrat-medium text-start max-w-sm mb-1">
              {formData.email}
            </p>
            <p className=" montserrat-medium text-start max-w-sm mb-1">
              {formData.contactNumber}
            </p>
            <p className=" montserrat-medium text-start max-w-sm mb-1">
              {formData.whereFrom}
            </p>
            <p className=" montserrat-medium text-start max-w-sm mb-1">
              {formData.whereTo}
            </p>
            {distance !== null && <p>Approximate Distance: {distance} miles</p>}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          {FORM_STEP_SCHEMA[stepNumber] &&
            Object.keys(FORM_STEP_SCHEMA[stepNumber]).map((key) =>
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
      </div>
    </LoadScript>
  );
};

export default ServicesForm;
