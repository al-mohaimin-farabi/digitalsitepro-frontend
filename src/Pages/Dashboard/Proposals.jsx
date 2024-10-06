import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { AnimatePresence, motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const Proposals = () => {
  const { user } = useAuth();
  const [proposals, setProposals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Check if the user is an admin
    const checkAdminStatus = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/users/${user?.email}`
        );
        if (!response.ok) {
          throw new Error("Failed to check admin status");
        }
        const data = await response.json();
        setIsAdmin(data.admin);
      } catch (error) {
        console.error("Error checking admin status:", error);
      }
    };

    if (user?.email) {
      checkAdminStatus();
    }
  }, [user?.email]);

  useEffect(() => {
    // Fetch all proposals if the user is an admin
    const fetchProposals = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/makeproposal?email=${user?.email}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch proposals");
        }
        const data = await response.json();
        setProposals(data);
      } catch (error) {
        console.error("Error fetching proposals:", error);
      } finally {
        setLoading(false);
      }
    };

    if (isAdmin) {
      fetchProposals();
    }
  }, [isAdmin, user?.email]);

  return (
    <div className="py-0 md:max-w-[960px] lg:max-w-[1280px] mx-auto mt-10">
      <motion.table
        layout
        className={`${
          proposals.length > 0 ? "rounded" : "rounded-tr rounded-tl "
        } w-full overflow-hidden`}>
        <motion.thead layout className="bg-slate-600 text-white">
          <tr>
            <th className="border-r border-slate-900 pr-2 text-sm">Name</th>
            <th className="border-r border-slate-900 pr-2 text-sm">Email</th>
            <th className="border-r border-slate-900 pr-2 text-sm">Category</th>
            <th className="border-r border-slate-900 pr-2 text-sm">Details</th>
            <th className="border-r border-slate-900 pr-2 text-sm">
              Created At
            </th>
            <th className="border-r border-slate-900 pr-2 text-sm">File</th>
          </tr>
        </motion.thead>
        <motion.tbody>
          <AnimatePresence>
            {proposals.map((proposal, index) => (
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
                  {proposal.name}
                </td>
                <td className="border-r border-slate-900 p-2 text-sm">
                  {proposal.email}
                </td>
                <td className="border-r border-slate-900 p-2 text-sm">
                  {proposal.category}
                </td>
                <td className="border-r border-slate-900 p-2 text-sm">
                  {proposal.details}
                </td>
                <td className="border-r border-slate-900 p-2 text-sm">
                  {new Date(proposal.createdAt).toLocaleDateString()}
                </td>
                <td className="border-r border-slate-900 p-2 text-sm">
                  {proposal.filePath ? (
                    <div className="flex items-center justify-center space-x-2">
                      <span>{proposal.filePath.split("-").pop()}</span>
                      <a
                        href={`http://localhost:5000/${proposal.filePath}`}
                        download
                        className="text-blue-500 hover:text-blue-700">
                        <FaDownload />
                      </a>
                    </div>
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
          <p className="text-lg font-inter">Loading proposals...</p>
        </div>
      )}
      {!loading && proposals.length === 0 && (
        <div className="bg-gray-300 p-5 w-full rounded-br rounded-bl text-center">
          <p className="text-lg font-inter">No Proposals to Show</p>
        </div>
      )}
    </div>
  );
};

export default Proposals;
