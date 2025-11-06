import { useState } from "react";
import { FiMapPin } from "react-icons/fi";

export default function LocationButton() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    setLoading(true);
    setError("");

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
        setLoading(false);
      },
      (err) => {
        setError(err.message || "Unable to retrieve location.");
        setLoading(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  };

  return (
    <div className="flex flex-col items-center space-y-2">
      <button
        onClick={handleGetLocation}
        className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-full shadow-md 
                   hover:bg-blue-600 active:scale-95 transition transform shadow-blue-200"
      >
        <FiMapPin className="text-lg" />
        {loading ? "Getting..." : "Get Location"}
      </button>

      {location && (
        <div className="text-sm text-gray-700 mt-1">
          📍 {location.latitude.toFixed(4)}, {location.longitude.toFixed(4)}
        </div>
      )}

      {error && <div className="text-sm text-red-500 mt-1">{error}</div>}
    </div>
  );
}
