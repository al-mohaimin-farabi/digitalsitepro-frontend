import { useEffect, useState, useLayoutEffect } from "react";
import useAuth from "../../Hooks/useAuth";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";

const ApproveTestimonial = () => {
  const { user, isadmin } = useAuth();
  const [testimonials, setTestimonials] = useState([]);

  const handleApprove = (id) => {
    const updatedTestimonials = testimonials.filter(
      (testimonial) => testimonial._id !== id
    );
    setTestimonials(updatedTestimonials);
  };

  useEffect(() => {
    if (user.email && isadmin) {
      const apiUrl = `http://localhost:5000/testimonialapprove/${user?.email}`;

      fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          setTestimonials(data);
        })
        .catch((error) => {
          console.error("Error fetching testimonials:", error);
        });
    }
  }, [user?.email, isadmin]);

  useLayoutEffect(() => {
    // Your layout effect logic here
  }, [user?.email, isadmin]);

  return (
    <div className="py-0">
      <div className="grid grid-cols-1 gap-2">
        <motion.table layout className="w-full rounded overflow-hidden">
          <motion.thead layout className="bg-slate-600 text-white ">
            <tr>
              <th className="border-r border-slate-900 pr-2 text-sm">Name</th>
              <th className="border-r border-slate-900 pr-2 text-sm">Email</th>
              <th className="border-r border-slate-900 pr-2 text-sm">Role</th>
              <th className="border-r border-slate-900 pr-2 text-sm">
                Location
              </th>
              <th className="border-r border-slate-900 pr-2 text-sm">
                Message
              </th>
              <th className="pr-2 text-sm">
                <FontAwesomeIcon icon={faCheck} />
              </th>
            </tr>
          </motion.thead>
          <motion.tbody >
            <AnimatePresence>
              {testimonials.map((item, index) => (
                <motion.tr  layout
                  key={item?._id}
                  initial={{height:0, opacity: 0 }}
                  animate={{height:'auto', opacity: 1 }}
                  exit={{height:0,  opacity: 0 }}
                  transition={{ duration: .3, staggerChildren: 1 }}
                  className={`${
                    index % 2 === 0 ? "bg-gray-300 " : "bg-gray-400/70 "
                  } p-2 rounded `}>
                  <td className="border-r border-slate-900 p-2 text-sm">
                  <span className="bg-red-400/80 rounded text-sm p-1">{item?.name}</span>
                  </td>
                  <td className="border-r border-slate-900 p-2 text-sm">
                  <span className="bg-red-400/80 rounded text-sm p-1">{item?.email}</span>
                  </td>
                  <td className="border-r min-w-[200px] border-slate-900 p-2 text-sm">
                    <span className="bg-red-400/80 rounded text-sm p-1">{item?.role}</span>
                  </td>
                  <td className="border-r border-slate-900 p-2 text-sm">
                  <span className="bg-red-400/80 rounded text-sm p-1">{item?.location}</span>
                  </td>
                  <td className="border-r border-slate-900 p-2 text-sm">
                    {item?.message}
                  </td>
                  <td className="gird place-content-center w-[65px]  p-2 text-sm">
                    <button
                      onClick={() => handleApprove(item?._id)}
                      className="bg-green-600 mx-auto block hover:bg-transparent transition-colors duration-300 hover:text-green-600 border-2 border-green-600 py-2 px-5 rounded h-full text-white font-bold">
                      <FontAwesomeIcon icon={faCheck} />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </motion.tbody>
        </motion.table>
      </div>
    </div>
  );
};

export default ApproveTestimonial;
