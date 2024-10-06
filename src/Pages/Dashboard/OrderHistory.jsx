import { useState, useEffect } from "react";
import useAuth from "../../Hooks/useAuth";
import { FaDownload } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const OrderHistory = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      // Fetch proposals by user email
      const fetchOrders = async () => {
        try {
          const response = await fetch(
            `http://localhost:5000/makeproposal/${user?.email}`
          );
          if (!response.ok) {
            throw new Error("Failed to fetch proposals");
          }
          const data = await response.json();
          setOrders(data);
        } catch (error) {
          console.error("Error fetching orders:", error);
        } finally {
          setLoading(false);
        }
      };
      fetchOrders();
    }
  }, [user?.email]);

  return (
    <div className="py-0 md:max-w-[960px] lg:max-w-[1280px] mx-auto mt-10">
      <motion.table
        layout
        className={`${
          orders.length > 0 ? "rounded" : "rounded-tr rounded-tl "
        } w-full overflow-hidden`}>
        <motion.thead layout className="bg-slate-600 text-white">
          <tr>
            <th className="border-r border-slate-900 pr-2 text-sm">Name</th>
            <th className="border-r border-slate-900 pr-2 text-sm">Category</th>
            <th className="border-r border-slate-900 pr-2 text-sm">Details</th>
            <th className="border-r border-slate-900 pr-2 text-sm">File</th>
          </tr>
        </motion.thead>
        <motion.tbody>
          <AnimatePresence>
            {orders.map((order, index) => (
              <motion.tr
                key={index}
                layout
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, staggerChildren: 1 }}
                className={`${
                  index % 2 === 0 ? "bg-gray-300" : "bg-gray-400/70"
                } p-2 rounded`}>
                <td className="border-r border-slate-900 p-2 text-sm">
                  {order.name}
                </td>
                <td className="border-r border-slate-900 p-2 text-sm">
                  {order.category}
                </td>
                <td className="border-r border-slate-900 p-2 text-sm">
                  {order.details}
                </td>
                <td className="border-r border-slate-900 p-2 text-sm">
                  {order.filePath ? (
                    <a
                      href={`http://localhost:5000/${order.filePath}`}
                      download
                      className="text-blue-500 flex items-center">
                      <FaDownload className="mr-2" /> Download
                    </a>
                  ) : (
                    "No File"
                  )}
                </td>
              </motion.tr>
            ))}
          </AnimatePresence>
        </motion.tbody>
      </motion.table>
      {loading && (
        <div className="bg-gray-300 p-5 w-full rounded text-center">
          <p className="text-lg font-inter">Loading orders...</p>
        </div>
      )}
      {!loading && orders.length === 0 && (
        <div className="bg-gray-300 p-5 w-full rounded-br rounded-bl text-center">
          <p className="text-lg font-inter">No Orders to Show</p>
        </div>
      )}
    </div>
  );
};

export default OrderHistory;
