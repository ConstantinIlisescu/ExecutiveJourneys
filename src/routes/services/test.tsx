import React, { useState, useRef, useEffect } from "react";
import { LoadScript, Autocomplete } from "@react-google-maps/api";

const libraries: "places"[] = ["places"]; // Required to enable Places API

interface Place {
  formatted_address: string;
}

const BookingForm: React.FC = () => {
  const [pickup, setPickup] = useState<Place | null>(null);
  const [dropoff, setDropoff] = useState<Place | null>(null);
  const [distance, setDistance] = useState<number | null>(null);

  useEffect(() => {
    calculateDistance();
  }, [pickup, dropoff]);

  // Refs to hold the Autocomplete instances
  const pickupAutocompleteRef = useRef<google.maps.places.Autocomplete | null>(
    null
  );
  const dropoffAutocompleteRef = useRef<google.maps.places.Autocomplete | null>(
    null
  );

  const handlePickupPlaceChanged = () => {
    const place = pickupAutocompleteRef.current?.getPlace();
    if (place && place.formatted_address) {
      setPickup({ formatted_address: place.formatted_address });
    }
  };

  const handleDropoffPlaceChanged = () => {
    const place = dropoffAutocompleteRef.current?.getPlace();
    if (place && place.formatted_address) {
      setDropoff({ formatted_address: place.formatted_address });
    }
  };

  const calculateDistance = () => {
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
            const distanceInMeters =
              response.rows[0].elements[0].distance.value;
            const distanceInKm = distanceInMeters / 1000;
            setDistance(distanceInKm);
          } else {
            console.error("Distance calculation failed:", status);
          }
        }
      );
    }
  };

  const calculateCost = () => {
    const ratePerKm = 2; // Example rate, customize as needed
    return distance ? distance * ratePerKm : 0;
  };

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBAY3CeUohHDliAMOZ0KLPE77qgmOv9Tr0"
      libraries={libraries}
      loadingElement={<div>Loading...</div>} 
      >
      <form>
        <div>
          <label>Pickup Address</label>
          <Autocomplete
            onLoad={(autocomplete) =>
              (pickupAutocompleteRef.current = autocomplete)
            }
            onPlaceChanged={handlePickupPlaceChanged}
          >
            <input type="text" placeholder="Enter pickup address" />
          </Autocomplete>
        </div>
        <div>
          <label>Dropoff Address</label>
          <Autocomplete
            onLoad={(autocomplete) =>
              (dropoffAutocompleteRef.current = autocomplete)
            }
            onPlaceChanged={handleDropoffPlaceChanged}
          >
            <input type="text" placeholder="Enter dropoff address" />
          </Autocomplete>
        </div>
        <button type="button" onClick={calculateDistance}>
          Calculate Distance
        </button>
      </form>
      {distance !== null && (
        <>
          <p>Approximate Distance: {distance.toFixed(2)} km</p>
          <p>Estimated Cost: ${calculateCost().toFixed(2)}</p>
        </>
      )}
    </LoadScript>
  );
};

export default BookingForm;
