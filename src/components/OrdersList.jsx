// src/components/OrdersList.jsx
import { useEffect, useState } from "react";

export default function OrdersList({ type }) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!type) return;

    const fetchOrders = async () => {
      setLoading(true);
      setError("");

      try {
        const res = await fetch(
          "https://delbe.navamandi.com/api/method/fis_auth.api.v1.bridge.index?endpoint=get_order",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "x-Authorization": "Bearer 44d530f6189c79d776a6d52524f45e",
            },
          }
        );

        const json = await res.json();

        const allApps = json?.message?.response?.message || [];
        const selectedApp =
          type === "B2B"
            ? allApps.find((a) => a.app_name.toLowerCase().includes("b2b"))
            : allApps.find((a) => !a.app_name.toLowerCase().includes("b2b"));

        if (selectedApp && selectedApp.order_list) {
          setOrders(selectedApp.order_list);
        } else {
          setOrders([]);
        }
      } catch (err) {
        console.error(err);
        setError("Failed to fetch orders");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [type]);

  if (!type)
    return (
      <p className="text-gray-400 text-center mt-10">
        Select a category to view orders.
      </p>
    );

  if (loading)
    return (
      <p className="text-blue-500 text-center mt-10 animate-pulse">
        Loading {type} orders...
      </p>
    );

  if (error) return <p className="text-red-500 text-center mt-10">{error}</p>;

  if (orders.length === 0)
    return (
      <p className="text-gray-500 text-center mt-10">No {type} orders found.</p>
    );

  return (
    <section className="grid gap-4">
      {orders.map((order, i) => (
        <div
          key={order.order_id || i}
          className="bg-white p-4 rounded-xl shadow hover:shadow-md transition"
        >
          <h3 className="font-medium text-gray-800">
            Order ID: {order.order_id}
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            Status: {order.order_status}
          </p>
          <p className="text-sm text-gray-400">
            Date: {order.transaction_date}
          </p>
        </div>
      ))}
    </section>
  );
}
