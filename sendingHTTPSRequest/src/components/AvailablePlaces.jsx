import { useState } from "react";
import Places from "./Places.jsx";
import { useEffect } from "react";
import Error from "./Error.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [isFetching, setIsFetching] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function fecthPlaces() {
      setIsFetching(true);

      try {
        const response = await fetch("http://localhost:3000/places");
        const resData = await response.json();

        if (!response.ok) {
          throw new Error("Failed to Fetch places");
        }
        setAvailablePlaces(resData.places);
      } catch (error) {
        setError({
          message:
            error.message || "Could Not Fetch Places, Please Try Again Later",
        });
      }

      setIsFetching(false);
    }
    fecthPlaces();
  }, []);

  if (error) {
    return <Error title="An Error Occurred!" message={error.message} />;
  }

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
