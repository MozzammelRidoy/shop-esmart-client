import { useEffect, useState } from "react";
import useUsers from "../../../hooks/useUsers";
import { timeCoverterGMTtoLocal } from "./../../../utils/modules";

import {
  confirmAlert,
  confirmationAlert,
  failedAlert,
} from "../../../Component/SweetAlart/SweelAlart";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { MdDeleteForever } from "react-icons/md";

const AdminUsers = () => {
  const [users, isLoading, refetch] = useUsers("/users/admin");
  const [userType, setUserType] = useState("");
  const axiosSecure = useAxiosSecure();

  const isMod = true;

  const userRole = [
    { role: "manager" },
    { role: "admin" },
    { role: "moderator" },
    { role: "user" },
  ];

  useEffect(() => {
    refetch();
  }, [refetch]);

  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        Please Wait...
      </div>
    );
  }

  const handleUserRoleChange = (e) => {
    setUserType(e.target.value);
  };

  const handleUsersDelete = (_id) => {
    confirmationAlert().then(async (result) => {
      if (result.isConfirmed) {
        // operation
        const res = await axiosSecure.delete(`/users/${_id}`);
        if (res.data.deletedCount) {
          confirmAlert("Deleted Success!");
          refetch();
        } else {
          failedAlert("Delete Failed!");
        }
      }
    });
  };
  return (
    <div className="mb-10">
      <h2 className="text-2xl md:text-4xl text-center py-4">
        Admin Users {users?.length}
      </h2>

      <div className="overflow-x-auto pb-10">
        <table className="table">
          <thead>
            <tr className="md:text-2xl text-lg bg-gray-200 dark:bg-gray-700">
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Type</th>
              <th>Last Login</th>
              <th>Last Logout</th>
              <th>Activity</th>
              <th>Create Time</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className="md:text-base text-sm">
            {users?.map((admin) => (
              <tr className="hover px-2" key={admin._id}>
                <td>#{admin._id.slice(-8)}</td>
                <td className="capitalize">{admin.name}</td>
                <td>{admin.email}</td>
                <td>
                  <select
                    className={`${
                      admin.isBaned ? "text-red-500" : "text-green-500"
                    }`}
                  >
                    {admin.isBaned ? (
                      <>
                        <option value={false} className="text-red-500">
                          Banned
                        </option>
                        <option value={true} className="text-green-500">
                          Access
                        </option>
                      </>
                    ) : (
                      <>
                        <option value={true} className="text-green-500">
                          Access
                        </option>
                        <option value={false} className="text-red-500">
                          Banned
                        </option>
                      </>
                    )}
                  </select>
                </td>
                <td>
                  {isMod === "mod" ? (
                    <span className="capitalize">{admin.type}</span>
                  ) : (
                    <select
                      className="capitalize px-2 py-1"
                      onChange={handleUserRoleChange}
                      default={admin.type}
                    >
                      <option value={admin.type}>{admin.type}</option>
                      {userRole.map(
                        (role, i) =>
                          admin.type === role.role || (
                            <option key={i} value={role.role}>
                              {role.role}
                            </option>
                          )
                      )}
                    </select>
                  )}
                </td>
                <td>{timeCoverterGMTtoLocal(admin.lastSignInTime)}</td>
                <td>
                  {admin?.lastSignOutTime
                    ? timeCoverterGMTtoLocal(admin.lastSignOutTime)
                    : "Still logged in"}
                </td>
                <td>
                  {admin.activity ? (
                    <span className="text-green-600 text-sm flex items-center">
                      🟢 Online
                    </span>
                  ) : (
                    <span className="text-red-600 text-sm flex items-center">
                      🔴 Offline
                    </span>
                  )}
                </td>

                <td>{timeCoverterGMTtoLocal(admin.creationTime)}</td>
                <td>
                  <button
                    onClick={() => handleUsersDelete(admin._id)}
                    className="p-3 rounded-sm bg-gray-100 hover:bg-gray-300 dark:bg-gray-600 hover:dark:bg-gray-700 text-[#ff3811] text-2xl"
                  >
                    <MdDeleteForever />{" "}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminUsers;
