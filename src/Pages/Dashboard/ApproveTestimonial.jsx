import { useState, useLayoutEffect } from "react";
import useAuth from "../../Hooks/useAuth";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimatePresence, motion } from "framer-motion";

const ApproveTestimonial = () => {
  const { user, isadmin } = useAuth();
  const [testimonials, setTestimonials] = useState([]);
  const [loadingStates, setLoadingStates] = useState({});

  const handleApprove = async (id) => {
    try {
      // Set loading state to true for the specific testimonial

      // Construct the API URL
      const apiUrl = `http://localhost:5000/testimonialapprove`;

      // Make the fetch request to approve the testimonial
      const response = await fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, user_email: user?.email }),
      });

      // Check if the response is ok
      if (!response.ok) {
        // If not, throw an error with the response status
        throw new Error(
          `Network response was not ok (status ${response.status})`
        );
      }

      // If response is ok, parse the JSON data
      const data = await response.json();
      console.table(data);
      const updatedTestimonials = testimonials.filter(
        (testimonial) => testimonial._id !== id
      );

      // Update the testimonials state with the new data
      setTestimonials(updatedTestimonials);
    } catch (error) {
      // If an error occurs during fetching data, log the error
      console.error("Error fetching data:", error);
      // Handle the error here, e.g., show an error message to the user
    }
  };

  const deleteTestimonial = async (id) => {
    try {
      // Set loading state to true for the specific testimonial

      // Construct the API URL
      const apiUrl = `http://localhost:5000/testimonialapprove`;

      // Make the fetch request to approve the testimonial
      const response = await fetch(apiUrl, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, user_email: user?.email }),
      });

      // Check if the response is ok
      if (!response.ok) {
        // If not, throw an error with the response status
        throw new Error(
          `Network response was not ok (status ${response.status})`
        );
      }

      // If response is ok, parse the JSON data
      const data = await response.json();
      console.table(data);
      const updatedTestimonials = testimonials.filter(
        (testimonial) => testimonial._id !== id
      );

      // Update the testimonials state with the new data
      setTestimonials(updatedTestimonials);
    } catch (error) {
      // If an error occurs during fetching data, log the error
      console.error("Error fetching data:", error);
      // Handle the error here, e.g., show an error message to the user
    }
  };

  useLayoutEffect(() => {
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
          const initialLoadingStates = {};
          data.forEach((item) => {
            initialLoadingStates[item._id] = false;
          });
          setLoadingStates(initialLoadingStates);
        })
        .catch((error) => {
          console.error("Error fetching testimonials:", error);
        });
    }
  }, [user?.email, isadmin]);

  return (
    <div className="py-0 md:max-w-[960px] lg:max-w-[1280px]">
      <motion.table
        layout
        className={`${
          testimonials.length > 0 ? "rounded" : "rounded-tr rounded-tl "
        } w-full  overflow-hidden`}>
        <motion.thead layout className="bg-slate-600 text-white ">
          <tr>
            <th className="border-r border-slate-900 pr-2 text-sm">Name</th>
            <th className="border-r border-slate-900 pr-2 text-sm">Email</th>
            <th className="border-r border-slate-900 pr-2 text-sm">Role</th>
            <th className="border-r border-slate-900 pr-2 text-sm">Location</th>
            <th className="border-r border-slate-900 pr-2 text-sm">Message</th>
            <th className="border-r border-slate-900 pr-2 text-sm">
              <FontAwesomeIcon icon={faCheck} />
            </th>
            <th className="pr-2 text-sm ">
              <FontAwesomeIcon icon={faXmark} />
            </th>
          </tr>
        </motion.thead>
        <motion.tbody>
          <AnimatePresence>
            {testimonials.map((item, index) => (
              <motion.tr
                layout
                key={index}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, staggerChildren: 1 }}
                className={`${
                  index % 2 === 0 ? "bg-gray-300 " : "bg-gray-400/70 "
                } p-2 rounded `}>
                <td className="border-r border-slate-900 p-2 text-sm">
                  {item?.name}
                </td>
                <td className="border-r border-slate-900 p-2 text-sm">
                  <span className="bg-red-400/80 rounded text-sm p-1">
                    {item?.email}
                  </span>
                </td>
                <td className="border-r min-w-[200px] border-slate-900 p-2 text-sm">
                  <span className="bg-red-400/80 rounded text-sm p-1">
                    {item?.role}
                  </span>
                </td>
                <td className="border-r border-slate-900 p-2 text-sm">
                  <span className="bg-red-400/80 rounded text-sm p-1">
                    {item?.location}
                  </span>
                </td>
                <td className="border-r border-slate-900 p-2 text-sm">
                  {item?.message}
                </td>
                <td className="gird place-content-center w-[40px]  border-r border-slate-900 p-2 text-sm">
                  <button
                    onClick={() => handleApprove(item?._id)}
                    disabled={loadingStates[item?._id]}
                    className=" bg-green-600  mx-auto block hover:bg-transparent transition-colors duration-300 hover:text-green-600 border-2 border-green-600 py-2 px-3 w-full rounded h-full text-white font-bold">
                    <FontAwesomeIcon icon={faCheck} />
                  </button>
                </td>
                <td className="gird place-content-center w-[40px]    p-2 text-sm">
                  <button
                    onClick={() => deleteTestimonial(item?._id)}
                    disabled={loadingStates[item?._id]}
                    className=" bg-red-600  mx-auto block hover:bg-transparent transition-colors duration-300 hover:text-red-600 border-2 border-red-600 py-2 px-3 w-full rounded h-full text-white font-bold">
                    <FontAwesomeIcon icon={faXmark} />
                  </button>
                </td>
              </motion.tr>
            ))}
          </AnimatePresence>
        </motion.tbody>
      </motion.table>
      {testimonials.length <= 0 && (
        <div className="bg-gray-300 p-5 w-full rounded-br rounded-bl  text-center">
          <p className="text-lg font-inter">Nothing To Show</p>
        </div>
      )}
    </div>
  );
};

export default ApproveTestimonial;
