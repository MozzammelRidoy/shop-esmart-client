import { useEffect } from "react";
import useUsers from "../../../hooks/useUsers";
import { timeCoverterGMTtoLocal } from "../../../utils/modules";
import { MdDeleteForever } from "react-icons/md";
import {
  confirmAlert,
  confirmationAlert,
  failedAlert,
} from "../../../Component/SweetAlart/SweelAlart";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
  const [users, isLoading, refetch] = useUsers("/users");

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

  const handleUserRoleChange = (e, email) => {
    //TODO : user role check thek access change other user role check

    const type = e.target.value;

    confirmationAlert({
      detailsText: "Change the type of user?",
      confirmButtonText: "Yes! Change it",
    }).then(async (res) => {
      if (res.isConfirmed) {
        const userRole = { email: email, type: type };

        const res = await axiosSecure.patch("/users/type/update", userRole);
        if (res.data.success) {
          confirmAlert("User Type Change Success!");
          refetch();
        } else {
          failedAlert("Change failed !");
        }
      }
    });
  };

  const handleUserBaned = (e, email) => {
    //TODO : user role check then ban other user

    const isBaned = e.target.value === "true";
    confirmationAlert({
      detailsText: "Ban this user",
      confirmButtonText: "Yes! Ban User",
    }).then(async (res) => {
      if (res.isConfirmed) {
        const userAccess = { email: email, isBaned: isBaned };

        try {
          const res = await axiosSecure.patch(
            "/users/access/update",
            userAccess
          );
          if (res.data.success) {
            confirmAlert("This user has been successfully banned!");
            await refetch();
          } else {
            failedAlert("Failed to ban user !");
          }
        } catch (err) {
          failedAlert("Failed to ban user !");
        }
      }
    });
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
        All Users {users?.length}
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
            {users?.map((user) => (
              <tr className="hover px-2" key={user._id}>
                <td>#{user._id.slice(-8)}</td>
                <td className="capitalize">{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <select
                    onChange={(e) => handleUserBaned(e, user.email)}
                    className={`${
                      user.isBaned ? "text-red-500" : "text-green-500"
                    }`}
                  >
                    {user.isBaned ? (
                      <>
                        <option value={true} className="text-red-500">
                          Banned
                        </option>
                        <option value={false} className="text-green-500">
                          Access
                        </option>
                      </>
                    ) : (
                      <>
                        <option value={false} className="text-green-500">
                          Access
                        </option>
                        <option value={true} className="text-red-500">
                          Banned
                        </option>
                      </>
                    )}
                  </select>
                </td>
                <td>
                  {isMod === "mod" ? (
                    <span className="capitalize">{user.type}</span>
                  ) : (
                    <select
                      className="capitalize px-2 py-1"
                      onChange={(e) => handleUserRoleChange(e, user.email)}
                      default={user.type}
                    >
                      <option value={user.type}>{user.type}</option>
                      {userRole.map(
                        (role, i) =>
                          user.type === role.role || (
                            <option key={i} value={role.role}>
                              {role.role}
                            </option>
                          )
                      )}
                    </select>
                  )}
                </td>
                <td>{timeCoverterGMTtoLocal(user.lastSignInTime)}</td>
                <td>
                  {user?.lastSignOutTime
                    ? timeCoverterGMTtoLocal(user.lastSignOutTime)
                    : "Still logged in"}
                </td>
                <td>
                  {user.activity ? (
                    <span className="text-green-600 text-sm flex items-center">
                      🟢 Online
                    </span>
                  ) : (
                    <span className="text-red-600 text-sm flex items-center">
                      🔴 Offline
                    </span>
                  )}
                </td>

                <td>{timeCoverterGMTtoLocal(user.creationTime)}</td>
                <td>
                  <button
                    onClick={() => handleUsersDelete(user._id)}
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

export default AllUsers;
