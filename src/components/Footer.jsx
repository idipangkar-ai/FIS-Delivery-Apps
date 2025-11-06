import { FiHome, FiShoppingBag, FiMessageCircle, FiUser } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Footer() {
  const items = [
    { icon: <FiHome className="text-xl" />, label: "Home" },
    { icon: <FiShoppingBag className="text-xl" />, label: "Orders" },
    { icon: <FiMessageCircle className="text-xl" />, label: "Chat" },
    { icon: <FiUser className="text-xl" />, label: "Profile" },
  ];

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-md z-50">
      <div className="flex justify-around items-center py-2">
        {items.map((item, index) => (
          <motion.button
            key={index}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center text-gray-600 hover:text-blue-600 transition"
          >
            <div className="bg-gray-100 p-2 rounded-full mb-1">{item.icon}</div>
            <span className="text-xs">{item.label}</span>
          </motion.button>
        ))}
      </div>
    </footer>
  );
}
