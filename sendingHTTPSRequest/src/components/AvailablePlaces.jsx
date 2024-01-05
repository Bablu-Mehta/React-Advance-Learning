import { useState } from "react";
import Places from "./Places.jsx";
import { useEffect } from "react";

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);

  useEffect(() => {
    async function fecthPlaces() {
      setIsFetching(true);
      const response = await fetch("http://localhost:3000/places");
      const resData = await response.json();
      setAvailablePlaces(resData.places);
      setIsFetching(false);
    }
    fecthPlaces();
  }, []);

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching Places data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
