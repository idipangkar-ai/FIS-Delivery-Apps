import { useState } from "react";
import { FiBell, FiMapPin } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Header() {
  // --- State for GPS ---
  const [location, setLocation] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // --- Function to get GPS location ---
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
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 }
    );
  };

  return (
    <header className="relative top-0 z-50 bg-white shadow-sm p-4 flex justify-between items-center">
      {/* App Title */}
      <h1 className="text-lg font-semibold text-blue-600">FIS-Delivery-Apps</h1>

      {/* Header Icons */}
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
          onClick={handleGetLocation} // 🔹 Call GPS function here
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition"
        >
          <FiMapPin className="text-2xl text-blue-500" />
        </motion.button>
      </div>

      {/* Optional: show coordinates or errors */}
      <div className="absolute top-full mt-1 right-4 flex flex-col items-end space-y-1">
        {loading && (
          <div className="bg-white p-2 rounded shadow text-sm text-gray-700">
            Getting location...
          </div>
        )}
        {location && (
          <div className="bg-white p-2 rounded shadow text-sm text-gray-700">
            📍 {location.latitude.toFixed(4)}, {location.longitude.toFixed(4)}
          </div>
        )}
        {error && (
          <div className="bg-red-100 p-2 rounded shadow text-sm text-red-500">
            {error}
          </div>
        )}
      </div>
    </header>
  );
}
