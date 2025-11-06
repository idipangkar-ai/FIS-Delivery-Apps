import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import OrdersList from "../components/OrdersList";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const options = ["B2B", "B2C"];

  return (
    <main className="flex-1 overflow-y-auto p-4 pb-24 bg-gray-50">
      {/* Dropdown Section */}
      <section className="mb-6 relative w-full max-w-xs mx-auto">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setOpen(!open)}
          className="w-full bg-blue-500 text-white py-4 px-5 rounded-full 
                     shadow-md shadow-blue-200 font-bold flex justify-between 
                     items-center hover:bg-blue-600 transition"
        >
          {selected || "Select Type"}
          <motion.span
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <FiChevronDown className="text-xl" />
          </motion.span>
        </motion.button>

        {/* Dropdown Options */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute w-full mt-2 bg-white rounded-2xl shadow-lg border border-gray-100 z-10 overflow-hidden"
            >
              {options.map((label) => (
                <button
                  key={label}
                  onClick={() => {
                    setSelected(label);
                    setOpen(false);
                  }}
                  className="w-full text-gray-700 py-3 px-5 text-left hover:bg-blue-50 active:bg-blue-100 transition"
                >
                  {label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Orders List */}
      <OrdersList type={selected} />
    </main>
  );
}
