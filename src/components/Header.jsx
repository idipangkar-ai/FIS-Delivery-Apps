import { useState, useEffect } from "react";
import { FiBell, FiMapPin } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Header() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showLocation, setShowLocation] = useState(false);

  // --- Reverse geocode using OpenStreetMap ---
  const getLocationName = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
      );
      const data = await response.json();

      if (!data.display_name) return "Unknown location";

      // Return short location: first 2-3 parts of the address
      const parts = data.display_name.split(",");
      return parts.slice(0, 3).join(",").trim();
    } catch (err) {
      console.error(err);
      return "Unknown location";
    }
  };

  // --- Get device GPS ---
  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    setLoading(true);
    setError("");

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        const name = await getLocationName(latitude, longitude);
        setLocation({ latitude, longitude, name });
        setLoading(false);
        setShowLocation(true);
      },
      (err) => {
        setError(err.message || "Unable to retrieve location.");
        setLoading(false);
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  };

  // --- Auto-hide after 5 seconds ---
  useEffect(() => {
    if (showLocation) {
      const timer = setTimeout(() => setShowLocation(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showLocation]);

  // Log location whenever it changes
  useEffect(() => {
    if (location) {
      console.log("Current location:", location);
    }
  }, [location]);

  return (
    <header className="relative top-0 z-50 bg-white shadow-sm p-4 flex justify-between items-center">
      <h1 className="text-lg font-semibold text-blue-600">FIS-Delivery-Apps</h1>

      <div className="flex items-center space-x-4 text-gray-700">
        {/* Notification Bell */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          className="relative bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition"
        >
          <FiBell className="text-xl" />
          <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 bg-red-500 rounded-full border border-white"></span>
        </motion.button>

        {/* Map Pin / GPS */}
        <motion.button
          onClick={handleGetLocation}
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition"
        >
          <FiMapPin className="text-2xl text-blue-500" />
        </motion.button>
      </div>

      {/* Location popup with auto-hide and manual close */}
      {showLocation && location && (
        <div className="absolute top-full mt-1 right-4 bg-white p-2 rounded shadow text-sm text-gray-700 max-w-xs text-right flex justify-between items-start space-x-2">
          <div>
            📍 {location.name}
            <br />
            <span className="text-gray-400 text-xs">
              ({location.latitude.toFixed(4)}, {location.longitude.toFixed(4)})
            </span>
          </div>
          {/* Manual close button */}
          <button
            onClick={() => setShowLocation(false)}
            className="text-gray-500 hover:text-gray-700 font-bold"
          >
            ✕
          </button>
        </div>
      )}

      {/* Error popup */}
      {error && (
        <div className="absolute top-full mt-1 right-4 bg-red-100 p-2 rounded shadow text-sm text-red-500">
          {error}
        </div>
      )}

      {/* Loading popup */}
      {loading && (
        <div className="absolute top-full mt-1 right-4 bg-white p-2 rounded shadow text-sm text-gray-700">
          Getting location...
        </div>
      )}
    </header>
  );
}
