import { FiBell, FiUser } from "react-icons/fi"; // Feather Icons (clean & standard)
import { motion } from "framer-motion"; // Optional for subtle animation

export default function Header() {
  return (
    <header className=" top-0 z-50 bg-white shadow-sm p-4 flex justify-between items-center">
      {/* Left: Logo / App Name */}
      <h1 className="text-lg font-semibold text-blue-600">FIS-Delivery-Apps</h1>

      {/* Right: Icons */}
      <div className="flex items-center space-x-4 text-gray-700">
        {/* Notification icon with background + badge */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          className="relative bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition"
        >
          <FiBell className="text-xl" />
          <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 bg-red-500 rounded-full border border-white"></span>
        </motion.button>

        {/* Profile icon with background */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition"
        >
          <FiUser className="text-xl" />
        </motion.button>
      </div>
    </header>
  );
}
