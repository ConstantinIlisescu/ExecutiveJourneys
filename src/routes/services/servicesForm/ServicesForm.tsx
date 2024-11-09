import React, { useState, useRef, useEffect } from "react";
import { LoadScript, Autocomplete } from "@react-google-maps/api";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Progress } from "@/components/ui/progress";
import "./ServicesForm.css";
import { calculateCost, getValidationSchema } from "@/lib/formUtils";
import {
  FORM_STEP_SCHEMA,
  FORM_STEP_SCHEMA_BY_DISTANCE,
  FORM_STEP_SCHEMA_HOURLY,
  serviceTypeByDistance,
  serviceTypeHourly,
} from "@/constants/jsonForms";
import { FormData, FormSchema } from "@/types/FormTypes";
import { GOOGLE_API_LIBRARIES } from "@/constants/googleApi";
import emailjs from "@emailjs/browser";
import FancyLoader from "@/components/fancyLoader/FancyLoader";
import Container from "@/components/ui/container";
import { scrollToHash, scrollToStartPage } from "@/lib/scrolltoHelpers";

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
  const [formData, setFormData] = useState<FormData | null>(null);
  const [pickup, setPickup] = useState<Place | null>(null);
  const [dropOff, setDropOff] = useState<Place | null>(null);
  const [distance, setDistance] = useState<number | null>(null);
  const [submitDisabled, setSubmitDisabled] = useState<boolean>(false);
  const [modal, setModal] = useState<"successful" | "error" | null>(null);
  const [formSchema, setFormSchema] = useState<{
    [key: number]: { [key: string]: FormSchema };
  }>(FORM_STEP_SCHEMA);
  const today = new Date().toISOString().split("T")[0];
  //emailjs ids:
  const serviceId = "ExecutiveJourneys2024";
  const templateId = "template_k0u413o";
  const publicKey = "ILFYdBc3TIrNOAD7s";

  useEffect(() => {
    if (formData && formData["serviceType"] === serviceTypeHourly) {
      setFormSchema({ ...FORM_STEP_SCHEMA, ...FORM_STEP_SCHEMA_HOURLY });
    }
    if (formData && formData["serviceType"] === serviceTypeByDistance) {
      setFormSchema({ ...FORM_STEP_SCHEMA, ...FORM_STEP_SCHEMA_BY_DISTANCE });
    }
  }, [formData]);

  useEffect(() => {
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

    calculateDistance();
  }, [pickup, dropOff]);

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
      setFormData(data);
      setStepNumber(2); // Move to the next step
      scrollToHash("start-form");
    } else if (stepNumber === 2) {
      setFormData(data);
      setStepNumber(3); // Move to the final step
      scrollToHash("start-form");
    } else {
      setSubmitDisabled(true);
      sendEmail(data);
    }
  };

  const handleOnChange: React.FormEventHandler<HTMLFormElement> = (e) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormData({
      ...formData,
      [name]: value, // Update only the specific field that changed
    });
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
      case "numberOfHours":
        return (
          <div className="mb-4" key={name}>
            <label className="block mb-2 ">{field.label}</label>
            <input
              {...register(name as keyof FormData)}
              className={`rounded-lg p-2 w-full ${
                name.length != 0 ? "text-dark" : ""
              }`}
              placeholder={field.placeholder}
              type="number"
              required={true}
              min={3}
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
          <div className="mb-4 mt-4" key={name}>
            <label className="block mb-2">{field.label}</label>
            <div className="flex flex-col">
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
                required={true}
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
                required={true}
              />
            </Autocomplete>
            {errors[name as keyof FormData] && (
              <p className="text-red-500">
                {errors[name as keyof FormData]?.message as string}
              </p>
            )}
          </div>
        );
      case "pickUpDate":
        return (
          <div className="mb-4" key={name}>
            <label className="block mb-2 ">{field.label}</label>
            <input
              type="date"
              min={today}
              {...register(name as keyof FormData)}
              className={`rounded-lg p-2 w-full ${
                name.length != 0 ? "text-dark" : ""
              }`}
              placeholder={field.placeholder}
              required={true}
            />
            {errors[name as keyof FormData] && (
              <p className="text-red-500">
                {errors[name as keyof FormData]?.message as string}
              </p>
            )}
          </div>
        );
      case "pickUpTime":
        return (
          <div className="mb-4" key={name}>
            <label className="block mb-2 ">{field.label}</label>
            <input
              type="time"
              {...register(name as keyof FormData)}
              className={`rounded-lg p-2 w-full ${
                name.length != 0 ? "text-dark" : ""
              }`}
              placeholder={field.placeholder}
              required={true}
            />
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

  const sendEmail = (data: FormData) => {
    let totalCost = null;

    if (distance) {
      totalCost = calculateCost(distance);
    }

    //emailjs dynamic template params
    const templateParams = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      contactNumber: data.contactNumber,
      pickUpDate: data.pickUpDate,
      pickUpTime: data.pickUpTime,
      whereFrom: data.whereFrom,
      whereTo: data.whereTo,
      distance: distance,
      cost: totalCost,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      () => {
        setModal("successful");
      },
      () => {
        setModal("error");
      }
    );
  };

  const handleOnCloseModal = () => {
    setModal(null);
    reset();
    setSubmitDisabled(false);
    setStepNumber(1);
    scrollToStartPage();
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBkcvGgxBxPeu7ah7YzYEfTfKbmFEnw1V0"
      libraries={GOOGLE_API_LIBRARIES}
      loadingElement={<div>Loading...</div>}
    >
      <div id="start-form" className="p-4 w-96 max-w-lg mx-auto">
        <div>
          <h4 className="montserrat-medium text-xs text-light">
            Step {stepNumber} of 3
          </h4>
          <Progress value={stepNumber * 33} />
        </div>
        {stepNumber === 3 && formData && (
          <div className="my-6">
            <div className="flex justify-between max-w-sm mb-2 montserrat-medium text-start ">
              <p>Full name:</p>
              <p>
                {formData.firstName} {formData.lastName}
              </p>
            </div>
            <div className="flex justify-between max-w-sm mb-1 montserrat-medium">
              <p>Email:</p>
              <p>{formData.email}</p>
            </div>
            <div className="flex justify-between max-w-sm mb-1 montserrat-medium">
              <p>Number:</p>
              <p>{formData.contactNumber}</p>
            </div>
            <div className="flex justify-between max-w-sm mb-1 montserrat-medium">
              <p className="w-44">Fleet type:</p>
              <p className="text-end">{formData.fleetType}</p>
            </div>
            <div className="flex justify-between max-w-sm mb-1 montserrat-medium">
              <p className="w-44">Service Type:</p>
              <p className="text-end">{formData.serviceType}</p>
            </div>
            {formData.numberOfHours && (
              <div className="flex justify-between max-w-sm mb-1 montserrat-medium">
                <p>Hours booked:</p>
                <p>{formData.numberOfHours} hours</p>
              </div>
            )}
            <div className="flex justify-between max-w-sm mb-1 montserrat-medium">
              <p>Pick up date:</p>
              <p>{formData.pickUpDate?.toLocaleString()}</p>
            </div>
            <div className="flex justify-between max-w-sm mb-1 montserrat-medium">
              <p>Pick up time:</p>
              <p>{formData.pickUpTime}</p>
            </div>
            <div className="flex justify-between max-w-sm mb-1 montserrat-medium">
              <p className="w-56">Pick up address:</p>
              <p className="text-end">{formData.whereFrom}</p>
            </div>
            {formData.whereTo && (
              <div className="flex justify-between max-w-sm mb-1 montserrat-medium">
                <p>Drop off address:</p>
                <p>{formData.whereTo}</p>
              </div>
            )}
            {distance !== null && (
              <div className="flex justify-between max-w-sm mb-1 montserrat-medium">
                <p>Approximate Distance:</p>
                <p>{distance} miles</p>
              </div>
            )}
          </div>
        )}
        <form onSubmit={handleSubmit(onSubmit)} onChange={handleOnChange}>
          {formSchema[stepNumber] &&
            Object.keys(formSchema[stepNumber]).map((key) =>
              renderField(key, formSchema[stepNumber][key])
            )}
          <div className="flex flex-row justify-between">
            <button
              type="button"
              onClick={() => setStepNumber(stepNumber - 1)}
              aria-label="Go back"
              className={`${
                stepNumber === 1 || submitDisabled
                  ? "button-bg-primary-muted"
                  : "button-bg-primary"
              } text-nowrap  px-10 py-2 rounded-full text-xl shadow-lg h-fit`}
              disabled={stepNumber === 1 || submitDisabled}
            >
              Back
            </button>
            <button
              type="submit"
              className={`${
                submitDisabled ? "button-bg-primary-muted" : "button-bg-primary"
              } text-nowrap  px-10 py-2 rounded-full text-xl  shadow-lg h-fit`}
              disabled={submitDisabled}
              aria-label={stepNumber === 3 ? "Submit" : "Next"}
            >
              {stepNumber === 3 ? "Submit" : "Next"}
            </button>
          </div>
        </form>
      </div>

      {/* not always visible elements  */}
      {submitDisabled && <FancyLoader />}
      {modal && (
        <div className="modal-center bg-light-dark shadow-xl w-[90vw] h-[70vh] lg:w-[70vw] lg:h-[70vh]">
          <Container>
            <div className="flex flex-col justify-center items-center pt-14">
              {modal === "successful" && (
                <div className="max-w-lg">
                  <h3 className="text-3xl  playfair-display-medium mb-6">
                    The email was sent{" "}
                    <span className="text-call-to-action">Successfully!</span>
                  </h3>
                  <p className="text-lg">
                    Our goal is to respond within two hours. However, since we
                    rely on an online service, there may be occasional delays.
                    If you don't hear back from us within this time frame,
                    please feel free to reach out using the contact details
                    provided at the bottom of the page.
                  </p>
                </div>
              )}
              {modal === "error" && (
                <div className="max-w-lg">
                  <h3 className="text-3xl  playfair-display-medium mb-6">
                    There was an{" "}
                    <span className="text-call-to-action">Error!</span>
                  </h3>
                  <p className="text-lg">
                    Our goal is to keep all our systems running smoothly.
                    However, there are times when things may be beyond our
                    control. We kindly ask that you try again, or feel free to
                    send us a direct message using the contact details at the
                    bottom of the page.
                  </p>
                </div>
              )}
              <button
                type="button"
                className=" button-bg-primary text-nowrap mt-8 px-10 py-2 rounded-full text-xl shadow-lg h-fit"
                onClick={handleOnCloseModal}
              >
                Close
              </button>
            </div>
          </Container>
        </div>
      )}
    </LoadScript>
  );
};

export default ServicesForm;
